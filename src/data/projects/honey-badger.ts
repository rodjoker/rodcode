import type { ProjectCase } from './types'

const honeyBadger: ProjectCase = {
  slug: 'honey-badger',
  title: 'Honey Badger — Reclamaciones de techos',
  tagline: 'De la inspección con fotos al pago del seguro y la reparación, con seguimiento visible para el propietario.',
  summary:
    'Plataforma de gestión de reclamaciones de techos en Florida. Un sitio público capta solicitudes que llegan en tiempo real al equipo; el staff las convierte en clientes, programa inspecciones con fotos, presenta la reclamación a la aseguradora y la lleva por 11 estados hasta la reparación. El propietario sigue su caso desde un portal de solo lectura. Un dashboard de 5 pestañas mide embudo, aseguradoras, dinero en juego y carga del equipo.',
  status: 'Demo',
  cover: '/projects/honey-badger/dashboard.jpg',
  origin: {
    template: 'AlignPro V1',
    note: 'Base propia de autenticación, roles, permisos y proyectos sobre Next.js + Supabase. Se clonó y se le construyó encima todo el dominio de reclamaciones.',
  },
  timeline: {
    start: '1 oct 2026',
    end: '5 oct 2026',
    days: 5,
    how: 'Posible por la combinación de mi plantilla base, experiencia con Next.js y desarrollo asistido con IA.',
  },
  stack: [
    { label: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'GSAP'] },
    { label: 'Backend y datos', items: ['Supabase', 'PostgreSQL', 'Row Level Security', 'RPC (funciones SQL)', 'Realtime', 'Storage'] },
    { label: 'Integraciones', items: ['Google Maps (geocoding + rutas)', 'Supabase Auth'] },
    { label: 'Despliegue', items: ['Vercel', 'Supabase CLI (migraciones versionadas)'] },
  ],
  strategies: [
    {
      title: 'Clonar de mi plantilla, no empezar de cero',
      detail:
        'Autenticación, roles, permisos y RLS venían resueltos en AlignPro V1. El tiempo se invirtió en el dominio (inspecciones, reclamaciones, portal) y no en reconstruir el login.',
    },
    {
      title: 'Mockup interactivo antes del código',
      detail:
        'Cada pantalla grande se aprobó primero como prototipo clicable. Evita rehacer código por malentendidos de diseño.',
    },
    {
      title: 'Las reglas viven en la base de datos',
      detail:
        'El estado de una reclamación solo cambia con una función SQL (set_claim_status) que valida la transición y deja historial. La UI no puede saltarse el flujo, aunque se manipule el navegador.',
    },
    {
      title: 'Seguridad por rol con RLS',
      detail:
        'Staff, inspector, ajustador y propietario ven datos distintos por política de base de datos. El propietario nunca ve las notas internas: solo las marcadas como visibles.',
    },
    {
      title: 'Captación pública con anti-spam',
      detail:
        'El formulario público pasa por una ruta de servidor con campo trampa, tiempo mínimo de llenado y límite por IP. Los leads llegan al instante al panel vía Realtime.',
    },
    {
      title: 'Bilingüe EN/ES de punta a punta',
      detail:
        'Todo texto pasa por un diccionario tipado: si falta una traducción, TypeScript falla al compilar.',
    },
    {
      title: 'Datos de demo reproducibles',
      detail:
        'Seeds idempotentes cargan clientes, inspecciones, reclamaciones, aseguradoras y embudo para que cada gráfica tenga datos creíbles.',
    },
  ],
  screens: [
    {
      title: 'Dashboard ejecutivo',
      description:
        'Reclamaciones activas, monto aprobado, tasa de aprobación y días hasta la decisión, más una lista de lo que requiere atención: rechazadas, inspecciones vencidas y leads nuevos. Cinco pestañas: resumen, captación, aseguradoras y dinero, equipo y proyectos.',
      tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Carga perezosa por pestaña'],
      image: '/projects/honey-badger/dashboard.jpg',
      alt: 'Dashboard con indicadores de reclamaciones y lista de atención',
    },
    {
      title: 'Aseguradoras y dinero en juego',
      description:
        'Rendimiento por aseguradora, apelaciones, monto en disputa y tiempo de reparación. Responde qué compañías aprueban más y cuánto dinero está pendiente.',
      tech: ['PostgreSQL', 'Vistas security_invoker', 'TypeScript'],
      image: '/projects/honey-badger/insurers.png',
      alt: 'Rendimiento por aseguradora y panel de apelaciones',
    },
    {
      title: 'Tablero de reclamaciones',
      description:
        'Reclamaciones agrupadas por fase (inicio, reclamación, decisión, reparación) con vista de tablero o tabla. Cada tarjeta muestra dirección, cliente, estado y monto aprobado.',
      tech: ['React 19', 'Tailwind CSS', 'RLS por rol'],
      image: '/projects/honey-badger/claims-board.jpg',
      alt: 'Tablero de reclamaciones por fase',
    },
    {
      title: 'Detalle de reclamación',
      description:
        'Recorrido de los 11 estados, documentos con miniaturas, historial con etiqueta "visible para el propietario", asignación de ajustador y creación del proyecto de reparación.',
      tech: ['RPC set_claim_status', 'Supabase Storage', 'Triggers de historial'],
      image: '/projects/honey-badger/claim-detail.png',
      alt: 'Detalle de una reclamación con recorrido de estados y siguiente paso',
    },
    {
      title: 'Inspecciones',
      description:
        'Visitas a techos con estado, inspector, fecha y cantidad de fotos. Filtros por estado y búsqueda por cliente o dirección.',
      tech: ['Next.js', 'Supabase', 'Filtros en cliente'],
      image: '/projects/honey-badger/inspections.jpg',
      alt: 'Lista de inspecciones con filtros',
    },
    {
      title: 'Detalle de inspección con mapa',
      description:
        'Galería de fotos por zona del techo, daños, notas y mapa de la propiedad con botón de indicaciones. Las fotos se comprimen en el navegador antes de subirse.',
      tech: ['Google Maps API', 'Geocoding', 'Compresión de imágenes', 'Supabase Storage'],
      image: '/projects/honey-badger/inspection-detail.png',
      alt: 'Detalle de inspección con fotos por zona y mapa de la propiedad',
    },
    {
      title: 'Leads en tiempo real',
      description:
        'Cada solicitud del sitio público aparece al instante con aviso y globito en el menú. El staff cambia su estado, la convierte en cliente (invitación por correo) y programa la inspección.',
      tech: ['Supabase Realtime', 'Ruta de API con service role', 'Anti-spam'],
      image: '/projects/honey-badger/leads.png',
      alt: 'Lista de leads con filtros por estado y botón para convertir en cliente',
    },
    {
      title: 'Sitio público',
      description:
        'Página de captación en inglés y español con formulario de inspección, galería, explicación del proceso, preguntas frecuentes y textos legales.',
      tech: ['Next.js', 'GSAP', 'i18n EN/ES', 'Modo claro/oscuro'],
      image: '/projects/honey-badger/public-site.jpg',
      alt: 'Sitio público con formulario de solicitud de inspección',
    },
    {
      title: 'Portal del propietario',
      description:
        'El propietario ve sus propiedades con una barra de progreso por caso, el estado en lenguaje sencillo y el monto aprobado. Al abrir un caso tiene pestañas de resumen, fotos, documentos y actividad. Solo lectura, salvo subir documentos; nunca puede borrar.',
      tech: ['RLS', 'RPC get_claim_timeline', 'RouteGuard por rol'],
      image: '/projects/honey-badger/owner-portal.png',
      alt: 'Portal del propietario con sus reclamaciones e inspecciones',
    },
    {
      title: 'Vista móvil',
      description:
        'Toda la aplicación es responsive: en celular el menú pasa a una hamburguesa y los indicadores se apilan. El inspector sube fotos desde el teléfono en campo y el propietario consulta su caso desde el suyo.',
      tech: ['Tailwind CSS', 'Diseño responsive'],
      image: '/projects/honey-badger/mobile.png',
      alt: 'Dashboard en vista móvil con reclamaciones por estado',
      fit: 'contain',
    },
  ],
  links: {
    demo: 'https://honey-badger-mu.vercel.app/login',
    github: 'https://github.com/rodjoker/honey_badger',
  },
  demoCredentials: {
    email: 'demo@example.com',
    password: 'Demo2026!',
    note: 'Usuario de solo lectura: puedes recorrer el dashboard, reclamaciones, inspecciones y leads, pero no modificar datos. El sitio público de captación está en /public.',
  },
  disclaimer: 'Todos los datos de la demo (clientes, direcciones, montos) son ficticios y se cargaron con seeds.',
}

export default honeyBadger
