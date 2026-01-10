import Link from 'next/link'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-6 lg:px-12 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-200 mb-4">404</h1>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Page not found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </main>
    </div>
  )
}
