'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Header from '../../components/Header'
import Footer from '@/components/Footer'
import ClientThreeHero from '@/components/ClientThreeHero'
import ThreeDeskClient from '@/components/ThreeDeskClient'
import ProjectDetail from '@/components/ProjectDetail'
import Single3DText from '@/components/Single3DText'
import ProfileCard from '@/components/ProfileCard'
import ServiceDetail from '@/components/ServiceDetail'
import { PDFDownloadButton } from '@/components/PDFDownloadButton'

// ─── Iconos contribuciones ───────────────────────────────────────────────────
const FullStackIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
)
const CloudIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
)
const MobileIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)
const AIIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

// ─── Datos proyectos ─────────────────────────────────────────────────────────
const projects = [
  {
    title: 'Delivery App',
    description: 'Aplicación de entrega a domicilio con seguimiento en tiempo real y sistema de pagos. Gestiona pedidos de restaurantes y tiendas con actualización instantánea vía WebSockets.',
    imageUrl: '/delivery_app.PNG',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    githubUrl: 'https://github.com/rodjoker',
    demoUrl: 'https://delivery-ten-umber.vercel.app/',
    date: '2025',
  },
  {
    title: 'Landing Page Castello Films',
    description: 'Página web para la productora y editora Castello Films. Diseño moderno y responsivo con animaciones fluidas.',
    imageUrl: '/castello_pw.PNG',
    technologies: ['NextJS', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rodjoker',
    demoUrl: 'https://mc-landing-two.vercel.app/home',
    date: '2025',
  },
  {
    title: 'Strategy Search Job',
    description: 'Agenda con estrategia de búsqueda de empleo basada en metodologías probadas para maximizar las posibilidades de encontrar trabajo.',
    imageUrl: '/strategySearchJob.PNG',
    technologies: ['NextJS', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rodjoker',
    demoUrl: 'https://strategy-search-job.vercel.app/dashboard',
    date: '2025',
  },
  {
    title: 'ToneShift',
    description: 'PWA para transportar tonalidades de canciones. Detecta automáticamente la tonalidad, soporta acordes en español e inglés y transpone en tiempo real por semitonos.',
    imageUrl: '/toneshift.PNG',
    technologies: ['Next.js', 'TypeScript', 'Zustand', 'Framer Motion', 'PWA'],
    githubUrl: 'https://github.com/rodjoker/toneshift',
    demoUrl: 'https://toneshift-one.vercel.app/',
    date: '2025',
  },
  {
    title: 'Movie App',
    description: 'Catálogo de películas con tendencias semanales, búsqueda en tiempo real y sistema de favoritos persistente. Consume la API de TMDB con caché inteligente vía React Query.',
    imageUrl: '/movie_app.PNG',
    technologies: ['Next.js', 'TypeScript', 'React Query', 'Zustand', 'Axios', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rodjoker/movieApp_rodcode',
    demoUrl: 'https://movie-app-rodcode.vercel.app/',
    date: '2025',
  },
]

// ─── Qué puedo aportar ────────────────────────────────────────────────────────
const contributions = [
  {
    title: 'Aplicaciones Full Stack — Del MVP al Deploy',
    description: 'Construyo productos completos de principio a fin: desde la interfaz hasta el servidor y la base de datos. He desarrollado plataformas multi-rol en producción con flujos complejos, como GEMES — una plataforma de logística con clientes, operadores y domiciliarios coordinándose en tiempo real.',
    technologies: ['Next.js', 'React', 'NestJS', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    features: [
      'Arquitectura modular y escalable desde el diseño inicial',
      'Sistemas multi-rol con permisos y flujos diferenciados',
      'Integración completa UI + API + base de datos',
      'Deploy en producción con Serverless Framework y Vercel',
    ],
    icon: <FullStackIcon />,
  },
  {
    title: 'Infraestructura Cloud y Sistemas en Tiempo Real',
    description: 'Diseño e implemento arquitecturas serverless sobre AWS que escalan automáticamente. En GEMES construí la capa de tiempo real completa: WebSockets con API Gateway, caché con Redis/Upstash, GPS tracking en background, autenticación con Cognito y almacenamiento de archivos en S3.',
    technologies: ['AWS Lambda', 'API Gateway', 'Cognito', 'S3', 'Redis', 'WebSockets', 'Serverless'],
    features: [
      'WebSockets para coordinación en tiempo real entre múltiples actores',
      'Autenticación y roles con AWS Cognito + Amplify',
      'GPS tracking en background con actualización continua',
      'Notificaciones push con prioridad alta vía Expo Notifications',
    ],
    icon: <CloudIcon />,
  },
  {
    title: 'Apps Móviles con Ecosistema Integrado',
    description: 'Desarrollo aplicaciones móviles para iOS y Android con React Native y Expo, completamente integradas con su backend. La app de riders de GEMES maneja geolocalización continua, cámara, notificaciones push y sincronización con WebSockets — todo en un solo código base.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'AWS Amplify', 'NativeWind'],
    features: [
      'Una sola base de código para iOS y Android',
      'Background location tracking con Expo Task Manager',
      'Integración con Google Maps y servicios de ubicación',
      'Estado global eficiente con Zustand + AsyncStorage',
    ],
    icon: <MobileIcon />,
  },
  {
    title: 'Desarrollo Potenciado con Inteligencia Artificial',
    description: 'Uso la IA como co-piloto de desarrollo: para escribir código más limpio, detectar edge cases antes de que lleguen a producción, documentar mejor y entregar más rápido. No reemplaza el criterio técnico — lo amplifica. El resultado es código más mantenible y equipos más productivos.',
    technologies: ['Claude AI', 'Cursor IDE', 'GitHub Copilot', 'Prompt Engineering'],
    features: [
      'Código más limpio, documentado y con mejores patrones',
      'Detección temprana de bugs y casos borde',
      'Mayor velocidad de entrega sin sacrificar calidad',
      'Revisión continua de arquitectura y mejores prácticas',
    ],
    icon: <AIIcon />,
  },
]

// ─── Página principal (single-page) ──────────────────────────────────────────
export default function Home() {
  const form = useRef<HTMLFormElement>(null)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
      )
      .then(
        () => {
          setStatusMessage('Mensaje enviado con éxito ✅')
          setIsSuccess(true)
          form.current?.reset()
        },
        () => {
          setStatusMessage('Error al enviar el mensaje ❌')
          setIsSuccess(false)
        }
      )
  }

  return (
    <>
      <Header />

      {/* ══════════════════════════════════════════
          SECCIÓN: HERO
      ══════════════════════════════════════════ */}
      <section id="home" className="min-h-screen bg-black text-white overflow-x-hidden">
        <div className="relative max-w-6xl mx-auto px-4 py-10 mt-36 md:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-green-900/30 border border-green-500/40 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Disponible para trabajar</span>
              </div>
              <h1 className="text-5xl font-bold mb-4 text-white">
                RodCode — Rodolfo Rodriguez
              </h1>
              <p className="text-2xl text-gray-300 mb-4">
                Programador Web FullStack
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Transformo ideas en soluciones digitales efectivas con React, Next.js, Node.js y AWS.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Ver proyectos
                </a>
                <a
                  href="#contact"
                  className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-800/50 hover:text-white hover:border-gray-500 transition-colors"
                >
                  Hablar conmigo
                </a>
                <PDFDownloadButton />
              </div>

              <div className="mt-8">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Certificaciones</p>
                <a
                  href="https://www.credly.com/badges/e829ea0a-7fad-4379-ab9c-c4f0b813fb32/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gray-900/60 border border-gray-700/40 hover:border-gray-500/60 rounded-xl px-4 py-2 transition-colors group"
                >
                  <img
                    src="/aws_cloud_practitioner.PNG"
                    alt="AWS Certified Cloud Practitioner"
                    className="w-12 h-12 object-contain"
                  />
                  <div className="text-left">
                    <p className="text-white text-sm font-semibold group-hover:text-gray-200">AWS Certified Cloud Practitioner</p>
                    <p className="text-gray-400 text-xs">Amazon Web Services · 2025</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="h-[60vh] w-full relative z-0 overflow-hidden">
              <ClientThreeHero />
            </div>
          </div>

          <div className="mt-20">
            <div className="w-full h-[60vh] bg-transparent rounded-lg overflow-hidden border border-gray-800">
              <ThreeDeskClient />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECCIÓN: ABOUT
      ══════════════════════════════════════════ */}
      <section id="about" className="bg-black text-white">
        <Single3DText text="RodCode" height="40vh" backgroundColor="#6e6c6cff" />

        <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center px-4 py-16">
          <div className="max-w-5xl w-11/12">
            <ProfileCard
              name="Rodolfo Rodríguez"
              title="Frontend Developer"
              description="Desde que tengo memoria, la tecnología me fascinaba. Mientras otros soñaban con ser astronautas o futbolistas, yo soñaba con entender cómo funcionaban los ordenadores, los videojuegos, los cables, los códigos. Me pasaba horas imaginando que algún día podría crear cosas increíbles con solo unas líneas en una pantalla. Aunque no lo sabía entonces, esa pasión infantil sería la semilla de algo mucho más grande."
              subtitle="Mi Enfoque"
              additionalDescription="En algún punto pensé que no se iba a poder, pero descubrí que la vida te puede dar sorpresas."
              image="/rodolfo_perfil.png"
              showReadMore={true}
              extendedContent={`
                <div class="space-y-6">
                  <p>La vida me llevó por un camino diferente inicialmente. Durante años, trabajé en otros campos, pero la pasión por la tecnología nunca se apagó. Siempre encontraba la manera de incorporar soluciones tecnológicas en mi trabajo diario. Finalmente, decidí dar el salto y convertirme en desarrollador profesional.</p>
                  <p>Este cambio no fue fácil, pero la satisfacción de crear soluciones digitales y ver cómo impactan positivamente en la vida de las personas hace que todo el esfuerzo valga la pena. Un año después de terminar el bootcamp, tras muchos proyectos personales y noches de aprendizaje, fui reclutado por un grupo de desarrolladores como junior. Desde entonces, no he parado de crecer.</p>
                  <p>Hoy lidero equipos, diseño soluciones, y creo aplicaciones que funcionan y emocionan. Programar no solo me dio una nueva carrera: me devolvió la alegría, me quitó el estrés, me hizo sentir vivo. Cada línea de código que escribo es un paso más hacia el futuro que siempre soñé.</p>
                </div>
              `}
            />
          </div>
        </div>

        <div className="min-h-screen w-full bg-black flex items-center justify-center px-4 py-16">
          <div className="max-w-5xl w-11/12">
            <ProfileCard
              name="Experiencia Técnica"
              title="React & Next.js Specialist"
              description="Mi viaje en el desarrollo web comenzó con HTML y CSS, pero rápidamente me enamoré de React y su ecosistema. La capacidad de crear interfaces dinámicas y escalables me cautivó desde el primer momento."
              subtitle="Tecnologías Principales"
              additionalDescription={`
                <ul class="space-y-2 list-none text-sm">
                  <li class="flex flex-col">
                    <span class="font-semibold text-white mb-1 text-xs">Frontend:</span>
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">JavaScript</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">TypeScript</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">React</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Next JS</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Material UI</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Tailwind</span>
                    </div>
                  </li>
                  <li class="flex flex-col">
                    <span class="font-semibold text-white mb-1 text-xs">Backend:</span>
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Node.js</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Express.js</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Nest JS</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Python (FastAPI)</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Supabase</span>
                    </div>
                  </li>
                  <li class="flex flex-col">
                    <span class="font-semibold text-white mb-1 text-xs">Bases de datos:</span>
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">MongoDB</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">PostgreSQL</span>
                    </div>
                  </li>
                  <li class="flex flex-col">
                    <span class="font-semibold text-white mb-1 text-xs">Cloud y herramientas:</span>
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">AWS</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">IAM</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Cognito</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">S3</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Amazon Connect</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Salesforce</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">Git</span>
                      <span class="px-2 py-0.5 bg-gray-800 rounded-full text-white text-xs">GitHub</span>
                    </div>
                  </li>
                </ul>
              `}
              image="/rodcode_funko.png"
              showReadMore={true}
              extendedContent="Mi stack tecnológico incluye experiencia profunda en React y sus patrones avanzados, Next.js para aplicaciones full-stack, TypeScript para código más seguro y mantenible, y Tailwind CSS para diseños elegantes y responsivos. Constantemente me mantengo actualizado con las últimas tendencias y mejores prácticas del desarrollo web."
            />
          </div>
        </div>

        <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center px-4 py-16">
          <div className="max-w-5xl w-11/12">
            <ProfileCard
              name="Objetivos"
              title="Innovación Continua"
              description="Constantemente busco nuevas formas de mejorar y optimizar los proyectos en los que trabajo, manteniéndome al día con las últimas tendencias."
              subtitle="Visión de Futuro"
              additionalDescription="Comprometido con el aprendizaje continuo y la adopción de nuevas tecnologías que beneficien a los proyectos y usuarios finales."
              image="/silueta_up.png"
              showReadMore={true}
              extendedContent={`
                <div class="space-y-6">
                  <p>Mi objetivo principal es seguir creciendo como desarrollador mientras creo soluciones que realmente marquen la diferencia. Me apasiona construir aplicaciones que no solo sean técnicamente sólidas, sino que también mejoren la vida de quienes las usan.</p>
                  <p>Día a día continúo formándome y perfeccionando mis habilidades, especialmente en plataformas como Amazon Connect y Salesforce, que me permiten desarrollar soluciones más integrales, escalables y centradas en la experiencia del usuario.</p>
                  <p>Estoy especialmente interesado en proyectos que desafíen mis capacidades y me impulsen a explorar nuevas tecnologías, metodologías ágiles y enfoques innovadores. A largo plazo, aspiro a contribuir activamente a la comunidad tech compartiendo conocimientos y acompañando a otros desarrolladores a través de la mentoría.</p>
                </div>
              `}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECCIÓN: PROJECTS
      ══════════════════════════════════════════ */}
      <section id="projects" className="bg-black text-white pt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Single3DText text="Next.js" />
            <Single3DText text="AWS" />
            <Single3DText text="TypeScript" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
            {projects.map((project, index) => (
              <ProjectDetail key={index} {...project} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Single3DText text="JavaScript" />
            <Single3DText text="Salesforce" />
            <Single3DText text="Python" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECCIÓN: SERVICES
      ══════════════════════════════════════════ */}
      <section id="services" className="bg-black text-white">
        <div className="container mx-auto px-4 pt-16 pb-8">
          <h2 className="text-4xl font-bold text-center text-white">Qué Puedo Aportar</h2>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contributions.map((item, index) => (
              <ServiceDetail
                key={index}
                title={item.title}
                description={item.description}
                technologies={item.technologies}
                features={item.features}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECCIÓN: CONTACT
      ══════════════════════════════════════════ */}
      <section id="contact" className="bg-black text-white">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Contacto</h2>
          <p className="text-lg text-gray-300 mb-8">
            ¿Quieres trabajar conmigo o tienes alguna pregunta? ¡Contáctame!
          </p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-left">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none placeholder-gray-500"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              required
              rows={4}
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-xl font-bold text-white transition-colors"
            >
              Enviar
            </button>
          </form>
          {statusMessage && (
            <p className={`mt-6 text-lg font-medium ${isSuccess ? 'text-gray-300' : 'text-red-400'}`}>
              {statusMessage}
            </p>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
