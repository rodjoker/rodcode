'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectDetail from '@/components/ProjectDetail'

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
    title: "E-commerce Dashboard",
    description: "Panel de administración para una tienda en línea con análisis de ventas, gestión de inventario y sistema de pedidos en tiempo real.",
    imageUrl: "/ecommerce.jpg",
    technologies: ["React", "TypeScript", "Material-UI", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    demoUrl: "https://ecommerce-dashboard-demo.com",
    date: "2023"
  },
  {
    title: "Task Management System",
    description: "Sistema de gestión de tareas y proyectos con características colaborativas, seguimiento de tiempo y generación de informes.",
    imageUrl: "/task-management.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://task-manager-demo.com",
    date: "2023"
  },
  {
    title: "AI Content Generator",
    description: "Plataforma que utiliza IA para generar contenido personalizado, incluyendo textos, imágenes y sugerencias de marketing.",
    imageUrl: "/ai-generator.jpg",
    technologies: ["Python", "FastAPI", "React", "OpenAI API", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ai-content-generator",
    demoUrl: "https://ai-generator-demo.com",
    date: "2023"
  },
  {
    title: "Real Estate Platform",
    description: "Plataforma de bienes raíces con búsqueda avanzada, visualización 3D de propiedades y sistema de citas.",
    imageUrl: "/real-estate.jpg",
    technologies: ["Next.js", "Three.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/real-estate",
    demoUrl: "https://real-estate-demo.com",
    date: "2023"
  },
  {
    title: "Social Media Analytics",
    description: "Herramienta de análisis de redes sociales con métricas en tiempo real, análisis de sentimientos y generación de reportes.",
    imageUrl: "/analytics.jpg",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    githubUrl: "https://github.com/yourusername/social-analytics",
    demoUrl: "https://social-analytics-demo.com",
    date: "2023"
  }
];

export default function ProjectsPage() {
  return (
     <>
    <Header />
    <div className="min-h-screen bg-green-50 text-green-900 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-12 text-center">
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
      </div>
    </div>
    <Footer />
    </>
  );
}