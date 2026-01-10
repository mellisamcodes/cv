import { Metadata } from 'next'
import SocialLinks from '@/components/SocialLinks'
import BlogList from '@/components/BlogList'
import Header from '@/components/Header'
import { getAllPosts, categories } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on business ideas, marketing frameworks, and strategies to help you sell on the internet.',
  openGraph: {
    title: 'Blog | Mellisa Myres',
    description: 'Insights on business ideas, marketing frameworks, and strategies to help you sell on the internet.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Mellisa Myres',
    description: 'Insights on business ideas, marketing frameworks, and strategies to help you sell on the internet.',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold mb-12 text-center">
            <span className="highlight-title">Blog</span>
          </h1>

          {/* Blog List with Client-side Filtering */}
          <BlogList posts={posts} categories={categories} />
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Find and follow me over here</p>
            <SocialLinks showLabels iconSize={18} />
          </div>
          <p className="text-gray-400 text-sm">
            &copy;Mellisa Myres {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
