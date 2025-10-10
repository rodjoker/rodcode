'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface BlogDetailProps {
  id: string
  title: string
  summary: string
  content: string
  image: string
  date: string
  readTime: string
  tags: string[]
  author: {
    name: string
    avatar: string
  }
}

export default function BlogDetail({ 
  id,
  title, 
  summary, 
  image, 
  date, 
  readTime,
  tags,
  author
}: BlogDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative h-10 w-10">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-200 font-medium">{author.name}</p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>{date}</span>
              <span className="mx-2">•</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-100 mb-3">{title}</h2>
        <p className="text-gray-300 mb-4 line-clamp-3">{summary}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800/80 border border-gray-700/40 text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link 
          href={`/blog/${id}`}
          className="inline-flex items-center text-gray-300 hover:text-gray-100 transition-colors duration-200"
        >
          Leer más
          <svg 
            className="w-5 h-5 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}