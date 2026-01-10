import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import HeroSection from '@/components/HeroSection'
import GuidesSection from '@/components/GuidesSection'
import CompaniesSection from '@/components/CompaniesSection'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-handwritten text-2xl no-highlight">
            Mellisa Myres
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              About Me
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 lg:px-12 py-8 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-16">
            {/* Sidebar - sticky on desktop */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 mt-12 lg:mt-0">
              <HeroSection />
              <GuidesSection />
              <CompaniesSection />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
