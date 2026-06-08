import { motion } from 'framer-motion'

function Header() {
  const decorations = ['❤️', '❤️', '🎀', '💖', '🌸']

  return (
    <div className="text-center pt-6 relative z-20">
      <div className="flex justify-center items-center gap-2 flex-wrap">
        {decorations.map((emoji, index) => (
          <motion.span
            key={index}
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2.5,
              delay: index * 0.15,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="text-3xl md:text-5xl inline-block"
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export default Header
