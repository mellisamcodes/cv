'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import SocialLinks from './SocialLinks'

export default function Sidebar() {
  const [stickyTop, setStickyTop] = useState(80)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current) return

      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const sidebarHeight = sidebarRef.current.offsetHeight

      // Calculate the centered position
      const centeredTop = (windowHeight - sidebarHeight) / 2

      // Transition from 80px to centered position based on scroll
      const transitionStart = 0
      const transitionEnd = 300
      const progress = Math.min(Math.max((scrollY - transitionStart) / (transitionEnd - transitionStart), 0), 1)

      // Interpolate between 80px and centered position
      const newTop = 80 + (centeredTop - 80) * progress
      setStickyTop(Math.max(newTop, 20)) // Minimum 20px from top
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <aside className="w-full lg:w-[380px] lg:flex-shrink-0">
      <div
        ref={sidebarRef}
        className="lg:sticky transition-all duration-300 ease-out"
        style={{ top: `${stickyTop}px` }}
      >
        {/* Profile Photo */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 flex-shrink-0 overflow-hidden">
            <Image
              src="/mel.png"
              alt="Mellisa Myres"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              A business and marketing enthusiast with a dream: to build one of Ghana's most impactful companies.
            </p>
            <p>
              Currently, I&apos;m the founder of{' '}
              <a
                href="https://strawlo.com"
                className="underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Strawlo
              </a>{' '}
              - a software company empowering African merchants to sell online with ease. 
              Right now, my focus is clear—growing Strawlo to 1,000 users and proving that African-built solutions can solve African problems.
            </p>
          </div>
        </div>

        {/* Bio paragraphs */}
        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          <p>
            I&apos;ve spent years working as a product marketer across various companies, and I've learned a thing or two along the way. This is where I share those insights—everything from growth strategies to marketing lessons and business.
          </p>
          <p>
            If you love talking shop about business and marketing as much as I do, you're in the right place.
          </p>
        </div>

        {/* Find Me */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Get in touch</p>
          <SocialLinks iconSize={18} />
        </div>
      </div>
    </aside>
  )
}
