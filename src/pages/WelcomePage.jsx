import GreetingCard from '../components/GreetingCard'
import FriendName from '../components/FriendName'
import ChoiceButton from '../components/ChoiceButton'
import { useState } from 'react'
import { motion } from 'framer-motion'

function WelcomePage({ onNext, onNameSet }) {
  const [name, setName] = useState('')
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const BEST_FRIEND_NAME = 'suresh'

  const handleNameChange = (newName) => {
    setName(newName)
    onNameSet(newName)
    setShowError(false)
    setShowSuccess(false)
  }

  const handleNext = () => {
    if (!name.trim()) {
      setShowError(true)
      return
    }

    // Check if the name matches the best friend
    if (name.toLowerCase() === BEST_FRIEND_NAME.toLowerCase()) {
      setShowSuccess(true)
      setShowError(false)
      // Navigate after showing success message
      setTimeout(() => {
        onNext()
      }, 1500)
    } else {
      setShowError(true)
      setShowSuccess(false)
    }
  }

  return (
    <GreetingCard>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 handwriting mb-2 px-2">
            Happy Best Friends Day
          </h1>
          <p className="text-lg md:text-2xl text-pink-300">💕 🎀 💕</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4 px-2"
        >
          <p className="text-lg md:text-xl text-gray-600 font-semibold">
            Who is your best friend?
          </p>

          <FriendName name={name} onChange={handleNameChange} />

          {/* Success Message - Correct Name */}
          {showSuccess && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 rounded-full px-6 py-3"
            >
              <p className="text-2xl font-bold text-green-600 handwriting">
                YES! 💚 You're my bestie!
              </p>
              <p className="text-lg text-green-600 mt-2">✨ Let's go! ✨</p>
            </motion.div>
          )}

          {/* Error Message - Wrong Name */}
          {showError && name.trim() && name.toLowerCase() !== BEST_FRIEND_NAME.toLowerCase() && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-400 rounded-full px-6 py-3"
            >
              <p className="text-2xl font-bold text-red-600 handwriting">
                Hmm... 🤔 Are you sure?
              </p>
              <p className="text-lg text-red-600 mt-2">
                {name} is not my best friend! 💔
              </p>
              <p className="text-sm text-red-500 mt-2 italic">
                Only one special person is my best friend...
              </p>
            </motion.div>
          )}

          {name && (
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold text-pink-500 handwriting"
            >
              {name} 💕
            </motion.p>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-700 font-bold"
        >
          Are you ready?
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 justify-center pt-6 flex-wrap"
        >
          <ChoiceButton 
            label="Nope" 
            emoji="🙄" 
            onClick={() => setName('')}
            variant="secondary"
            evasive={true}
          />
          <ChoiceButton 
            label="Ofc!!" 
            emoji="💞" 
            onClick={handleNext}
            variant="primary"
          />
        </motion.div>
      </motion.div>
    </GreetingCard>
  )
}

export default WelcomePage
