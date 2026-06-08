import { useState } from 'react'
import { motion } from 'framer-motion'
import { Howl } from 'howler'

function MusicButton({ onToggle, isPlaying }) {
  const [sound] = useState(
    new Howl({
      src: ['/Marandhu Poche – Video Song  With Love  Abishan Jeevinth  Anaswara Rajan  Madhan  Sean Roldan - Sony Music South.mp3'],
      autoplay: false,
      loop: true,
      volume: 0.3,
      preload: true,
    })
  )

  const handleToggle = () => {
    if (isPlaying) {
      sound.stop()
      onToggle(false)
    } else {
      sound.play()
      onToggle(true)
    }
  }

  return (
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
      transition={isPlaying ? { duration: 3, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500 shadow-lg hover:shadow-2xl flex items-center justify-center text-2xl sm:text-3xl transition-all"
      aria-label="Toggle music"
    >
      {isPlaying ? '🎵' : '🔇'}
    </motion.button>
  )
}

export default MusicButton
