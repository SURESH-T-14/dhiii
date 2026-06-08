import { motion } from 'framer-motion'

function FriendName({ name, onChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your friend's name"
        className="text-3xl font-bold text-center text-pink-500 placeholder-pink-300 placeholder-opacity-70 border-none border-b-4 border-pink-400 focus:border-pink-600 focus:outline-none bg-transparent w-full max-w-sm transition-all"
      />
    </motion.div>
  )
}

export default FriendName
