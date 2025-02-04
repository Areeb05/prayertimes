"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

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

export default function ScheduleView() {
  const [data, setData] = useState<PrayerSchedule[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const scheduleData = await fetchScheduleData()
      setData(scheduleData)
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Prayer Times Schedule
        </motion.h1>
        <motion.div
          className="overflow-x-auto glass-effect rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-4 py-2 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Day
                </th>
                <th className="px-4 py-2 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Islamic Date
                </th>
                <th className="px-4 py-2 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Gregorian Date
                </th>
                <th className="px-4 py-2 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Fajr
                </th>
                <th className="px-4 py-2 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Dhuhr
                </th>
                <th className="px-4 py-2 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Asr
                </th>
                <th className="px-4 py-2 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Maghrib
                </th>
                <th className="px-4 py-2 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Isha
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b border-gray-800 last:border-b-0">
                  <td className="px-4 py-2 text-white">{row.day}</td>
                  <td className="px-4 py-2 text-gray-300">{row.date}</td>
                  <td className="px-4 py-2 text-gray-300">{row.gregorianDate}</td>
                  <td className="px-4 py-2 text-gray-300">{row.fajr}</td>
                  <td className="px-4 py-2 text-gray-300">{row.dhuhr}</td>
                  <td className="px-4 py-2 text-gray-300">{row.asr}</td>
                  <td className="px-4 py-2 text-gray-300">{row.maghrib}</td>
                  <td className="px-4 py-2 text-gray-300">{row.isha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </main>
    </div>
  )
}

