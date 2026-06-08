import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function FloatingDecorations() {
  const [decorations, setDecorations] = useState([])

  useEffect(() => {
    const items = [
      { id: 1, emoji: '❤️', size: 'text-2xl', duration: 6, delay: 0 },
      { id: 2, emoji: '💕', size: 'text-3xl', duration: 7, delay: 0.5 },
      { id: 3, emoji: '🌸', size: 'text-2xl', duration: 8, delay: 1 },
      { id: 4, emoji: '✨', size: 'text-xl', duration: 6.5, delay: 1.5 },
      { id: 5, emoji: '💖', size: 'text-3xl', duration: 7.5, delay: 2 },
      { id: 6, emoji: '🌹', size: 'text-2xl', duration: 8.5, delay: 2.5 },
      { id: 7, emoji: '⭐', size: 'text-xl', duration: 7, delay: 3 },
      { id: 8, emoji: '💝', size: 'text-2xl', duration: 6.5, delay: 3.5 },
      { id: 9, emoji: '🎀', size: 'text-2xl', duration: 7.5, delay: 4 },
      { id: 10, emoji: '🌺', size: 'text-xl', duration: 8, delay: 4.5 },
    ]
    setDecorations(items)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {decorations.map((decoration) => (
        <motion.div
          key={decoration.id}
          className={`absolute ${decoration.size} opacity-70`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -100,
            rotate: 0,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
            x: Math.random() * window.innerWidth - 50,
          }}
          transition={{
            duration: decoration.duration,
            delay: decoration.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {decoration.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingDecorations
