import Link from 'next/link'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 pt-12 pb-8">
      {/* Social Links */}
      <div className="text-center mb-8">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Find and follow me over here</p>
        <div className="flex justify-center">
          <SocialLinks showLabels iconSize={18} />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center">
        <p className="text-gray-400 text-sm mb-4">&copy;Mellisa Myres {currentYear}</p>
        <Link href="/" className="font-handwritten text-2xl text-gray-900 dark:text-gray-100 no-highlight">
          Mellisa Myres
        </Link>
      </div>
    </footer>
  )
}
