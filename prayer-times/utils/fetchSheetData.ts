// Placeholder data
const placeholderData = [
  { date: "2023-05-01", fajr: "04:30", dhuhr: "12:30", asr: "16:00", maghrib: "19:30", isha: "21:00" },
  { date: "2023-05-02", fajr: "04:29", dhuhr: "12:30", asr: "16:01", maghrib: "19:31", isha: "21:01" },
  { date: "2023-05-03", fajr: "04:28", dhuhr: "12:30", asr: "16:02", maghrib: "19:32", isha: "21:02" },
  { date: "2023-05-04", fajr: "04:27", dhuhr: "12:30", asr: "16:03", maghrib: "19:33", isha: "21:03" },
  { date: "2023-05-05", fajr: "04:26", dhuhr: "12:30", asr: "16:04", maghrib: "19:34", isha: "21:04" },
]

export async function fetchSheetData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return placeholderData
}

