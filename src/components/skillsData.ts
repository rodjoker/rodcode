// Datos compartidos: la esfera 3D y el listado estático de móvil usan la misma fuente.
export const skills = [
  // Frontend
  { name: 'React',        color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js',      color: '#FFFFFF', category: 'Frontend' },
  { name: 'TypeScript',   color: '#3178C6', category: 'Frontend' },
  { name: 'Tailwind CSS', color: '#38BDF8', category: 'Frontend' },
  { name: 'Zustand',      color: '#9333EA', category: 'Frontend' },
  { name: 'HTML / CSS',   color: '#E34F26', category: 'Frontend' },
  // Backend
  { name: 'Node.js',      color: '#68A063', category: 'Backend' },
  { name: 'NestJS',       color: '#E0234E', category: 'Backend' },
  { name: 'Python',       color: '#FFD43B', category: 'Backend' },
  { name: 'FastAPI',      color: '#009688', category: 'Backend' },
  { name: 'WebSockets',   color: '#F59E0B', category: 'Backend' },
  { name: 'Redis',        color: '#DC382D', category: 'Backend' },
  // Cloud
  { name: 'AWS',          color: '#FF9900', category: 'Cloud' },
  { name: 'Lambda',       color: '#FF9900', category: 'Cloud' },
  { name: 'Serverless',   color: '#FD5750', category: 'Cloud' },
  { name: 'S3',           color: '#FF9900', category: 'Cloud' },
  { name: 'Cognito',      color: '#DD344C', category: 'Cloud' },
  // Database
  { name: 'MongoDB',      color: '#47A248', category: 'Database' },
  { name: 'PostgreSQL',   color: '#336791', category: 'Database' },
  { name: 'Supabase',     color: '#3ECF8E', category: 'Database' },
  // Mobile
  { name: 'React Native', color: '#61DAFB', category: 'Mobile' },
  { name: 'Expo',         color: '#8B5CF6', category: 'Mobile' },
  // Tools
  { name: 'Git',          color: '#F05032', category: 'Tools' },
  { name: 'GitHub',       color: '#C9D1D9', category: 'Tools' },
  { name: 'Claude AI',    color: '#D97706', category: 'Tools' },
]

export const categoryColors: Record<string, string> = {
  Frontend: '#61DAFB',
  Backend:  '#68A063',
  Cloud:    '#FF9900',
  Database: '#47A248',
  Mobile:   '#8B5CF6',
  Tools:    '#F05032',
}
