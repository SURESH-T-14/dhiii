import { motion } from 'framer-motion'

function ProgressDots({ currentStep, totalSteps }) {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => {}}
          animate={{
            scale: currentStep === index ? 1.4 : 1,
            backgroundColor: currentStep === index ? '#ec407a' : '#f8bbd0',
            boxShadow: currentStep === index 
              ? '0 4px 20px rgba(236, 64, 122, 0.4)' 
              : '0 2px 8px rgba(248, 187, 208, 0.2)'
          }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
          className="w-4 h-4 rounded-full cursor-pointer hover:scale-125 transition-transform"
          aria-label={`Go to step ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default ProgressDots
