import type React from "react"
import { motion } from "framer-motion"

interface PrayerCardProps {
  name: string
  time: string
}

const PrayerCard: React.FC<PrayerCardProps> = ({ name, time }) => {
  return (
    <motion.div
      className="prayer-card inline-block m-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
          {name}
        </h3>
        <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
          {time}
        </p>
      </div>
    </motion.div>
  )
}

export default PrayerCard

