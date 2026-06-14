'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// ─── Primitives ───────────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Badge({ text, color = 'blue' }: { text: string; color?: 'blue' | 'green' | 'slate' }) {
  const colors = {
    blue: 'bg-blue-500/10 border-blue-500/25 text-blue-400',
    green: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
    slate: 'bg-white/5 border-white/10 text-slate-400',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${colors[color]}`}>
      {color === 'green' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
      {text}
    </span>
  )
}

function TechTag({ tech }: { tech: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-slate-300 rounded-full">
      {tech}
    </span>
  )
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

function TimelineItem({
  year,
  title,
  subtitle,
  description,
  isLast = false,
}: {
  year: string
  title: string
  subtitle: string
  description: string
  isLast?: boolean
}) {
  return (
    <FadeIn>
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-blue-400 ring-4 ring-blue-400/15 mt-1.5 shrink-0" />
          {!isLast && (
            <div className="w-px flex-1 bg-gradient-to-b from-blue-400/30 to-transparent mt-2 min-h-[48px]" />
          )}
        </div>
        <div className="pb-10">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.15em]">{year}</span>
          <h3 className="text-xl font-bold text-white mt-1 mb-1">{title}</h3>
          <p className="text-sm text-slate-500 mb-3 font-medium">{subtitle}</p>
          <p className="text-slate-300 leading-relaxed text-[15px]">{description}</p>
        </div>
      </div>
    </FadeIn>
  )
}

// ─── Detail Card ──────────────────────────────────────────────────────────────

function DetailCard({
  label,
  items,
}: {
  label: string
  items: string[]
}) {
  return (
    <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 h-full">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">{label}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="text-sm text-slate-300 flex gap-3 items-start leading-relaxed">
            <span className="text-slate-600 mt-0.5 shrink-0">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#07070e] text-white min-h-screen">

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="relative pt-36 pb-24 px-4 overflow-hidden">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/8 blur-[140px] rounded-full pointer-events-none" />

          <div className="relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.22em] mb-5">
                Perfil profesional
              </p>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.92] tracking-tight mb-8">
                <span className="text-white">Rodolfo</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-slate-400">
                  Rodríguez
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-6 font-medium">
                Full Stack Developer · AWS · React Native · NestJS · Next.js
              </p>
              <p className="text-[15px] text-slate-400 max-w-2xl leading-relaxed text-justify">
                Construyo sistemas completos en producción — desde el diseño de la base de datos
                hasta la interfaz de usuario, pasando por la infraestructura cloud que lo sostiene todo.
                Plataformas multi-rol con tiempo real, apps móviles en Expo, arquitecturas serverless en AWS
                y proyectos con IA integrada usando DeepSeek y streaming de respuestas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TIMELINE
        ══════════════════════════════════════ */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="mb-12">
              <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em] mb-2">Trayectoria</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">El camino hasta aquí</h2>
            </FadeIn>

            <div className="max-w-2xl">
              <TimelineItem
                year="2023"
                title="EV — Primer proyecto profesional"
                subtitle="Frontend Developer · Infraestructura como Código · AWS"
                description="Mi entrada al desarrollo profesional real. Construí interfaces empresariales complejas e implementé infraestructura como código sobre AWS. Trabajé con Amazon Connect para la gestión de call centers en la nube y conectores con Salesforce CRM. Fue donde entendí que el código de una aplicación y su infraestructura son dos caras de la misma moneda."
              />
              <TimelineItem
                year="2024"
                title="GEMES — Plataforma de logística completa"
                subtitle="Full Stack · NestJS · AWS Lambda · React Native · WebSockets"
                description="En paralelo con EV, arranqué GEMES desde cero: una plataforma de delivery con clientes, operadores y riders coordinándose en tiempo real. Diseñé la arquitectura completa — backend serverless, comunicación en tiempo real, autenticación, base de datos en VPC, y la app móvil con GPS tracking. Todo gestionado con Serverless Framework."
              />
              <TimelineItem
                year="2025"
                title="AWS Certified Cloud Practitioner"
                subtitle="Amazon Web Services · Certificación oficial verificada"
                description="Formalicé el conocimiento cloud adquirido en producción. Los servicios del examen no eran conceptos nuevos — eran herramientas que ya usaba en GEMES. Lambda, API Gateway, Cognito, S3, CloudWatch, IAM, VPC. La certificación confirmó el criterio técnico, no lo creó."
              />
              <TimelineItem
                year="2025"
                title="IA aplicada al flujo de desarrollo"
                subtitle="Claude Code · GitHub Copilot · Cursor IDE"
                isLast
                description="Integré herramientas de IA como colaboradores reales: revisión de arquitectura, detección de vulnerabilidades en RLS, análisis de migraciones SQL antes de aplicarlas. El resultado medible es menos bugs en producción y decisiones de diseño más conscientes. La IA no reemplaza el criterio — lo amplifica."
              />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            EV PROJECT
        ══════════════════════════════════════ */}
        <section className="py-20 px-4 border-y border-white/5 bg-white/[0.015]">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="mb-10">
              <Badge text="Primer proyecto profesional" color="blue" />
              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-4">
                EV — Frontend e Infraestructura
              </h2>
              <p className="text-slate-400 text-[15px] max-w-3xl leading-relaxed">
                Plataforma empresarial donde combiné desarrollo frontend con infraestructura cloud como código.
                El proyecto donde aprendí que construir software profesional va mucho más allá de escribir componentes.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <FadeIn delay={0.1}>
                <DetailCard
                  label="Frontend"
                  items={[
                    'Interfaces empresariales complejas con React y TypeScript',
                    'Integración con Amazon Connect — gestión de llamadas en tiempo real',
                    'Conectores con Salesforce CRM para datos de clientes y casos',
                    'Dashboards con métricas en tiempo real y gestión de agentes',
                    'Manejo de estado complejo en flujos de contact center',
                  ]}
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <DetailCard
                  label="Infraestructura como Código"
                  items={[
                    'Recursos AWS declarados como código — reproducibles y versionados',
                    'Configuración de Amazon Connect: contact flows, colas, enrutamiento',
                    'IAM roles y políticas con principio de mínimo privilegio',
                    'Primer contacto real con mentalidad cloud-first en producción',
                    'Entender la infraestructura como parte del producto, no un paso final',
                  ]}
                />
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Amazon Connect', 'Salesforce', 'AWS', 'IAM', 'Infrastructure as Code', 'Node.js'].map((t) => (
                  <TechTag key={t} tech={t} />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            GEMES
        ══════════════════════════════════════ */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="mb-10">
              <Badge text="En producción" color="green" />
              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-4">
                GEMES — Plataforma de Logística
              </h2>
              <p className="text-slate-400 text-[15px] max-w-3xl leading-relaxed">
                Plataforma de delivery construida desde cero con arquitectura serverless en AWS.
                Tres actores coordinándose en tiempo real — clientes, operadores y riders.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <FadeIn delay={0.1}>
                <DetailCard
                  label="Backend · AWS"
                  items={[
                    'NestJS sobre AWS Lambda (Serverless Framework)',
                    'API Gateway HTTP + WebSocket para tiempo real',
                    'DocumentDB en VPC con acceso privado desde Lambda',
                    'Redis/Upstash para caché de estado y presencia',
                    'CloudWatch Logs para trazabilidad en producción',
                  ]}
                />
              </FadeIn>
              <FadeIn delay={0.15}>
                <DetailCard
                  label="Auth · Seguridad"
                  items={[
                    'AWS Cognito User Pools — JWT + refresh tokens',
                    'IAM roles con permisos mínimos por función Lambda',
                    'S3 para almacenamiento de archivos y assets',
                    'VPC con subnets y security groups para aislamiento',
                    'Variables de entorno separadas por ambiente',
                  ]}
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <DetailCard
                  label="App Móvil · React Native"
                  items={[
                    'React Native + Expo para iOS y Android',
                    'GPS tracking en background con Expo Task Manager',
                    'Notificaciones push de alta prioridad',
                    'Hasta 2 órdenes simultáneas activas por rider',
                    'Zustand + AsyncStorage para estado global',
                  ]}
                />
              </FadeIn>
            </div>

            <FadeIn delay={0.25} className="mb-8">
              <div className="flex flex-wrap gap-2">
                {['NestJS', 'TypeScript', 'AWS Lambda', 'API Gateway', 'Cognito', 'S3', 'DocumentDB', 'Redis', 'React Native', 'Expo', 'WebSockets', 'Serverless Framework'].map((t) => (
                  <TechTag key={t} tech={t} />
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="relative rounded-2xl overflow-hidden border border-white/8 group">
                <Image
                  src="/gemes.PNG"
                  alt="GEMES — App de riders en producción"
                  width={1200}
                  height={600}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg mb-1">App de riders — GEMES</p>
                  <p className="text-slate-400 text-sm">React Native + Expo · GPS en background · WebSockets en tiempo real</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════
            AWS CERTIFICATION
        ══════════════════════════════════════ */}
        <section className="py-20 px-4 border-y border-white/5 bg-white/[0.015]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em] mb-4">Amazon Web Services</p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  AWS Certified<br />Cloud Practitioner
                </h2>
                <p className="text-slate-300 leading-relaxed mb-8 text-[15px]">
                  Certificación obtenida en 2025 respaldada por experiencia real en producción.
                  Los servicios del examen no eran conceptos nuevos — eran herramientas que
                  ya usaba en GEMES de forma diaria.
                </p>
                <div className="space-y-3">
                  {[
                    'Lambda · API Gateway HTTP + WebSocket · S3',
                    'Cognito User Pools · IAM · CloudWatch Logs',
                    'VPC · Subnets · Security Groups · DocumentDB',
                    'Serverless Framework como infraestructura como código',
                    'Arquitecturas event-driven y serverless en producción',
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-center">
                      <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <a
                  href="https://www.credly.com/badges/e829ea0a-7fad-4379-ab9c-c4f0b813fb32/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-5 bg-white/[0.03] border border-white/8 hover:border-blue-500/30 rounded-2xl p-10 transition-all duration-300 hover:bg-white/[0.05]"
                >
                  <Image
                    src="/aws_cloud_practitioner.PNG"
                    alt="AWS Certified Cloud Practitioner badge"
                    width={180}
                    height={180}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="text-center">
                    <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                      Ver credencial verificada →
                    </p>
                    <p className="text-slate-500 text-sm mt-1">Credly · Amazon Web Services · 2025</p>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            AI SECTION
        ══════════════════════════════════════ */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="mb-12">
              <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em] mb-2">Desarrollo moderno</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
                IA como multiplicador<br />de calidad
              </h2>
              <p className="text-slate-400 text-[15px] max-w-2xl leading-relaxed">
                Uso Claude Code, GitHub Copilot y Cursor como colaboradores técnicos reales —
                no como generadores de código, sino como revisores que trabajan en paralelo con criterio técnico.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: 'Revisión de seguridad',
                  desc: 'Detección de vulnerabilidades en políticas RLS, configuraciones IAM incorrectas y patrones de autenticación inseguros antes de llegar a producción.',
                },
                {
                  title: 'Arquitectura de base de datos',
                  desc: 'Revisión de migraciones SQL, optimización de políticas RLS con subquery caching, indexación correcta y diseño de esquemas que escalan con el tiempo.',
                },
                {
                  title: 'Calidad de código',
                  desc: 'Detección de edge cases, refactoring con criterio de arquitectura, documentación actualizada. Código que otro desarrollador puede leer y extender sin necesitar al autor.',
                },
                {
                  title: 'Velocidad de entrega',
                  desc: 'Menos tiempo en debugging de problemas conocidos, más tiempo en problemas de negocio reales. La IA maneja lo predecible; el criterio técnico maneja lo estratégico.',
                },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <div className="bg-white/[0.03] border border-white/8 hover:border-white/15 rounded-2xl p-6 transition-colors h-full">
                    <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PROFILE + CTA
        ══════════════════════════════════════ */}
        <section className="py-20 px-4 border-t border-white/5 bg-white/[0.015]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div className="relative w-full max-w-xs mx-auto md:mx-0">
                  <div className="absolute -inset-6 bg-gradient-to-br from-blue-600/12 to-purple-600/8 rounded-3xl blur-2xl" />
                  <div className="relative rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src="/rodolfo_perfil.png"
                      alt="Rodolfo Rodríguez — Full Stack Developer"
                      width={400}
                      height={500}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em] mb-4">¿Trabajamos juntos?</p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Disponible para<br />nuevos proyectos
                </h2>
                <p className="text-slate-300 leading-relaxed mb-8 text-[15px]">
                  Estoy abierto a proyectos freelance, posiciones full-time o colaboraciones técnicas.
                  Si necesitas a alguien que entienda tanto el frontend como la infraestructura cloud
                  y la capa de datos — hablemos.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/home#contact"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-colors text-sm"
                  >
                    Escribirme
                  </Link>
                  <Link
                    href="/home#projects"
                    className="px-6 py-3 border border-white/15 hover:border-white/30 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm"
                  >
                    Ver proyectos
                  </Link>
                  <Link
                    href="/home"
                    className="px-6 py-3 text-slate-500 hover:text-slate-300 font-medium transition-colors text-sm"
                  >
                    ← Volver al inicio
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
