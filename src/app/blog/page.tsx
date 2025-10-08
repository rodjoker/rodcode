import Single3DText from '@/components/Single3DText'
import BlogDetail from '@/components/BlogDetail'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Datos de ejemplo - Luego podrías moverlos a un CMS o API
const blogPosts = [
  {
    id: '1',
    title: 'Mi Gran Salto: Construyendo mi Portafolio',
    summary: 'Llevo dos años sumergido en el mundo del desarrollo, una travesía emocionante, pero hasta hace poco, sentía que me faltaba algo crucial: trabajo que fuera realmente mío para mostrar.',
    content: '...',
    image: '/hologramas_portfolio.png',
    date: '8 Oct 2025',
    readTime: '5 min lectura',
    tags: ['Next.js', 'React', 'Development'],
    author: {
      name: 'Rodolfo Rodríguez',
      avatar: '/rodolfo_perfil.png'
    }
  },
  {
    id: '2',
    title: 'Optimización de rendimiento en React',
    summary: 'Guía completa sobre cómo mejorar el rendimiento de tus aplicaciones React. Desde la implementación de memorización hasta la optimización de renderizado.',
    content: '...',
    image: '/blog/react-performance.jpg',
    date: '5 Oct 2025',
    readTime: '7 min lectura',
    tags: ['React', 'Performance', 'JavaScript'],
    author: {
      name: 'Rodolfo Rodríguez',
      avatar: '/rodolfo_perfil.png'
    }
  }
]

export default function Blog() {
  return (
    <>
      <Header />
      <div className="pt-24 md:pt-28">
        <Single3DText text="Blog" height="40vh" />
      </div>
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <BlogDetail
                key={post.id}
                {...post}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}