import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Navigation from "../components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Prayer Times",
  description: "Daily prayer times and schedule",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 min-h-screen`}>
        <div className="flex flex-col min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-pattern"></div>
          <Navigation />
          <div className="flex-grow relative z-10">{children}</div>
        </div>
      </body>
    </html>
  )
}

