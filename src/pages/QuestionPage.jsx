import GreetingCard from '../components/GreetingCard'
import ChoiceButton from '../components/ChoiceButton'
import { motion } from 'framer-motion'

function QuestionPage({ onNext, onPrev, friendName }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  return (
    <GreetingCard>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center space-y-8"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl font-bold text-pink-500 handwriting mb-3">
            Wait wait wait...
          </h1>
          <p className="text-2xl text-gray-700 font-bold">
            Are you sure?
          </p>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-600 italic"
        >
          {friendName} is really your best friend? 👀
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="space-y-2"
        >
          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl"
          >
            💭💕
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center pt-6 flex-wrap"
        >
          <ChoiceButton 
            label="Nah" 
            emoji="😒" 
            onClick={onPrev}
            variant="secondary"
            evasive={true}
          />
          <ChoiceButton 
            label="I'm Ready!!" 
            emoji="✨" 
            onClick={onNext}
            variant="primary"
          />
        </motion.div>
      </motion.div>
    </GreetingCard>
  )
}

export default QuestionPage
