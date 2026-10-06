'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { ProjectCase, ProjectScreen } from '@/data/projects/types'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function TechTag({ tech }: { tech: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-slate-300 rounded-full">
      {tech}
    </span>
  )
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5">
      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">{label}</p>
      <p className="text-xl md:text-2xl font-black text-white leading-tight">{value}</p>
      {sub && <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{sub}</p>}
    </div>
  )
}

function ScreenImage({ screen, onOpen }: { screen: ProjectScreen; onOpen: (s: ProjectScreen) => void }) {
  if (!screen.image) {
    return (
      <div className="aspect-[16/9] w-full rounded-xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center gap-2 text-slate-600">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16l5-5 4 4 3-3 6 6M3 5h18v14H3z" />
        </svg>
        <span className="text-xs font-medium uppercase tracking-widest">Captura pendiente</span>
      </div>
    )
  }
  return (
    <button
      type="button"
      onClick={() => onOpen(screen)}
      className="group relative block w-full aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-black cursor-zoom-in"
      aria-label={`Ampliar: ${screen.title}`}
    >
      <Image
        src={screen.image}
        alt={screen.alt ?? screen.title}
        fill
        sizes="(min-width: 1024px) 700px, 100vw"
        className={`${screen.fit === 'contain' ? 'object-contain' : 'object-cover object-top'} transition-transform duration-500 group-hover:scale-[1.02]`}
      />
    </button>
  )
}

export default function ProjectCaseStudy({ project }: { project: ProjectCase }) {
  const [open, setOpen] = useState<ProjectScreen | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const { timeline, origin, links, demoCredentials } = project
  const screens = project.screens.slice(0, 10)

  return (
    <main className="bg-[#07070e] text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-36 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/8 blur-[140px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Link href="/home#projects" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 mb-8">
              <span aria-hidden>←</span> Volver a proyectos
            </Link>
            <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.22em] mb-5">
              Caso de estudio · {project.status}
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.02] tracking-tight mb-6">{project.title}</h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed font-medium mb-8">{project.tagline}</p>
            <div className="flex flex-wrap gap-3">
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-semibold transition-colors"
                >
                  Abrir demo en vivo ↗
                </a>
              )}
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-white/15 hover:border-white/30 text-sm font-semibold text-slate-200 transition-colors"
                >
                  Código en GitHub ↗
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESUMEN */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <Stat
              label={timeline.days ? 'Tiempo total' : 'Trayectoria'}
              value={
                timeline.days
                  ? `${timeline.days} ${timeline.days === 1 ? 'día' : 'días'}`
                  : (timeline.duration ?? '')
              }
              sub={`${timeline.start} → ${timeline.end}`}
            />
            <Stat
              label="Punto de partida"
              value={origin ? `Clonado de ${origin.template}` : 'Desde cero'}
              sub={origin ? 'Plantilla propia' : undefined}
            />
            <Stat label="Estado" value={project.status} />
            <Stat label="Pantallas" value={`${screens.length}`} sub="documentadas abajo" />
          </FadeIn>

          <FadeIn>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Qué hace la app</h2>
            <p className="text-[15px] md:text-base text-slate-300 leading-relaxed max-w-3xl">{project.summary}</p>
            {timeline.how && (
              <p className="mt-5 text-[15px] text-blue-300/90 leading-relaxed max-w-3xl border-l-2 border-blue-500/40 pl-4">
                {timeline.how}
              </p>
            )}
            {origin?.note && <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-3xl">{origin.note}</p>}
          </FadeIn>
        </div>
      </section>

      {/* DEMO ACCESS */}
      {(demoCredentials || project.disclaimer) && (
        <section className="px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 md:p-8">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Probar la demo</h2>
              {demoCredentials && (
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Usuario</p>
                    <code className="block bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 break-all">
                      {demoCredentials.email}
                    </code>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Contraseña</p>
                    <code className="block bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 break-all">
                      {demoCredentials.password}
                    </code>
                  </div>
                </div>
              )}
              {demoCredentials?.note && <p className="text-sm text-slate-400 mb-2">{demoCredentials.note}</p>}
              {project.disclaimer && <p className="text-sm text-slate-500">{project.disclaimer}</p>}
            </FadeIn>
          </div>
        </section>
      )}

      {/* STACK */}
      <section className="py-20 px-4 border-y border-white/5 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em] mb-2">Tecnologías</p>
            <h2 className="text-3xl md:text-4xl font-black">Con qué está construido</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.stack.map((group, i) => (
              <FadeIn key={group.label} delay={i * 0.08}>
                <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 h-full">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((t) => (
                      <TechTag key={t} tech={t} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PANTALLAS */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em] mb-2">Recorrido</p>
            <h2 className="text-3xl md:text-4xl font-black">La app, pantalla por pantalla</h2>
          </FadeIn>
          <div className="space-y-16">
            {screens.map((screen, i) => (
              <FadeIn key={screen.title}>
                <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
                  <div className={`lg:col-span-3 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <ScreenImage screen={screen} onOpen={setOpen} />
                  </div>
                  <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{screen.title}</h3>
                    <p className="text-[15px] text-slate-400 leading-relaxed mb-4">{screen.description}</p>
                    {screen.tech && (
                      <div className="flex flex-wrap gap-2">
                        {screen.tech.map((t) => (
                          <TechTag key={t} tech={t} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRATEGIAS */}
      <section className="py-20 px-4 border-t border-white/5 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em] mb-2">Decisiones</p>
            <h2 className="text-3xl md:text-4xl font-black">Estrategias que usé</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.strategies.map((s, i) => (
              <FadeIn key={s.title} delay={(i % 2) * 0.08}>
                <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 h-full">
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
          <Link href="/home#projects" className="px-5 py-2.5 rounded-lg border border-white/15 hover:border-white/30 text-sm font-semibold text-slate-200">
            ← Ver más proyectos
          </Link>
          <Link href="/home#contact" className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-semibold">
            Contactar
          </Link>
        </div>
      </section>

      {/* VISOR */}
      {open?.image && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-xl"
            aria-label="Cerrar"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={open.image} alt={open.alt ?? open.title} className="max-h-full max-w-full rounded-lg" />
        </div>
      )}
    </main>
  )
}
