'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectDetail from '@/components/ProjectDetail';
import Single3DText from '@/components/Single3DText';

const projects = [
  {
    title: "Delivery App",
    description: "Una aplicación de entrega a domicilio que permite a los usuarios pedir comida y productos de diferentes restaurantes y tiendas. Incluye seguimiento en tiempo real y sistema de pagos.",
    imageUrl: "/delivery_app.PNG",
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Socket.io"],
    githubUrl: "https://github.com/rodjoker",
    demoUrl: "https://delivery-app-demo.com",
    date: "2025"
  },
  {
    title: 'Landing Page Castello Films',
    description: 'Pagina Web para la productora y editora Castello Films.',
    imageUrl: "/castello_pw.PNG",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/rodjoker",
    demoUrl: "https://mc-landing-two.vercel.app/home",
    date: "2025"
  },
  {
    title: 'Strategy Search Job',
    description: 'Agenda con estrategia de búsqueda de empleo, he investigado las mejores estrategias para encontrar empleo y he decidido implementar esta, espero te sea de utilidad.',
    imageUrl: "/strategySearchJob.PNG",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/rodjoker",
    demoUrl: "https://strategy-search-job.vercel.app/dashboard",
    date: "2025"
  },
];

export default function ProjectsPage() {
  return (
     <>
    <Header />
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Single3DText text="Next.js" />
      <Single3DText text="AWS" />
      <Single3DText text="TypeScript" />
    </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectDetail
            key={index}
            {...project}
          />
        ))}
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Single3DText text="JavaScript" />
      <Single3DText text="Salesforce" />
      <Single3DText text="Python" />
    </div>
      </div>
    </div>
    <Footer />
    </>
  );
}