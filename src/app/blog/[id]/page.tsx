'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface BlogPostProps {
  params: {
    id: string
  }
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
        <p>Llevo dos años sumergido en el mundo del desarrollo, una travesía emocionante, pero hasta hace poco, sentía que me faltaba algo crucial: trabajo que fuera realmente mío para mostrar. Como desarrollador, he pasado este tiempo formando parte de un equipo increíble de seniors, construyendo aplicaciones robustas. El problema es que todo estaba blindado bajo acuerdos de confidencialidad (NDA). Mi experiencia crecía, pero mi portafolio digital, la ventana a mi talento, estaba vacío.</p>
        <br />
        <p>Ese vacío se convirtió en una señal: era momento de dar el gran salto. Quería probarme en nuevos desafíos, crecer, y demostrar mis conocimientos en una empresa de mayor envergadura. Pero, ¿cómo te presentas a un nuevo reto sin evidencia tangible?</p>

        <h2>El Reto de "Crear mi Propio Trabajo"</h2>
        <br />
        <p>Empecé el camino más obvio: crear mi propio portafolio. Y ahí llegó la primera lección de humildad: diseñar es más complicado de lo que esperaba. Soy programador, no diseñador, y de repente, me encontré lidiando con paletas de colores, tipografías y layouts.</p>
        <br />
        <p>Pero perseveré. Después de muchos intentos y correcciones, llegué a un diseño que me encantó, un landing que me representa. No solo eso, me permití experimentar: ¡agregué animaciones en 3D! Fue una forma de obligarme a ir más allá, de expresar mis conocimientos en cada componente y, lo más importante, de crear mi propio trabajo, proyectos reales que ofrecen soluciones.</p>
        <br />
         <p>Este proceso ha sido una inyección de energía. He construido mi portafolio usando Next.js, una herramienta potente para la parte frontend. Para la lógica de negocio y la base de datos de mis proyectos personales, estoy usando NestJS como backend y Supabase como mi solución serverless y de base de datos. ¡Estoy construyendo más aplicaciones activamente para mostrar todo lo que he aprendido hasta ahora!</p>
         <p>Este tiempo de dedicación y esfuerzo en mi portafolio no es solo para tener algo "bonito" que mostrar; es la prueba de que estoy preparado para grandes cosas.</p>
        <br />
         <h2>Venciendo al Síndrome del Impostor </h2>
     
         <p>Crear mi propio espacio ha sido terapéutico. Me ha ayudado a dejar atrás el síndrome del impostor, esa voz interna que susurra que no eres lo suficientemente bueno. Cada línea de código que escribo en este proyecto personal es un golpe a esa duda. Me estoy llenando de valor y ánimo para emprender este nuevo camino de crecimiento profesional.</p>
         <br />
         <h2>La Cuarta Revolución Industrial: Nuestro Asistente IA</h2>
         <br />
         <p>Si estás en un proceso similar, ya sea creando tu portafolio, buscando nuevas ideas o atascado en un error, tengo un mensaje para ti: no te detengas.</p>
         
         <p>La programación es un camino largo, lleno de curvas de aprendizaje, pero si de verdad te apasiona, sé que disfrutarás cada proceso como lo hago yo. Y hoy tenemos una ventaja que no existía hace una década: la inteligencia artificial como asistente.</p>
         <br />
         <p>Necesitas generar ideas para un proyecto, corregir un bug, o entender un nuevo concepto? Utiliza la IA. Debemos aprovechar que estamos en la cuarta revolución industrial para ser programadores óptimos, creativos, y con la ayuda de la tecnología, entregar proyectos que realmente marquen la diferencia para nuestros clientes (o para nosotros mismos).</p>
         <br />
         <p>Espero que mi camino te inspire a crear, desarrollar y a no parar. El portafolio está casi listo, la determinación es total. Mi siguiente meta está a la vista.</p>

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
    title: 'Optimización de rendimiento en React',
    content: `
      <article class="prose prose-invert lg:prose-xl max-w-none">
        <p>El rendimiento es crucial para el éxito de cualquier aplicación web moderna. En este artículo, exploraremos técnicas avanzadas para optimizar aplicaciones React.</p>

        <h2>Memorización efectiva</h2>
        <p>Aprende a utilizar useMemo y useCallback de manera efectiva para prevenir renderizados innecesarios y mejorar el rendimiento de tu aplicación.</p>

        <h2>Code Splitting</h2>
        <p>Implementa técnicas de división de código para reducir el tamaño inicial del bundle y mejorar los tiempos de carga de tu aplicación.</p>

        <h2>Optimización de imágenes</h2>
        <p>Descubre las mejores prácticas para la optimización de imágenes y cómo implementarlas en tu aplicación React.</p>

        <p>Si estás pensando en construir tu portafolio, no dejes que el diseño te detenga. Enfócate en la solución y utiliza herramientas de Inteligencia Artificial como Stitch para asistirte.

        </article>
    `,
    image: '/blog/react-performance.jpg',
    date: '5 Oct 2025',
    readTime: '7 min lectura',
    tags: ['React', 'Performance', 'JavaScript'],
    author: {
      name: 'Rodolfo Rodríguez',
      avatar: '/rodolfo_perfil.png'
    }
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const router = useRouter()
  const post = blogPosts[params.id]

  if (!post) {
    return <div>Artículo no encontrado</div>
  }

  return (
    <>
    <Header/>
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
          <div className="relative h-96 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
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
    <Footer/>
    </>
  )
}