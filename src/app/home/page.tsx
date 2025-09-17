
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';

export default function Home() {
  return (
  <main className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white">
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-10 mt-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-orange-200 drop-shadow">Mis Proyectos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Portfolio Web',
              description: 'Mi portafolio personal con Next.js y Tailwind.',
              image: '/file.svg',
              link: 'https://portfolio.example.com',
            },
            {
              title: 'E-commerce Moderno',
              description: 'Tienda online con integración de pagos y panel de admin.',
              image: '/globe.svg',
              link: 'https://ecommerce.example.com',
            },
            {
              title: 'Blog Técnico',
              description: 'Blog para compartir artículos sobre desarrollo web.',
              image: '/next.svg',
              link: 'https://blog.example.com',
            },
            {
              title: 'Landing Page SaaS',
              description: 'Landing page para producto SaaS con animaciones.',
              image: '/vercel.svg',
              link: 'https://saas.example.com',
            },
            {
              title: 'Dashboard Analytics',
              description: 'Dashboard interactivo para visualizar métricas.',
              image: '/window.svg',
              link: 'https://dashboard.example.com',
            },
            {
              title: 'App de Tareas',
              description: 'Aplicación para gestionar tareas y productividad.',
              image: '/file.svg',
              link: 'https://tasks.example.com',
            },
          ].map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
