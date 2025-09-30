
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import ProfileCard from '../../components/ProfileCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-green-50 text-green-900">
      <section className="max-w-6xl mx-auto px-4 py-10 mt-16">
        <ProfileCard 
          name="Rodolfo Rodriguez"
          title="RodCode"
          description="Soy un desarrollador Full Stack apasionado por crear soluciones web innovadoras y eficientes. Con experiencia en tecnologías modernas como React, Next.js, y Node.js, me especializo en construir aplicaciones web escalables y responsivas. Mi enfoque se centra en combinar funcionalidad robusta con diseño intuitivo para crear experiencias de usuario excepcionales."
          subtitle="Integración de IA para un Desarrollo Avanzado"
          additionalDescription="Además de mis habilidades técnicas, he desarrollado y aplicado la ingeniería de prompts para integrar la Inteligencia Artificial de forma efectiva en mi flujo de trabajo de desarrollo. Esta sinergia me ha permitido generar código más limpio y optimizado, entregando consistentemente aplicaciones altamente escalables. Como resultado, he logrado acelerar significativamente los procesos de entrega y asegurar la máxima satisfacción del cliente."
          image="/rodolfo_perfil.png"
        />
        
        <h1 className="text-4xl font-bold mb-8 text-center text-green-900 drop-shadow">Mis Proyectos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Delivery App',
              description: 'Aplicación para gestionar entregas y pedidos.',
              image: '/delivery_app.PNG',
              link: 'https://delivery-ten-umber.vercel.app',
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
    </div>
      <Footer />
    </>
  );
}
