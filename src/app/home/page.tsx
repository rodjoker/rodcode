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
import SkillsSphereClient from '@/components/SkillsSphereClient'

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
    title: 'English Journey — AI English Platform',
    description: 'Plataforma de aprendizaje de inglés técnico para programadores hispanohablantes. 60 días de contenido estructurado: vocabulario (900 palabras), lecturas técnicas, gramática, práctica de entrevistas y tests diarios con score mínimo. Integra IA con DeepSeek — RodCode, el profesor virtual que responde en tiempo real vía streaming.',
    imageUrl: '/english_journey.PNG',
    technologies: ['Next.js 16', 'TypeScript', 'Supabase', 'DeepSeek AI', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rodjoker/rc_a2_english',
    demoUrl: 'https://github.com/rodjoker/rc_a2_english',
    date: '2026',
  },
  {
    title: 'Auth System — Next.js + Supabase',
    description: 'Sistema de autenticación seguro con bloqueo automático tras 3 intentos fallidos, RBAC con roles y 20 permisos estructurados en base de datos, protección de rutas con middleware y edición de perfil vinculada a auth.users. Políticas RLS activas con patrones optimizados de rendimiento.',
    imageUrl: '/login.PNG',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rodjoker/library_login_sb',
    demoUrl: 'https://github.com/rodjoker/library_login_sb',
    date: '2025',
  },
  {
    title: 'GEMES — Plataforma de Logística en Producción',
    description: 'Plataforma de delivery de tres lados (clientes, operadores y riders) en producción real. Backend serverless en AWS Lambda + NestJS, WebSockets para coordinación en tiempo real, GPS tracking en background, autenticación con Cognito, almacenamiento S3 y notificaciones push. Incluye backoffice React para operadores y app móvil Expo para riders.',
    imageUrl: '/gemes.PNG',
    technologies: ['NestJS', 'React Native', 'Expo', 'AWS Lambda', 'WebSockets', 'DocumentDB', 'Cognito', 'Redis', 'VPC'],
    githubUrl: 'https://github.com/rodjoker',
    demoUrl: '',
    date: '2024',
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
            <div className="flex items-center justify-center h-[60vh] w-full relative z-0">
              {/* Glow de fondo */}
              <div className="absolute w-72 h-72 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="absolute w-48 h-48 rounded-full bg-purple-600/15 blur-2xl translate-x-16 translate-y-10" />

              {/* Marco con gradiente */}
              <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-blue-800 shadow-2xl shadow-blue-500/20">
                <div className="relative overflow-hidden rounded-2xl w-72 h-80 bg-gray-900">
                  <img
                    src="/rodolfo_perfil.png"
                    alt="Rodolfo Rodriguez"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay glassmorphism inferior */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/50 backdrop-blur-sm border-t border-white/10">
                    <p className="text-white font-semibold text-sm">Rodolfo Rodriguez</p>
                    <p className="text-blue-400 text-xs">Full Stack Developer</p>
                  </div>
                </div>
              </div>
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
        <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center px-4 py-16">
          <div className="max-w-5xl w-11/12">
            <ProfileCard
              name="Rodolfo Rodríguez"
              title="Frontend Developer"
              description="Desde que tengo memoria, la tecnología me fascinaba. Mientras otros soñaban con ser astronautas o futbolistas, yo soñaba con entender cómo funcionaban los ordenadores, los videojuegos, los cables, los códigos. Me pasaba horas imaginando que algún día podría crear cosas increíbles con solo unas líneas en una pantalla. Aunque no lo sabía entonces, esa pasión infantil sería la semilla de algo mucho más grande."
              profileUrl="/about"
              profileUrlLabel="Mi Historia"
              subtitle="Mi Enfoque"
              additionalDescription="En algún punto pensé que no se iba a poder, pero descubrí que la vida te puede dar sorpresas."
              image="/rodolfo_perfil.png"
              showReadMore={true}
              extendedContent={`
                <div class="space-y-6">
                  <div>
                    <h3 class="text-white font-semibold text-lg mb-2">Plataformas multi-rol en producción</h3>
                    <p>He construido GEMES de cero: una plataforma de logística con tres actores coordinándose en tiempo real — clientes, operadores y riders. El backend corre en AWS Lambda con NestJS y Serverless Framework. La comunicación en tiempo real usa WebSockets sobre API Gateway, con Redis/Upstash para caché de estado y presencia. La autenticación y gestión de usuarios está sobre AWS Cognito. La base de datos migró de MongoDB Atlas a DocumentDB dentro de una VPC, con acceso privado desde las Lambdas. Los riders usan una app React Native con Expo que hace GPS tracking en background, recibe notificaciones push de alta prioridad y soporta hasta dos órdenes simultáneas activas.</p>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-lg mb-2">Autenticación y seguridad a nivel de base de datos</h3>
                    <p>Implementé un sistema de auth completo con Next.js 16 y Supabase: login/signup con bloqueo automático tras 3 intentos fallidos, RBAC con 3 roles y 20 permisos estructurados directamente en PostgreSQL, políticas RLS con el patrón <code class="bg-gray-800 px-1 rounded text-sm">(select auth.uid())</code> para evitar evaluación por fila, UPDATE policies con <code class="bg-gray-800 px-1 rounded text-sm">WITH CHECK</code> para prevenir reassign silencioso, y middleware de Next.js que gestiona sesiones y redirecciones protegiendo todas las rutas.</p>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-lg mb-2">Frontend con criterio de producto</h3>
                    <p>Trabajo con Next.js App Router usando Server Components para fetching seguro de datos, Server Actions para mutaciones con progressive enhancement, y Client Components solo donde hay interactividad real. He integrado animaciones con Framer Motion, Three.js para experiencias 3D, generación de PDF con @react-pdf/renderer y PWA con next-pwa. Cada decisión de arquitectura apunta a performance real: menos JavaScript al cliente, carga más rápida, mejor SEO.</p>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-lg mb-2">AWS en producción — experiencia real</h3>
                    <p>En GEMES gestioné la infraestructura completa sobre AWS con Serverless Framework. Esto incluye: <strong class="text-white">Lambda</strong> para cada endpoint del API (NestJS compilado como función serverless), <strong class="text-white">API Gateway HTTP</strong> para las rutas REST y <strong class="text-white">API Gateway WebSocket</strong> para la capa de tiempo real con conexiones persistentes por rider y operador. <strong class="text-white">S3</strong> para almacenamiento de archivos y assets. <strong class="text-white">Cognito User Pools</strong> para autenticación, JWT y gestión de sesiones — integrado tanto en el backend NestJS como en la app móvil con Amplify. <strong class="text-white">IAM roles</strong> definidos en el <code class="bg-gray-800 px-1 rounded text-sm">serverless.yml</code> con permisos mínimos por función. <strong class="text-white">CloudWatch Logs</strong> para trazabilidad de errores en producción. <strong class="text-white">VPC</strong> para aislar DocumentDB y acceder desde Lambda con configuración de subnets y security groups. Todo declarado como código — un solo <code class="bg-gray-800 px-1 rounded text-sm">sls deploy</code> reconstruye el entorno completo.</p>
                  </div>
                </div>
              `}
            />
          </div>
        </div>

        <div className="w-full bg-black py-16 px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-2">Stack Tecnológico</h2>
          <p className="text-center text-gray-500 text-sm mb-6">Tecnologías con las que trabajo a diario</p>
          <SkillsSphereClient />
        </div>

        <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center px-4 py-16">
          <div className="max-w-5xl w-11/12">
            <ProfileCard
              name="Objetivos"
              title="Cloud · IA · Modernización"
              description="Mi enfoque está en construir soluciones modernas, escalables y potenciadas con inteligencia artificial. La certificación AWS Cloud Practitioner es el primer paso de una ruta clara hacia arquitecturas cloud de alto impacto."
              subtitle="Hacia dónde voy"
              additionalDescription="Trabajo con Claude Code como asistente de desarrollo diario — no como atajo, sino como multiplicador de calidad: código más limpio, menos bugs, entregas más rápidas sin sacrificar criterio técnico."
              image="/silueta_up.png"
              showReadMore={true}
              extendedContent={`
                <div class="space-y-6">
                  <div>
                    <h3 class="text-white font-semibold text-lg mb-2">AWS: más allá del Cloud Practitioner</h3>
                    <p>Ya tengo experiencia práctica en producción con Lambda, API Gateway (HTTP + WebSocket), S3, Cognito, CloudWatch y IAM. La siguiente etapa es profundizar en ECS Fargate para workloads containerizados, RDS Aurora Serverless para bases de datos relacionales gestionadas, CloudFront para distribución de contenido estático y Step Functions para orquestar flujos de trabajo complejos. El objetivo es poder diseñar arquitecturas completas sin depender de un DevOps separado.</p>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-lg mb-2">PostgreSQL y Supabase como stack de referencia</h3>
                    <p>Estoy consolidando Supabase + PostgreSQL como mi stack de base de datos para proyectos nuevos. Ya aplico patrones de RLS optimizados (subquery caching con <code class="bg-gray-800 px-1 rounded text-sm">select auth.uid()</code>), índices parciales, políticas con <code class="bg-gray-800 px-1 rounded text-sm">WITH CHECK</code> y GRANTs explícitos por rol. El siguiente nivel es connection pooling con pgBouncer, particionado de tablas para datos de alta volumetría y uso de extensiones como <code class="bg-gray-800 px-1 rounded text-sm">pg_cron</code> para tareas programadas directamente en la base de datos.</p>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-lg mb-2">IA aplicada al ciclo de desarrollo</h3>
                    <p>Uso Claude Code como asistente de desarrollo en sesiones reales de trabajo: para revisar migraciones SQL antes de aplicarlas, detectar vulnerabilidades de seguridad en RLS, refactorizar componentes con criterio de arquitectura y mantener coherencia entre capas del sistema. No es un generador de código — es un revisor técnico que corre en paralelo. El resultado medible: menos bugs en PR, documentación actualizada y decisiones de diseño más conscientes.</p>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-lg mb-2">Hacia arquitecturas que duren</h3>
                    <p>Lo que me interesa no es solo que funcione — es que sea mantenible. Busco proyectos donde pueda aplicar TypeScript estricto de punta a punta, separación clara entre capas (presentación, lógica de negocio, acceso a datos), migraciones versionadas, variables de entorno bien separadas por contexto y pipelines de CI/CD que corran tests antes de cada deploy. Código que otro desarrollador pueda leer, entender y extender sin necesitar al autor.</p>
                  </div>
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
          <h2 className="text-4xl font-bold text-center text-white mb-8">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
            {projects.map((project, index) => (
              <ProjectDetail key={index} {...project} />
            ))}
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
