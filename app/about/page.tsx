import { Metadata } from 'next'
import SocialLinks from '@/components/SocialLinks'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'About Me | Mellisa Myres',
  description: 'Business enthusiast, product marketer, and serial entrepreneur documenting the path to building a game-changing companies. This is my story.',
  openGraph: {
    title: 'About Me | Mellisa Myres',
    description: 'Business enthusiast, product marketer, and serial entrepreneur documenting the path to building a game-changing companies. This is my story.',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Me | Mellisa Myres',
    description: 'Business enthusiast, product marketer, and serial entrepreneur documenting the path to building a game-changing companies. This is my story.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold mb-16 text-center">
            <span className="highlight-title">About me</span>
          </h1>

          {/* Bio Content */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Hey there, I&apos;m Mellisa Myres (yes, it&apos;s Meh-lissah—I know, my parents were feeling creative).
            </p>

            <p>
              I&apos;m caffeinated and mildly obsessed with figuring out why some businesses absolutely crush it while others... don&apos;t. Business books are my guilty pleasure (I know, I&apos;m fun at parties), and I have an embarrassing number of tabs open about marketing strategies and AI at any given moment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 pt-4">The Professional Bit</h2>

            <p>
              I graduated at 23 with a 3.28 GPA in Business Administration—not valedictorian, but I stayed awake for most of it. Since then, I&apos;ve launched three companies (because apparently one wasn&apos;t enough chaos). Two are still standing:{' '}
              <a
                href="https://strawlo.com"
                className="underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Strawlo
              </a>{' '}
              and Marketing Crafted (launching soon—watch this space).
            </p>

            <p>
              When I&apos;m not building my own ventures, I&apos;ve worked as a product marketer for several companies. Turns out I really love the challenge of taking a good product and making people actually care about it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 pt-4">What&apos;s Next</h2>

            <p>
              2026 is my year to finally crack the code on stocks and investments. I figure if I&apos;m going to build one of Africa&apos;s most successful companies (yes, I said it out loud), I should probably understand where money goes when it&apos;s not funding my next idea.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 pt-4">Why This Blog Exists</h2>

            <p>
              I&apos;m documenting the whole messy, exciting journey here—the wins, the facepalm moments, and everything I&apos;m learning along the way. If you&apos;re into business, marketing, or just watching someone try to figure it all out in real-time, stick around.
            </p>

            <p>Let&apos;s build something great.</p>
          </div>

          {/* Signature */}
          <div className="mt-8 mb-20">
            <p className="font-handwritten text-3xl mb-2">Mellisa Myres</p>
            <div className="w-64 h-0.5 bg-gray-900 dark:bg-gray-100"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-2xl mx-auto">
          {/* Social Links */}
          <div className="mb-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Find and follow me over here</p>
            <SocialLinks showLabels iconSize={18} />
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">&copy;Mellisa Myres {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}
