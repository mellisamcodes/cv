import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'

export type Category = 'all' | 'business' | 'marketing' | 'ai' | 'stocks-investments'

export interface BlogPost {
  slug: string
  title: string
  description: string
  category: Exclude<Category, 'all'>
  date: string
  image: string
  content: string
  htmlContent?: string
}

export interface CategoryInfo {
  id: Category
  label: string
  color: string
  bgColor: string
}

export const categories: CategoryInfo[] = [
  { id: 'all', label: 'All', color: 'text-gray-700', bgColor: 'bg-gray-100' },
  { id: 'business', label: 'Business', color: 'text-blue-700', bgColor: 'bg-blue-100' },
  { id: 'marketing', label: 'Marketing', color: 'text-pink-700', bgColor: 'bg-pink-100' },
  { id: 'ai', label: 'AI', color: 'text-purple-700', bgColor: 'bg-purple-100' },
  { id: 'stocks-investments', label: 'Stocks & Investments', color: 'text-green-700', bgColor: 'bg-green-100' },
]

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        category: data.category || 'business',
        date: data.date || new Date().toISOString(),
        image: data.image || '/blog/placeholder.jpg',
        content,
      } as BlogPost
    })

  // Sort by date descending
  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostsByCategory(category: Category): BlogPost[] {
  const posts = getAllPosts()
  if (category === 'all') return posts
  return posts.filter((post) => post.category === category)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts()
  return posts.find((post) => post.slug === slug)
}

export async function getPostWithHtml(slug: string): Promise<BlogPost | undefined> {
  const post = getPostBySlug(slug)
  if (!post) return undefined

  const processedContent = await remark()
    .use(gfm) // GitHub Flavored Markdown: tables, task lists, strikethrough, etc.
    .use(html, { sanitize: true }) // Sanitize HTML for security
    .process(post.content)
  const htmlContent = processedContent.toString()

  return {
    ...post,
    htmlContent,
  }
}

export function getRelatedPosts(
  currentSlug: string,
  category: Exclude<Category, 'all'>,
  limit = 3
): BlogPost[] {
  const posts = getAllPosts()
  return posts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getCategoryInfo(categoryId: string): CategoryInfo {
  return (
    categories.find((c) => c.id === categoryId) || {
      id: 'business' as Category,
      label: 'Business',
      color: 'text-blue-700',
      bgColor: 'bg-blue-100',
    }
  )
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}
