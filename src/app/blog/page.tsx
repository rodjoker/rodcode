import Single3DText from '@/components/Single3DText'
import BlogDetail from '@/components/BlogDetail'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticles, Article } from '@/services/blogApi'

export const metadata = {
  title: 'Blog — RodCode',
  description: 'Artículos sobre desarrollo, tecnología y crecimiento personal.',
}

interface Props {
  searchParams: Promise<{ page?: string; search?: string }>
}

export default async function Blog({ searchParams }: Props) {
  const { page, search } = await searchParams
  const currentPage = Number(page ?? 1)

  let result: { data: Article[]; total: number; page: number; limit: number; totalPages: number } = { data: [], total: 0, page: 1, limit: 9, totalPages: 1 }
  let fetchError = false

  try {
    result = await getArticles({ page: currentPage, limit: 6, search })
  } catch {
    fetchError = true
  }

  const { data: articles, total, totalPages } = result
  const firstItem = (currentPage - 1) * 6 + 1
  const lastItem = Math.min(currentPage * 6, total)

  return (
    <>
      <Header />
      <div className="pt-24 md:pt-28">
        <Single3DText text="Blog" height="40vh" />
      </div>

      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">

          {/* Search bar */}
          <form method="GET" action="/blog" className="mb-10 max-w-lg mx-auto">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                name="search"
                defaultValue={search ?? ''}
                placeholder="Buscar por título o autor..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700/40 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-400/60 transition-colors"
              />
            </div>
          </form>

          {/* Estado de error */}
          {fetchError && (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No se pudo conectar con el servidor. Intenta más tarde.</p>
            </div>
          )}

          {/* Sin artículos */}
          {!fetchError && articles.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              {search
                ? <p className="text-lg">Sin resultados para &ldquo;{search}&rdquo;</p>
                : <p className="text-lg">No hay artículos publicados aún.</p>
              }
            </div>
          )}

          {/* Grid de artículos */}
          {!fetchError && articles.length > 0 && (
            <>
              {(total > 6 || search) && (
                <p className="text-gray-500 text-sm text-center mb-6">
                  {search
                    ? `${total} resultado${total !== 1 ? 's' : ''} para "${search}"`
                    : `Mostrando ${firstItem}–${lastItem} de ${total} artículos`
                  }
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <BlogDetail key={article.id} article={article} />
                ))}
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  {currentPage > 1 && (
                    <a
                      href={`/blog?page=${currentPage - 1}${search ? `&search=${encodeURIComponent(search)}` : ''}`}
                      className="px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700/40 text-gray-300 hover:text-gray-100 hover:border-gray-500 transition-colors text-sm"
                    >
                      ← Anterior
                    </a>
                  )}

                  <span className="px-4 py-2 text-gray-400 text-sm">
                    Página {currentPage} de {totalPages}
                  </span>

                  {currentPage < totalPages && (
                    <a
                      href={`/blog?page=${currentPage + 1}${search ? `&search=${encodeURIComponent(search)}` : ''}`}
                      className="px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700/40 text-gray-300 hover:text-gray-100 hover:border-gray-500 transition-colors text-sm"
                    >
                      Siguiente →
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
