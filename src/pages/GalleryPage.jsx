import GreetingCard from '../components/GreetingCard'
import MemoryGallery from '../components/MemoryGallery'
import ChoiceButton from '../components/ChoiceButton'
import { motion } from 'framer-motion'

function GalleryPage({ onNext, onPrev }) {
  return (
    <GreetingCard>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <motion.h1 
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl md:text-5xl font-bold text-pink-500 handwriting px-2"
        >
          Memory Gallery 📸
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg px-2"
        >
          Our favorite moments together! 💕
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center my-8"
        >
          <MemoryGallery />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 text-sm italic"
        >
          ← Swipe to see more memories →
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center pt-6 flex-wrap"
        >
          <ChoiceButton 
            label="Back" 
            emoji="⬅️" 
            onClick={onPrev}
            variant="secondary"
          />
          <ChoiceButton 
            label="Next" 
            emoji="➡️" 
            onClick={onNext}
            variant="primary"
          />
        </motion.div>
      </motion.div>
    </GreetingCard>
  )
}

export default GalleryPage
