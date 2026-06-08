import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'

function LetterCard({ friendName }) {
  const [showConfetti, setShowConfetti] = useState(true)
  const [displayedText, setDisplayedText] = useState('')
  
  const fullMessage = `hii reeee i am suresh unuku therium irundhalum solluvan 😂 ... iniku best friends day idhu naa reels laaa paathan nala irundhchu unukaga paanaa and suma pananum nu panala yena nee yenodaa spl person and best friend ... i am a type enaku romba pidichavanga enakunu irukanum nuu maybe it look selfish but naa apdi dhaaa naa kandipa jealous avaan possessive aavan adhu laaa yaru keta varum romba pudicvanga keita dhaney.....i like u more as a best friend nee enaku just best friend ilaa ur my closed one kudaa never think harini ilaa nu un keta varanu aava vera mari enaku nee vera mari enaku rendu perumey enaku romba pudikum and mukiyam .... even if enaku un mela edachu feelings vandha kudaa enaku unda best freind bond matum epaium poga kudadhu i love to fight anoy disturb as well as i love to care you... i may have kutty crush on u adhu unoda char pudichi and kandipa nee azhagudhaa adhum oru reason but indha bond mela oru crush iruku jolly ah flirt panitu sanda potutu kochikutu idhum nala dhaa irukum may long we can go but i will be there with you as best friend....with all my love and care..once again happy best freind day and i always love you my best friend hu sry erumaaaa 😂🤍`

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullMessage.length) {
        setDisplayedText(fullMessage.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 20)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-6"
    >
      {showConfetti && <Confetti recycle={false} numberOfPieces={100} />}
      
      <motion.h2 
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-5xl font-bold text-pink-500 handwriting"
      >
        Happy Best Friends Day! 💕
      </motion.h2>
      
      <div className="bg-gradient-to-b from-white to-pink-50 rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto border-2 border-pink-100">
        <p className="text-xl text-gray-700 font-bold mb-6">Dear {friendName || 'Best Friend'},</p>
        
        <p className="text-lg text-gray-600 leading-relaxed min-h-[120px]">
          {displayedText}
          <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>
            |
          </motion.span>
        </p>
        
        <p className="text-2xl font-bold text-pink-500 handwriting mt-8 mb-4">Forever your friend,</p>
        
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-4xl mt-4 space-x-2"
        >
          <span>💖</span>
          <span>✨</span>
          <span>💕</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LetterCard
