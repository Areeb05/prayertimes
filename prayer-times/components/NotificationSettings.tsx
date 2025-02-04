import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface NotificationPreference {
  enabled: boolean
  minutesBefore: number
}

interface NotificationPreferences {
  [key: string]: NotificationPreference
}

const DEFAULT_PREFERENCES: NotificationPreferences = {
  Fajr: { enabled: true, minutesBefore: 30 },
  Dhuhr: { enabled: true, minutesBefore: 15 },
  Asr: { enabled: true, minutesBefore: 15 },
  Maghrib: { enabled: true, minutesBefore: 10 },
  Isha: { enabled: true, minutesBefore: 20 },
}

const NotificationSettings: React.FC = () => {
  const [preferences, setPreferences] = useState<NotificationPreferences>(DEFAULT_PREFERENCES)

  useEffect(() => {
    const storedPreferences = localStorage.getItem("notificationPreferences")
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("notificationPreferences", JSON.stringify(preferences))
  }, [preferences])

  const handleToggle = (prayer: string) => {
    setPreferences((prev) => ({
      ...prev,
      [prayer]: { ...prev[prayer], enabled: !prev[prayer].enabled },
    }))
  }

  const handleMinutesChange = (prayer: string, minutes: number) => {
    setPreferences((prev) => ({
      ...prev,
      [prayer]: { ...prev[prayer], minutesBefore: minutes },
    }))
  }

  const handleSetNotifications = () => {
    // Here you would typically integrate with a notification API
    // For now, we'll just log the preferences
    console.log("Setting notifications:", preferences)
    alert("Notifications settings have been updated!")
  }

  return (
    <motion.div
      className="glass-effect p-6 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 gradient-text">Notification Settings</h2>
      {Object.entries(preferences).map(([prayer, pref]) => (
        <div key={prayer} className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" checked={pref.enabled} onChange={() => handleToggle(prayer)} className="mr-2" />
            <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              {prayer}
            </span>
          </label>
          <input
            type="number"
            value={pref.minutesBefore}
            onChange={(e) => handleMinutesChange(prayer, Number.parseInt(e.target.value))}
            min="1"
            max="120"
            className="mt-2 p-2 bg-gray-800 text-white rounded"
            disabled={!pref.enabled}
          />
          <span className="ml-2 text-white">minutes before</span>
        </div>
      ))}
      <div className="mt-6">
        <button
          onClick={handleSetNotifications}
          className="w-full bg-gradient-to-br from-gray-800 to-gray-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          style={{
            boxShadow: "0 0 10px rgba(139, 192, 255, 0.3), 0 0 20px rgba(147, 151, 255, 0.2)",
            textShadow: "0 0 5px rgba(139, 192, 255, 0.5)",
          }}
        >
          Set Notifications
        </button>
      </div>
    </motion.div>
  )
}

export default NotificationSettings

