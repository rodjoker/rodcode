import Single3DText from '@/components/Single3DText'
import ServiceDetail from '@/components/ServiceDetail'
import Header from '../../components/Header';
import Footer from '@/components/Footer';

// Iconos para los servicios
const WebIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const APIIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const EcommerceIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
)

export default function Services() {
  const services = [
    {
      title: "Desarrollo Web Frontend",
      description: "Creación de interfaces web modernas, responsivas y altamente interactivas utilizando las últimas tecnologías del mercado.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: [
        "Diseños responsivos para todos los dispositivos",
        "Optimización de rendimiento y SEO",
        "Animaciones y transiciones fluidas",
        "Integración con APIs y servicios externos"
      ],
      icon: <WebIcon />
    },
    // {
    //   title: "Desarrollo Mobile First",
    //   description: "Desarrollo de aplicaciones web enfocadas en la experiencia móvil, asegurando una experiencia de usuario óptima en cualquier dispositivo.",
    //   technologies: ["React Native", "Next.js", "Tailwind CSS", "PWA"],
    //   features: [
    //     "Aplicaciones web progresivas (PWA)",
    //     "Diseño Mobile First",
    //     "Optimización de carga y rendimiento",
    //     "Interfaces adaptativas"
    //   ],
    //   icon: <MobileIcon />
    // },
    {
      title: "APIs y Backend",
      description: "Desarrollo de APIs robustas y escalables para soportar aplicaciones web y móviles, con integración a diferentes servicios en la nube.",
      technologies: ["Node.js", "Express", "MongoDB", "AWS"],
      features: [
        "Arquitectura RESTful",
        "Integración con bases de datos",
        "Autenticación y autorización",
        "Despliegue en la nube"
      ],
      icon: <APIIcon />
    },
    {
      title: "E-commerce y CMS",
      description: "Implementación de soluciones de comercio electrónico personalizadas y sistemas de gestión de contenido adaptados a las necesidades del negocio.",
      technologies: ["Next.js", "Stripe", "Salesforce", "Headless CMS"],
      features: [
        "Integración de pasarelas de pago",
        "Gestión de inventario",
        "Panel de administración",
        "Análisis y reportes"
      ],
      icon: <EcommerceIcon />
    }
  ]

  return (
    <>
    <Header />
      <div className="pt-24 md:pt-28">
        <Single3DText text="Mis Servicios" height="40vh" />
      </div>
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceDetail
                key={index}
                title={service.title}
                description={service.description}
                technologies={service.technologies}
                features={service.features}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </main>
        <Footer />
    </>
  )
}