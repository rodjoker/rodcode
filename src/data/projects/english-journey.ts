import type { ProjectCase } from './types'

const englishJourney: ProjectCase = {
  slug: 'english-journey',
  title: 'English Journey — Inglés técnico para desarrolladores',
  tagline: 'Un plan diario de inglés A2→B1 para programadores hispanohablantes, con profesor de IA que solo habla de inglés.',
  summary:
    'Plataforma para aprender inglés técnico en un plan de 60 días. Cada día tiene cinco tareas: vocabulario con tarjetas y práctica escrita, una lectura técnica con preguntas de comprensión, una lección de gramática con ejercicios, dos preguntas de entrevista de trabajo con consejos y un test diario que se aprueba con 70 puntos. El progreso, la racha y los intentos se guardan por usuario. Además incluye a RodCode, un profesor de IA con respuestas en streaming que explica gramática en español, corrige frases y practica entrevistas.',
  status: 'Demo',
  cover: '/projects/english-journey/dashboard.jpg',
  origin: {
    template: 'Auth System (login_sb)',
    note: 'Se clonó mi base de autenticación con Next.js + Supabase (login seguro, bloqueo por intentos, perfiles, roles y RLS) y se construyó encima el dominio del curso.',
  },
  timeline: {
    start: '13 jun 2026',
    end: '14 jun 2026',
    days: 2,
    how: 'Los plazos salen del historial de commits del repositorio. La base de autenticación ya existía y el trabajo se concentró en el modelo de datos del curso y en las cinco tareas diarias.',
  },
  stack: [
    { label: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4'] },
    { label: 'Backend y datos', items: ['Supabase', 'PostgreSQL', 'Row Level Security', 'Server Actions', 'Migraciones versionadas'] },
    { label: 'IA', items: ['DeepSeek (deepseek-chat)', 'Streaming SSE', 'Prompt de sistema acotado'] },
    { label: 'Despliegue', items: ['Vercel', 'Supabase Auth (SSR con cookies)'] },
  ],
  strategies: [
    {
      title: 'Clonar de mi plantilla, no empezar de cero',
      detail:
        'Registro, login, bloqueo por intentos fallidos, perfiles y RLS venían resueltos del proyecto Auth System. El tiempo se invirtió en el curso y no en reconstruir el login.',
    },
    {
      title: 'Contenido de solo lectura, progreso por usuario',
      detail:
        'Vocabulario, lecciones, lecturas, preguntas de entrevista y tests viven en tablas que cualquier usuario autenticado puede leer pero no modificar. El progreso va en tablas aparte, con RLS que deja a cada usuario ver y escribir solo lo suyo.',
    },
    {
      title: 'Progreso idempotente con restricciones únicas',
      detail:
        'Una fila por usuario y día con upsert sobre (user_id, day_number): completar una tarea dos veces no duplica nada. El aprobado del test (70 puntos) es una columna generada por la base de datos, así que la interfaz no puede alterarlo.',
    },
    {
      title: 'Server Actions en vez de una capa de API',
      detail:
        'Las escrituras (marcar tarea, guardar intento de test, actualizar perfil) son Server Actions que verifican la sesión en el servidor y redirigen. No hay endpoints REST que mantener para el CRUD.',
    },
    {
      title: 'Rutas protegidas desde el proxy de Next 16',
      detail:
        'Un proxy revisa la sesión de Supabase en cada petición: sin sesión redirige a /login y con sesión saca de /login y /signup hacia el dashboard.',
    },
    {
      title: 'Profesor de IA con límites claros',
      detail:
        'La ruta /api/rodcode exige sesión, guarda la clave de DeepSeek solo en el servidor y reenvía la respuesta en streaming. El prompt de sistema obliga al modelo a negarse con amabilidad si la pregunta no es de inglés y a explicar la gramática en español con ejemplos en inglés.',
    },
    {
      title: 'Aprendizaje con práctica activa',
      detail:
        'El vocabulario se practica con tarjetas y escritura, las lecturas registran las pistas consultadas y las respuestas del test se guardan con su corrección, lo que permite medir qué palabras ya están dominadas.',
    },
  ],
  screens: [
    {
      title: 'Inicio de sesión',
      description: 'Acceso con email y contraseña, con registro abierto para quien quiera probar la demo. En la captura se difuminó el correo.',
      tech: ['Supabase Auth', 'Server Actions', 'Tailwind CSS'],
      image: '/projects/english-journey/login.jpg',
      alt: 'Pantalla de inicio de sesión de English Journey',
    },
    {
      title: 'Panel del día',
      description:
        'Día actual del plan (3 de 60), progreso general, racha de días seguidos y las cinco tareas con su estado: vocabulario, lectura, gramática, preguntas de entrevista y test diario. Desde aquí se abre también el profesor de IA.',
      tech: ['Next.js', 'Supabase', 'RLS por usuario'],
      image: '/projects/english-journey/dashboard.jpg',
      alt: 'Panel con las tareas del día y la racha',
      fit: 'contain',
    },
    {
      title: 'Vocabulario',
      description:
        'Quince palabras diarias de tecnología y trabajo, en bloques de cinco. Se muestra la palabra, su pronunciación y una frase de ejemplo, y el estudiante escribe la traducción o marca que no la sabe.',
      tech: ['React 19', 'PostgreSQL', 'Progreso por palabra'],
      image: '/projects/english-journey/vocabulary.jpg',
      alt: 'Tarjeta de vocabulario con la palabra object',
      fit: 'contain',
    },
    {
      title: 'Lectura técnica',
      description:
        'Texto de nivel A2 sobre programación con las palabras clave resaltadas: al tocarlas aparece su traducción. Después hay una fase de comprensión con preguntas.',
      tech: ['jsonb', 'Server Actions'],
      image: '/projects/english-journey/reading.jpg',
      alt: 'Lectura sobre funciones con palabras resaltadas',
      fit: 'contain',
    },
    {
      title: 'Gramática',
      description:
        'Lección del día dentro de una unidad (aquí, presente simple frente a continuo) con la estructura, las palabras señal, ejemplos y un consejo orientado a entrevistas. Después pasa a una fase de práctica.',
      tech: ['jsonb', 'Next.js'],
      image: '/projects/english-journey/grammar.jpg',
      alt: 'Lección de gramática sobre presente simple y continuo',
      fit: 'contain',
    },
    {
      title: 'Test diario',
      description:
        'Preguntas por categoría (aquí, vocabulario) con opciones múltiples y barra de progreso. Se aprueba con 70 puntos y cada intento queda guardado en el historial.',
      tech: ['Columna generada', 'Server Actions'],
      image: '/projects/english-journey/test.jpg',
      alt: 'Pregunta del test diario con cuatro opciones',
      fit: 'contain',
    },
    {
      title: 'RodCode, el profesor de IA',
      description:
        'Chat con respuestas en streaming que explica gramática en español con ejemplos en inglés, corrige frases y propone práctica. Si la pregunta no es de inglés, lo dice con amabilidad y redirige.',
      tech: ['DeepSeek', 'Streaming SSE', 'Route Handler autenticado'],
      image: '/projects/english-journey/rodcode-chat.jpg',
      alt: 'Conversación con el profesor de IA sobre el verbo get',
    },
  ],
  links: {
    demo: 'https://rc-a2-english.vercel.app/',
    github: 'https://github.com/rodjoker/rc_a2_english',
  },
  disclaimer:
    'Proyecto personal de aprendizaje. Para probar la demo, crea una cuenta gratuita desde la pantalla de registro; tu progreso es independiente del de los demás usuarios.',
}

export default englishJourney
