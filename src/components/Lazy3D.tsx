'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type NavigatorHints = Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } }

// Escena 3D solo si el dispositivo la aguanta: pantalla ancha, sin "reducir movimiento",
// sin ahorro de datos y con memoria suficiente. Si no, se muestra el fallback estático.
function canRender3D(): boolean {
  if (typeof window === 'undefined') return false
  const nav = navigator as NavigatorHints
  if (!window.matchMedia('(min-width: 1024px)').matches) return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  if (nav.connection?.saveData) return false
  if ((nav.deviceMemory ?? 8) < 4) return false
  return true
}

export default function Lazy3D({
  children,
  fallback,
  reserveHeight,
  className,
}: {
  children: ReactNode
  fallback: ReactNode
  reserveHeight?: string // alto del 3D: evita que el contenido salte cuando la escena aparece
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const decide = () => setEnabled(canRender3D())
    decide()
    window.addEventListener('resize', decide)
    return () => window.removeEventListener('resize', decide)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [enabled])

  return (
    <div ref={ref} className={className}>
      {!enabled ? fallback : inView ? children : <div style={{ height: reserveHeight }} />}
    </div>
  )
}
