'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Article, getArticle, getArticleImageUrl } from '@/services/blogApi'

export default function BlogPost({ blogId }: { blogId: string }) {
  const router = useRouter()
  const [post, setPost] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getArticle(blogId)
      .then(setPost)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [blogId])

  if (loading) {
    return (
      <>
        <Header />
        <div className="pt-24 md:pt-28 min-h-screen container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6 max-w-3xl mx-auto">
            <div className="h-6 bg-gray-800 rounded w-32" />
            <div className="h-[400px] bg-gray-800 rounded-lg" />
            <div className="h-8 bg-gray-800 rounded w-3/4" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-4 bg-gray-800 rounded" />)}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (error || !post) {
    return (
      <>
        <Header />
        <div className="pt-24 md:pt-28 min-h-screen container mx-auto px-4 py-8 text-center text-gray-400">
          <p className="text-xl">Artículo no encontrado</p>
          <button
            onClick={() => router.push('/blog')}
            className="mt-4 text-blue-300 hover:text-blue-100 transition-colors"
          >
            ← Volver al Blog
          </button>
        </div>
        <Footer />
      </>
    )
  }

  const imageUrl = getArticleImageUrl(post)

  return (
    <>
      <Header />
      <div className="pt-24 md:pt-28">
        <main className="min-h-screen container mx-auto px-4 py-8">
          <button
            onClick={() => router.push('/blog')}
            className="flex items-center text-gray-300 hover:text-gray-100 transition-colors duration-200 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al Blog
          </button>

          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/20 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            {/* Hero image */}
            {imageUrl && (
              <div className="relative w-full h-[400px]">
                <Image
                  src={imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                  unoptimized
                />
              </div>
            )}

            <div className="p-8">
              {/* Author */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image
                    src="/rodolfo_perfil.png"
                    alt="Rodolfo Rodríguez"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-200 font-medium">{post.author || 'Rodolfo Rodríguez'}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(post.createdAt).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-100 mb-8">{post.title}</h1>

              {/* Markdown content */}
              <div className="prose prose-invert prose-lg max-w-none prose-headings:text-gray-100 prose-a:text-blue-300 hover:prose-a:text-blue-100 prose-code:bg-gray-800 prose-code:text-gray-200 prose-pre:bg-gray-950 prose-blockquote:border-blue-400 prose-strong:text-gray-100 prose-img:rounded-xl">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
