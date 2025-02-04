"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="glass-effect p-4 sticky top-0 z-20">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text mb-4 sm:mb-0">
          Prayer Times
        </Link>
        <div className="space-x-4">
          <Link
            href="/"
            className={`transition-colors ${pathname === "/" ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Today
            </motion.span>
          </Link>
          <Link
            href="/schedule"
            className={`transition-colors ${pathname === "/schedule" ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              Full Schedule
            </motion.span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

