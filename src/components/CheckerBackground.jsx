import { motion } from 'framer-motion'

function CheckerBackground() {
  return (
    <>
      <div
        className="fixed inset-0 -z-50"
        style={{
          backgroundImage: `
            repeating-conic-gradient(
              rgb(254, 243, 199) 0% 25%,
              rgb(255, 255, 255) 0% 50%
            )
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0',
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-transparent via-pink-50 to-yellow-50 opacity-20" />
      
      {/* Floating background hearts */}
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute text-6xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            💕
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default CheckerBackground
