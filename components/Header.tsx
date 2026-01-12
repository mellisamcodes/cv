'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
  loading: () => <div className="w-9 h-9" />,
})

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/blog') {
      return pathname === '/blog' || pathname.startsWith('/blog/')
    }
    return pathname === path
  }

  return (
    <header className="px-6 py-6 lg:px-12" suppressHydrationWarning>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-handwritten text-2xl no-highlight">
          Mellisa Myres
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/blog"
            className={`text-sm ${
              isActive('/blog')
                ? 'relative'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
            }`}
          >
            {isActive('/blog') ? (
              <span className="highlight-nav">Blog</span>
            ) : (
              'Blog'
            )}
          </Link>
          <Link
            href="/about"
            className={`text-sm ${
              isActive('/about')
                ? 'relative'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
            }`}
          >
            {isActive('/about') ? (
              <span className="highlight-nav">About Me</span>
            ) : (
              'About Me'
            )}
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
