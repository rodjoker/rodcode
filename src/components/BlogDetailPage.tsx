'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface BlogDetailPageProps {
  blogId: string
}

interface Author {
  name: string
  avatar: string
}

interface BlogPost {
  title: string
  content: string
  image: string
  date: string
  readTime: string
  tags: string[]
  author: Author
}

// Tipo para el objeto blogPosts con firma de índice
interface BlogPosts {
  [key: string]: BlogPost
}

// Datos de ejemplo - Luego podrías moverlos a un CMS o API
const blogPosts: BlogPosts = {
  '1': {
    title: 'Mi Gran Salto: Construyendo mi Portafolio',
    content: `
      <article class="prose prose-invert lg:prose-xl max-w-none text-justify">
        <p>Llevo dos años sumergido en el mundo del desarrollo, una travesía emocionante, pero hasta hace poco, sentía que me faltaba algo crucial: trabajo que fuera realmente mío para mostrar...</p>
      </article>
    `,
    image: '/hologramas_portfolio.png',
    date: '8 Oct 2025',
    readTime: '5 min lectura',
    tags: ['Next.js', 'React', 'Development'],
    author: {
      name: 'Rodolfo Rodríguez',
      avatar: '/rodolfo_perfil.png'
    }
  },
  '2': {
    title: 'Crea Tu Propia Agenda de Metas',
    content: `
      <article class="prose prose-invert lg:prose-xl max-w-none">
        <p>Definir nuestras metas es, sin duda, uno de los actos más revolucionarios que podemos hacer por nosotros mismos...</p>
      </article>
    `,
    image: '/crea_metas.png',
    date: '10 Oct 2025',
    readTime: '7 min lectura',
    tags: ['Evoluciona', 'Mejora', 'Superate'],
    author: {
      name: 'Rodolfo Rodríguez',
      avatar: '/rodolfo_perfil.png'
    }
  }
}

const getImagePosition = (imageUrl: string, id: string) => {
  // Mapeo de posiciones específicas para cada imagen
  const imagePositions: { [key: string]: string } = {
    '/hologramas_portfolio.png': 'object-center',
    '/crea_metas.png': 'object-top'
  }

  // Posiciones por ID como respaldo
  const idPositions: { [key: string]: string } = {
    '1': 'object-center',
    '2': 'object-top'
  }

  // Primero intenta encontrar la posición por URL de imagen, luego por ID, o usa un valor predeterminado
  return imagePositions[imageUrl] || idPositions[id] || 'object-top'
}

export default function BlogDetailPage({ blogId }: BlogDetailPageProps) {
  const router = useRouter()
  const post = blogPosts[blogId]

  if (!post) {
    return <div>Artículo no encontrado</div>
  }

  return (
    <div className="pt-24 md:pt-28">
      <main className="min-h-screen container mx-auto px-4 py-8">
        <button
          onClick={() => router.push('/blog')}
          className="flex items-center text-gray-300 hover:text-gray-100 transition-colors duration-200 mb-8"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver al Blog
        </button>

        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/20 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[500px] w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className={`object-cover ${getImagePosition(post.image, blogId)}`}
              sizes="100vw"
              priority
            />
          </div>

          <div className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative h-12 w-12">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-200 font-medium">{post.author.name}</p>
                <div className="flex items-center text-gray-400 text-sm">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-100 mb-6">{post.title}</h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-800/80 border border-gray-700/40 text-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div 
              className="text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}