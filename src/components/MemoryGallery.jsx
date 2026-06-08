import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'

function MemoryGallery() {
  const memories = [
    { id: 1, image: '/WhatsApp Image 2026-03-06 at 4.26.32 PM.jpeg', caption: '❤️ Our Special Moments' },
    { id: 2, image: '/WhatsApp Image 2026-03-06 at 6.39.35 PM (2).jpeg', caption: '💕 Best Friends' },
    { id: 3, image: '/WhatsApp Image 2026-05-13 at 2.36.42 PM (2).jpeg', caption: '🌸 Forever Friends' },
    { id: 4, image: '/ChatGPT Image Apr 30, 2026, 06_44_38 PM.png', caption: '✨ Always Together' },
  ]

  return (
    <div className="w-full max-w-sm sm:max-w-md px-2 sm:px-0">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        loop
        className="rounded-2xl overflow-hidden"
      >
        {memories.map((memory, index) => (
          <SwiperSlide key={memory.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl"
            >
              <div className="relative bg-gradient-to-br from-yellow-100 to-pink-50 rounded-xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl transition-all">
                <img
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <motion.div 
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-2 right-2 text-3xl sm:text-4xl"
                >
                  📌
                </motion.div>
              </div>
              <p className="mt-4 text-center text-gray-700 font-bold handwriting text-base sm:text-lg">
                {memory.caption}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-center text-gray-600 mt-4 text-xs sm:text-sm px-2">← Swipe through memories →</p>
    </div>
  )
}

export default MemoryGallery
