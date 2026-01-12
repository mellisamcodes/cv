import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SocialLinks from '@/components/SocialLinks'
import Header from '@/components/Header'
import {
  getPostBySlug,
  getPostWithHtml,
  getRelatedPosts,
  formatDate,
  getAllSlugs,
} from '@/lib/blog'

// Explicit class mappings for Tailwind to detect
const categoryStyles: Record<string, { label: string; classes: string }> = {
  business: { label: 'Business', classes: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300' },
  marketing: { label: 'Marketing', classes: 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300' },
  ai: { label: 'AI', classes: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300' },
  'stocks-investments': { label: 'Stocks & Investments', classes: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const ogImage = post.image || '/og-default.jpg'

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostWithHtml(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category)
  const categoryStyle = categoryStyles[post.category] || { label: post.category, classes: 'bg-gray-100 text-gray-700' }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="px-6 lg:px-12 py-8 lg:py-16">
        <article className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="text-primary text-sm hover:underline mb-8 inline-flex items-center gap-1"
          >
            <span>&larr;</span> Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-8 mt-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs px-3 py-1 rounded-full ${categoryStyle.classes}`}>
                {categoryStyle.label}
              </span>
              <time className="text-sm text-gray-500 dark:text-gray-400">{formatDate(post.date)}</time>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">{post.description}</p>
          </header>

          {/* Featured Image */}
          <div className="relative w-full h-64 lg:h-96 mb-10 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="absolute inset-0 flex items-center justify-center text-primary/30">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          {/* Post Content - Rendered Markdown */}
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
          />

          {/* Author Signature */}
          <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 mb-2">Thanks for reading,</p>
            <p className="font-handwritten text-2xl">Mellisa Myres</p>
          </div>
        </article>

        {/* Recommended Reads */}
        {relatedPosts.length > 0 && (
          <section className="max-w-3xl mx-auto mt-16 pt-12 border-t border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-6">Recommended Reads</h2>
            <div className="space-y-4">
              {relatedPosts.map((relatedPost) => {
                const relatedStyle = categoryStyles[relatedPost.category] || { label: relatedPost.category, classes: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300' }
                return (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="no-highlight block p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-handwritten text-[20px] text-gray-900 dark:text-gray-100">{relatedPost.title}</h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${relatedStyle.classes}`}
                      >
                        {relatedStyle.label}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{relatedPost.description}</p>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
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
