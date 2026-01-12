'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      onClick={() => mounted && setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors no-highlight w-9 h-9 flex items-center justify-center"
      aria-label="Toggle dark mode"
      suppressHydrationWarning
    >
      {mounted && (
        resolvedTheme === 'dark' ? (
          <Sun size={20} className="text-gray-600 dark:text-gray-400" />
        ) : (
          <Moon size={20} className="text-gray-600 dark:text-gray-400" />
        )
      )}
    </button>
  )
}
