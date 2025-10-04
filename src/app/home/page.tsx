
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import ClientThreeHero from '@/components/ClientThreeHero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-black text-white">
      <section className="relative max-w-6xl mx-auto px-4 py-10 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4">
              RodCode — Rodolfo Rodriguez
            </h1>
            <p className="text-2xl text-gray-300 mb-6">
              Programador Web FullStack creando interfaces modernas y experiencias 3D interactivas para la web
            </p>
            <div className="space-x-4">
              <a href="#portfolio" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Ver proyectos
              </a>
              <a href="#contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors">
                Hablar conmigo
              </a>
            </div>
            <p className="mt-8 text-gray-400">
              React · Next.js · Three.js · TypeScript · Node.js · AWS
            </p>
          </div>
          <div className="h-[60vh] w-full relative z-0">
            <ClientThreeHero />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-center text-white" id="portfolio">Proyectos Destacados</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Delivery App',
              description: 'Aplicación para gestionar entregas y pedidos.',
              image: '/delivery_app.PNG',
              link: 'https://delivery-ten-umber.vercel.app',
            },
            {
              title: 'Landing Page Castello Films',
              description: 'Pagina Web para la productora y editora Castello Films.',
              image: '/castello_pw.PNG',
              link: 'https://mc-landing-two.vercel.app/home',
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
