import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import MusicButton from './components/MusicButton'
import CheckerBackground from './components/CheckerBackground'
import FloatingDecorations from './components/FloatingDecorations'
import WelcomePage from './pages/WelcomePage'
import QuestionPage from './pages/QuestionPage'
import GalleryPage from './pages/GalleryPage'
import LetterPage from './pages/LetterPage'
import ProgressDots from './components/ProgressDots'
import './index.css'

function App() {
  const [step, setStep] = useState(0)
  const [friendName, setFriendName] = useState('')
  const [music, setMusic] = useState(false)

  const totalSteps = 4

  const goToNextStep = () => {
    if (step < totalSteps - 1) setStep(step + 1)
  }

  const goToPreviousStep = () => {
    if (step > 0) setStep(step - 1)
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return <WelcomePage onNext={goToNextStep} onNameSet={setFriendName} />
      case 1:
        return <QuestionPage onNext={goToNextStep} onPrev={goToPreviousStep} friendName={friendName} />
      case 2:
        return <GalleryPage onNext={goToNextStep} onPrev={goToPreviousStep} />
      case 3:
        return <LetterPage friendName={friendName} />
      default:
        return null
    }
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background with checkerboard pattern */}
      <div className="fixed inset-0 -z-50">
        <CheckerBackground />
      </div>

      {/* Floating decorations */}
      <div className="fixed inset-0 -z-40 pointer-events-none">
        <FloatingDecorations />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <MusicButton onToggle={setMusic} isPlaying={music} />
        
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        <ProgressDots currentStep={step} totalSteps={totalSteps} />
      </div>
    </div>
  )
}

export default App
