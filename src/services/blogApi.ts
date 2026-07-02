const API_URL = process.env.NEXT_PUBLIC_BLOG_API_URL || 'http://localhost:3000'

export interface Article {
  id: number
  title: string
  content: string
  image?: string
  author?: string
  isPublished: boolean
  createdAt: string
  updatedAt: string
}

export interface PaginatedResult<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export function getArticleImageUrl(article: Article): string | null {
  if (!article.image) return null
  if (article.image.startsWith('/uploads/')) return `${API_URL}${article.image}`
  if (article.image.startsWith('data:image/')) return `${API_URL}/articles/image/${article.id}`
  return null
}

export async function getArticles(params?: {
  page?: number
  limit?: number
  search?: string
}): Promise<PaginatedResult<Article>> {
  const url = new URL(`${API_URL}/articles`)
  url.searchParams.set('page', String(params?.page ?? 1))
  url.searchParams.set('limit', String(params?.limit ?? 9))
  if (params?.search) url.searchParams.set('search', params.search)

  const res = await fetch(url.toString(), { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Error al cargar artículos')
  return res.json()
}

export async function getArticle(id: string): Promise<Article> {
  const res = await fetch(`${API_URL}/articles/${id}`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Artículo no encontrado')
  return res.json()
}
