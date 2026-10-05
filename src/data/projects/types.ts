// Plantilla de caso de estudio. Para un proyecto nuevo: copia honey-badger.ts,
// cambia los datos y regístralo en index.ts.

export interface ProjectScreen {
  title: string
  description: string
  /** Tecnologías que intervienen en esta pantalla. */
  tech?: string[]
  /** Ruta en /public. Si falta, se muestra un marcador "Captura pendiente". */
  image?: string
  /** Texto alternativo; por defecto usa el título. */
  alt?: string
  /** 'contain' para capturas verticales (móvil); por defecto 'cover'. */
  fit?: 'cover' | 'contain'
}

export interface ProjectStrategy {
  title: string
  detail: string
}

export interface ProjectStackGroup {
  label: string
  items: string[]
}

export interface ProjectCase {
  slug: string
  title: string
  tagline: string
  /** Qué hace la app (resumen para el reclutador). */
  summary: string
  status: 'Producción' | 'Demo' | 'En desarrollo'
  /** Imagen para la tarjeta del home y para Open Graph. */
  cover: string
  /** Si se clonó de una plantilla propia; null si se hizo desde cero. */
  origin: { template: string; note?: string; repoUrl?: string } | null
  timeline: {
    /** Fecha de inicio (clon o primer commit), texto libre: "1 oct 2026". */
    start: string
    /** Fecha de término o despliegue, texto libre. */
    end: string
    /** Duración en días. */
    days: number
    /** Frase corta de cómo fue posible. */
    how?: string
  }
  stack: ProjectStackGroup[]
  strategies: ProjectStrategy[]
  /** Hasta 10 pantallas; todas las imágenes son opcionales. */
  screens: ProjectScreen[]
  links: { demo?: string; github?: string }
  /** Usuario de prueba de solo lectura para quien abra la demo. */
  demoCredentials?: { email: string; password: string; note?: string }
  /** Aviso visible, p. ej. "Todos los datos son ficticios". */
  disclaimer?: string
}
