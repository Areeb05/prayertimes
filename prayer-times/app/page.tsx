"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { format } from "date-fns"
import PrayerCard from "../components/PrayerCard"
import NotificationSettings from "../components/NotificationSettings"

interface PrayerSchedule {
  day: string
  date: string
  gregorianDate: string
  fajr: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
}

const fetchScheduleData = async (): Promise<PrayerSchedule[]> => {
  // This is now using the provided data
  return [
    {
      day: "Sunday",
      date: "Shaban 3",
      gregorianDate: "February 2",
      fajr: "6:15 AM",
      dhuhr: "1:00 PM",
      asr: "4:15 PM",
      maghrib: "5:14 PM",
      isha: "8:00 PM",
    },
    {
      day: "Monday",
      date: "Shaban 4",
      gregorianDate: "February 3",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:30 PM",
      maghrib: "5:15 PM",
      isha: "8:00 PM",
    },
    {
      day: "Tuesday",
      date: "Shaban 5",
      gregorianDate: "February 4",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:30 PM",
      maghrib: "5:16 PM",
      isha: "8:00 PM",
    },
    {
      day: "Wednesday",
      date: "Shaban 6",
      gregorianDate: "February 5",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:30 PM",
      maghrib: "5:18 PM",
      isha: "8:00 PM",
    },
    {
      day: "Thursday",
      date: "Shaban 7",
      gregorianDate: "February 6",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:30 PM",
      maghrib: "5:19 PM",
      isha: "8:00 PM",
    },
    {
      day: "Friday",
      date: "Shaban 8",
      gregorianDate: "February 7",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:30 PM",
      maghrib: "5:20 PM",
      isha: "8:00 PM",
    },
    {
      day: "Saturday",
      date: "Shaban 9",
      gregorianDate: "February 8",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:30 PM",
      maghrib: "5:22 PM",
      isha: "8:00 PM",
    },
    {
      day: "Sunday",
      date: "Shaban 10",
      gregorianDate: "February 9",
      fajr: "6:15 AM",
      dhuhr: "1:00 PM",
      asr: "4:30 PM",
      maghrib: "5:23 PM",
      isha: "8:00 PM",
    },
    {
      day: "Monday",
      date: "Shaban 11",
      gregorianDate: "February 10",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:24 PM",
      isha: "8:00 PM",
    },
    {
      day: "Tuesday",
      date: "Shaban 12",
      gregorianDate: "February 11",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:25 PM",
      isha: "8:00 PM",
    },
    {
      day: "Wednesday",
      date: "Shaban 13",
      gregorianDate: "February 12",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:27 PM",
      isha: "8:00 PM",
    },
    {
      day: "Thursday",
      date: "Shaban 14",
      gregorianDate: "February 13",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:28 PM",
      isha: "8:00 PM",
    },
    {
      day: "Friday",
      date: "Shaban 15",
      gregorianDate: "February 14",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:29 PM",
      isha: "8:00 PM",
    },
    {
      day: "Saturday",
      date: "Shaban 16",
      gregorianDate: "February 15",
      fajr: "6:15 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:31 PM",
      isha: "8:00 PM",
    },
    {
      day: "Sunday",
      date: "Shaban 17",
      gregorianDate: "February 16",
      fajr: "6:15 AM",
      dhuhr: "1:00 PM",
      asr: "4:45 PM",
      maghrib: "5:32 PM",
      isha: "8:00 PM",
    },
    {
      day: "Monday",
      date: "Shaban 18",
      gregorianDate: "February 17",
      fajr: "6:00 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:33 PM",
      isha: "8:00 PM",
    },
    {
      day: "Tuesday",
      date: "Shaban 19",
      gregorianDate: "February 18",
      fajr: "6:00 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:34 PM",
      isha: "8:00 PM",
    },
    {
      day: "Wednesday",
      date: "Shaban 20",
      gregorianDate: "February 19",
      fajr: "6:00 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:36 PM",
      isha: "8:00 PM",
    },
    {
      day: "Thursday",
      date: "Shaban 21",
      gregorianDate: "February 20",
      fajr: "6:00 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:37 PM",
      isha: "8:00 PM",
    },
    {
      day: "Friday",
      date: "Shaban 22",
      gregorianDate: "February 21",
      fajr: "6:00 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:38 PM",
      isha: "8:00 PM",
    },
    {
      day: "Saturday",
      date: "Shaban 23",
      gregorianDate: "February 22",
      fajr: "6:00 AM",
      dhuhr: "1:30 PM",
      asr: "4:45 PM",
      maghrib: "5:39 PM",
      isha: "8:00 PM",
    },
    {
      day: "Sunday",
      date: "Shaban 24",
      gregorianDate: "February 23",
      fajr: "6:00 AM",
      dhuhr: "1:00 PM",
      asr: "4:45 PM",
      maghrib: "5:41 PM",
      isha: "8:00 PM",
    },
  ]
}

export default function Home() {
  const [todayData, setTodayData] = useState<PrayerSchedule | null>(null)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const scheduleData = await fetchScheduleData()
      const today = new Date()
      const formattedToday = format(today, "MMMM d").toLowerCase()
      const todaySchedule = scheduleData.find((item) => item.gregorianDate.toLowerCase().includes(formattedToday))
      setTodayData(todaySchedule || null)
    }
    fetchData()
  }, [])

  useEffect(() => {
    // Simulated notification system
    const checkNotifications = () => {
      const now = new Date()
      const storedPreferences = localStorage.getItem("notificationPreferences")
      if (storedPreferences && todayData) {
        const preferences = JSON.parse(storedPreferences)
        Object.entries(preferences).forEach(([prayer, pref]: [string, any]) => {
          if (pref.enabled) {
            const prayerTime = new Date(
              now.toDateString() + " " + todayData[prayer.toLowerCase() as keyof PrayerSchedule],
            )
            const notificationTime = new Date(prayerTime.getTime() - pref.minutesBefore * 60000)
            if (now >= notificationTime && now < prayerTime) {
              console.log(`Notification: ${prayer} prayer time in ${pref.minutesBefore} minutes`)
            }
          }
        })
      }
    }

    const intervalId = setInterval(checkNotifications, 60000) // Check every minute
    return () => clearInterval(intervalId)
  }, [todayData])

  if (!todayData)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    )

  const prayers = [
    { name: "Fajr", time: todayData.fajr },
    { name: "Dhuhr", time: todayData.dhuhr },
    { name: "Asr", time: todayData.asr },
    { name: "Maghrib", time: todayData.maghrib },
    { name: "Isha", time: todayData.isha },
  ]

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Al-Azhaar Barrington
        </motion.h1>
        <motion.h2
          className="text-lg sm:text-xl font-semibold mb-8 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {todayData.day}, {todayData.date} ({todayData.gregorianDate})
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center items-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {prayers.map((prayer) => (
            <PrayerCard key={prayer.name} name={prayer.name} time={prayer.time} />
          ))}
        </motion.div>
        <div className="text-center">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="bg-gradient-to-br from-gray-800 to-gray-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            style={{
              boxShadow: "0 0 10px rgba(139, 192, 255, 0.3), 0 0 20px rgba(147, 151, 255, 0.2)",
              textShadow: "0 0 5px rgba(139, 192, 255, 0.5)",
            }}
          >
            {showSettings ? "Hide Notification Settings" : "Enable Notifications"}
          </button>
        </div>
        {showSettings && <NotificationSettings />}
      </main>
    </div>
  )
}

