import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

function ChoiceButton({ label, emoji, onClick, variant = 'primary', evasive = false }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef(null)

  const variants = {
    primary: 'bg-gradient-to-r from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-md hover:shadow-lg',
  }

  const handleMouseMove = (e) => {
    if (!evasive || !buttonRef.current) return

    const button = buttonRef.current
    const rect = button.getBoundingClientRect()
    const buttonCenterX = rect.left + rect.width / 2
    const buttonCenterY = rect.top + rect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    const distanceX = mouseX - buttonCenterX
    const distanceY = mouseY - buttonCenterY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

    // If mouse is getting close (within 80px), move the button away
    if (distance < 80) {
      const angle = Math.atan2(distanceY, distanceX)
      const moveDistance = 150
      const newX = Math.cos(angle + Math.PI) * moveDistance
      const newY = Math.sin(angle + Math.PI) * moveDistance

      setPosition({ x: newX, y: newY })
    } else {
      // Return to original position when mouse moves away
      setPosition({ x: 0, y: 0 })
    }
  }

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      whileHover={!evasive ? { scale: 1.08, y: -2 } : {}}
      whileTap={!evasive ? { scale: 0.95 } : {}}
      className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-lg transition-all ${variants[variant]}`}
    >
      <motion.span
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      >
        {label} {emoji}
      </motion.span>
    </motion.button>
  )
}

export default ChoiceButton
