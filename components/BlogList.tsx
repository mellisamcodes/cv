'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { BlogPost, CategoryInfo, Category } from '@/lib/blog'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination'

interface BlogListProps {
  posts: BlogPost[]
  categories: CategoryInfo[]
}

const POSTS_PER_PAGE = 16

// Explicit class mappings for Tailwind to detect
const categoryStyles: Record<string, string> = {
  all: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
  business: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300',
  marketing: 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300',
  ai: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300',
  'stocks-investments': 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300',
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === activeCategory)

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('ellipsis')
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i)
      }
      if (currentPage < totalPages - 2) pages.push('ellipsis')
      pages.push(totalPages)
    }
    return pages
  }

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 text-sm rounded-md border transition-all ${
              activeCategory === category.id
                ? `border-gray-900 dark:border-gray-100 ${categoryStyles[category.id]} font-medium`
                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="space-y-4">
        {paginatedPosts.map((post) => {
          const pillStyle = categoryStyles[post.category] || 'bg-gray-100 text-gray-700'
          const categoryLabel = categories.find((c) => c.id === post.category)?.label || post.category

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="no-highlight block p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="font-handwritten text-[25px] text-gray-900 dark:text-gray-100">{post.title}</h2>
                <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${pillStyle}`}>
                  {categoryLabel}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{post.description}</p>
            </Link>
          )
        })}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          No posts found in this category.
        </p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>

            {getPageNumbers().map((page, index) =>
              page === 'ellipsis' ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => handlePageChange(page)}
                    isActive={currentPage === page}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  )
}
