'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectDetail from '@/components/ProjectDetail';
import Single3DText from '@/components/Single3DText';
import TechStack3D from '@/components/TechStack3D';

const projects = [
  {
    title: "Delivery App",
    description: "Una aplicación de entrega a domicilio que permite a los usuarios pedir comida y productos de diferentes restaurantes y tiendas. Incluye seguimiento en tiempo real y sistema de pagos.",
    imageUrl: "/delivery_app.PNG",
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Socket.io"],
    githubUrl: "https://github.com/rodjoker",
    demoUrl: "https://delivery-app-demo.com",
    date: "2023"
  },
  {
    title: 'Landing Page Castello Films',
    description: 'Pagina Web para la productora y editora Castello Films.',
    imageUrl: "/castello_pw.PNG",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    demoUrl: "https://mc-landing-two.vercel.app/home",
    date: "2023"
  },
  {
    title: "Task Management System",
    description: "Sistema de gestión de tareas y proyectos con características colaborativas, seguimiento de tiempo y generación de informes.",
    imageUrl: "/delivery_app.PNG",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://task-manager-demo.com",
    date: "2023"
  },
  {
    title: "AI Content Generator",
    description: "Plataforma que utiliza IA para generar contenido personalizado, incluyendo textos, imágenes y sugerencias de marketing.",
    imageUrl: "/delivery_app.PNG",
    technologies: ["Python", "FastAPI", "React", "OpenAI API", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ai-content-generator",
    demoUrl: "https://ai-generator-demo.com",
    date: "2023"
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
        
        <h1 className="text-4xl font-bold text-blue-100 mb-12 text-center">
          Proyectos
        </h1>
      
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