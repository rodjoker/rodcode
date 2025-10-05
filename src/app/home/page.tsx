import Header from '../../components/Header'
import ProjectCard from '../../components/ProjectCard'
import ClientThreeHero from '@/components/ClientThreeHero'
import Footer from '@/components/Footer'
import ThreeDeskClient from '@/components/ThreeDeskClient'


export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <section className="relative max-w-6xl mx-auto px-4 py-10 mt-36 md:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-4 text-white">
                RodCode — Rodolfo Rodriguez
              </h1>
              <p className="text-2xl text-gray-300 mb-6">
                Programador Web FullStack 
              </p>
              <p className="text-2xl text-gray-300 mb-6">
                | Desarrollador web | Transformo Ideas en Soluciones Digitales Efectivas | JavaScript | Node.js | Python | AWS | Amazon Connect | Salesforce
              </p>
              <div className="space-x-4">
                <a
                  href="/project"
                  className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Ver proyectos
                </a>
                <a
                  href="/contact"
                  className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-800/50 hover:text-white hover:border-gray-500 transition-colors"
                >
                  Hablar conmigo
                </a>
              </div>
            </div>

            <div className="h-[60vh] w-full relative z-0 overflow-hidden">
              <ClientThreeHero />
            </div>
          </div>

          {/* Nueva sección 3D: Escritorio con monitor que muestra tu CV */}
          <section className="mt-20">
            <div className="w-full h-[60vh] bg-transparent rounded-lg overflow-hidden border border-gray-800">
              <ThreeDeskClient />
            </div>
          </section>

          <h1
            className="text-4xl font-bold mt-32 mb-8 text-center text-blue-100"
            id="portfolio"
          >
            Proyectos Destacados
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16 px-4">
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
              <ProjectCard
                key={idx}
                {...project}
                index={idx}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
