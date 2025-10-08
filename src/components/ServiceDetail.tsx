'use client'
import { motion } from 'framer-motion';

interface ServiceDetailProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: React.ReactNode;
}

const ServiceDetail = ({ title, description, technologies, features, icon }: ServiceDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/20 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="text-gray-300 w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-100 mb-3">{title}</h3>
          <p className="text-gray-300 mb-4 h-24 overflow-y-auto">{description}</p>
          
          {/* Tecnologías */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-200 mb-2">Tecnologías</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800/80 border border-gray-700/40 text-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Características */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-2">Características</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;