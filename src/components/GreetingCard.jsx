import { motion } from 'framer-motion'

function GreetingCard({ children, className = '' }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: -20 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 0.5 }}
      className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full backdrop-blur-sm border-2 border-pink-100 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default GreetingCard
