'use client'

import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

interface SocialLinksProps {
  className?: string
  iconSize?: number
  showLabels?: boolean
}

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://x.com/mellisacodes',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mellisa-myres/',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mellisaamimi/',
    icon: Instagram,
  },
  {
    name: 'Email',
    href: 'mailto:mellisamyres901@gmail.com',
    icon: Mail,
  },
]

export default function SocialLinks({
  className = '',
  iconSize = 20,
  showLabels = false,
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <social.icon size={iconSize} />
          {showLabels && (
            <span className="underline text-sm">{social.name}</span>
          )}
        </a>
      ))}
    </div>
  )
}
