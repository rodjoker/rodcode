'use client'
import Image from 'next/image'
import Link from 'next/link';

interface ProjectDetailProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  date: string;
}

const ProjectDetail = ({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  demoUrl,
  date
}: ProjectDetailProps) => {
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/20 rounded-lg shadow-lg overflow-hidden mb-8">
      {/* Imagen del proyecto */}
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido del proyecto */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-100 mb-4">{title}</h3>
        
        {/* Descripción */}
        <p className="text-gray-300 mb-6 h-24 overflow-y-auto">{description}</p>

        {/* Ficha Técnica */}
        <div className="bg-gray-800/50 border border-gray-700/20 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-100 mb-3">Ficha Técnica</h4>
          
          {/* Fecha */}
          <div className="mb-2">
            <span className="font-medium text-gray-200">Fecha: </span>
            <span className="text-gray-300">{date}</span>
          </div>

          {/* Tecnologías */}
          <div className="mb-4">
            <span className="font-medium text-gray-200">Tecnologías: </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          <div className="flex space-x-4">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-700 hover:text-gray-100"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </Link>
            )}
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-700 hover:text-gray-100"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;