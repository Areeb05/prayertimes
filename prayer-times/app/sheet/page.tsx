"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navigation from "../../components/navigation"

// Simulating data fetch
const fetchSheetData = async () => {
  // This is a placeholder. Replace with actual data fetching logic.
  return [
    { date: "2023-05-01", fajr: "04:30", dhuhr: "12:30", asr: "16:00", maghrib: "19:30", isha: "21:00" },
    { date: "2023-05-02", fajr: "04:29", dhuhr: "12:30", asr: "16:01", maghrib: "19:31", isha: "21:01" },
    { date: "2023-05-03", fajr: "04:28", dhuhr: "12:30", asr: "16:02", maghrib: "19:32", isha: "21:02" },
  ]
}

export default function SheetView() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const sheetData = await fetchSheetData()
      setData(sheetData)
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Prayer Times Schedule
        </motion.h1>
        <motion.div
          className="overflow-x-auto glass-effect rounded-2xl p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-300">Date</th>
                <th className="px-4 py-2 text-left text-gray-300">Fajr</th>
                <th className="px-4 py-2 text-left text-gray-300">Dhuhr</th>
                <th className="px-4 py-2 text-left text-gray-300">Asr</th>
                <th className="px-4 py-2 text-left text-gray-300">Maghrib</th>
                <th className="px-4 py-2 text-left text-gray-300">Isha</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <motion.tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-800 bg-opacity-30" : "bg-gray-700 bg-opacity-30"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <td className="px-4 py-2 text-white">{row.date}</td>
                  <td className="px-4 py-2 text-gray-300">{row.fajr}</td>
                  <td className="px-4 py-2 text-gray-300">{row.dhuhr}</td>
                  <td className="px-4 py-2 text-gray-300">{row.asr}</td>
                  <td className="px-4 py-2 text-gray-300">{row.maghrib}</td>
                  <td className="px-4 py-2 text-gray-300">{row.isha}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </main>
    </div>
  )
}

