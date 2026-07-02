'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Article, getArticleImageUrl } from '@/services/blogApi'

export default function BlogDetail({ article }: { article: Article }) {
  const imageUrl = getArticleImageUrl(article)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-64 w-full bg-gray-800">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={article.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl text-gray-600">
            📝
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Author row */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src="/rodolfo_perfil.png"
              alt="Rodolfo Rodríguez"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-200 font-medium">{article.author || 'Rodolfo Rodríguez'}</p>
            <p className="text-gray-400 text-sm">
              {new Date(article.createdAt).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-100 mb-3">{article.title}</h2>
        <p className="text-gray-300 mb-4 line-clamp-3">
          {article.content.replace(/[#*`>\-_~\[\]]/g, '').slice(0, 200)}
        </p>

        <Link
          href={`/blog/${article.id}`}
          className="inline-flex items-center text-gray-300 hover:text-gray-100 transition-colors duration-200"
        >
          Leer más
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}
