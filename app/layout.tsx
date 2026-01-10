import type { Metadata } from 'next'
import { Inter, Caveat, Shadows_Into_Light_Two, Archivo_Black } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})

const shadowsIntoLight = Shadows_Into_Light_Two({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-shadows',
})

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mellisa-myres.com'),
  title: {
    default: 'Mellisa Myres - Business Ideas & Marketing Frameworks',
    template: '%s | Mellisa Myres',
  },
  description: 'Business ideas and marketing frameworks to help you sell on the internet. Insights on building digital products and growing businesses.',
  keywords: ['business ideas', 'marketing frameworks', 'digital products', 'entrepreneurship', 'online business'],
  authors: [{ name: 'Mellisa Myres' }],
  creator: 'Mellisa Myres',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mellisa-myres.com',
    siteName: 'Mellisa Myres',
    title: 'Mellisa Myres - Business Ideas & Marketing Frameworks',
    description: 'Business ideas and marketing frameworks to help you sell on the internet.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mellisa Myres',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mellisa Myres - Business Ideas & Marketing Frameworks',
    description: 'Business ideas and marketing frameworks to help you sell on the internet.',
    images: ['/og-image.jpg'],
    creator: '@mellisa_myres',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${caveat.variable} ${shadowsIntoLight.variable} ${archivoBlack.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
