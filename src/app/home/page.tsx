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

// ─── Iconos servicios ────────────────────────────────────────────────────────
const WebIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)
const APIIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)
const EcommerceIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
]

// ─── Datos servicios ──────────────────────────────────────────────────────────
const services = [
  {
    title: 'Desarrollo Web Frontend',
    description: 'Creación de interfaces web modernas, responsivas y altamente interactivas utilizando las últimas tecnologías del mercado.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Diseños responsivos para todos los dispositivos',
      'Optimización de rendimiento y SEO',
      'Animaciones y transiciones fluidas',
      'Integración con APIs y servicios externos',
    ],
    icon: <WebIcon />,
  },
  {
    title: 'APIs y Backend',
    description: 'Desarrollo de APIs robustas y escalables para soportar aplicaciones web y móviles, con integración a diferentes servicios en la nube.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'AWS'],
    features: [
      'Arquitectura RESTful',
      'Integración con bases de datos',
      'Autenticación y autorización',
      'Despliegue en la nube',
    ],
    icon: <APIIcon />,
  },
  {
    title: 'E-commerce y CMS',
    description: 'Implementación de soluciones de comercio electrónico personalizadas y sistemas de gestión de contenido adaptados a las necesidades del negocio.',
    technologies: ['Next.js', 'Stripe', 'Salesforce', 'Headless CMS'],
    features: [
      'Integración de pasarelas de pago',
      'Gestión de inventario',
      'Panel de administración',
      'Análisis y reportes',
    ],
    icon: <EcommerceIcon />,
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
        <Single3DText text="Mis Servicios" height="40vh" />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceDetail
                key={index}
                title={service.title}
                description={service.description}
                technologies={service.technologies}
                features={service.features}
                icon={service.icon}
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
