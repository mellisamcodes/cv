import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

// Explicit class mappings for Tailwind to detect
const categoryStyles: Record<string, { label: string; classes: string }> = {
  business: { label: 'Business', classes: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300' },
  marketing: { label: 'Marketing', classes: 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300' },
  ai: { label: 'AI', classes: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300' },
  'stocks-investments': { label: 'Stocks & Investments', classes: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' },
}

export default function GuidesSection() {
  const posts = getAllPosts().slice(0, 5)

  return (
    <section className="mb-16">
      <h2 className="text-gray-500 dark:text-gray-400 text-sm mb-6">Latest posts</h2>
      <div className="space-y-4">
        {posts.map((post) => {
          const style = categoryStyles[post.category] || { label: post.category, classes: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300' }
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="no-highlight block p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-display text-xl text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${style.classes}`}>
                  {style.label}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{post.description}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
