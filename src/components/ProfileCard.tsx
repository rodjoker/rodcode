'use client'
import { useState } from 'react';

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  subtitle: string;
  additionalDescription: string;
  image: string;
  showReadMore?: boolean;
  extendedContent?: string;
}

export default function ProfileCard({ 
  name, 
  title, 
  description, 
  subtitle, 
  additionalDescription, 
  image,
  showReadMore = false,
  extendedContent = ""
}: ProfileCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-green-100 border border-green-200 rounded-xl shadow-lg overflow-hidden mb-16 mt-16">
        <div className="flex flex-col md:flex-row">
          {/* Imagen - ocupa todo el ancho en móvil, lado izquierdo en desktop */}
          <div className="w-full md:w-1/3 relative">
            <div className="aspect-square md:aspect-auto md:h-full">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-contain object-center md:object-cover"
              />
            </div>
          </div>
          
          {/* Contenido - adaptable y centrado en móvil, alineado a la izquierda en desktop */}
          <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-2">{name}</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-4">{title}</h2>
            <p className="text-green-700 text-lg leading-relaxed text-justify mb-6">{description}</p>
            {showReadMore && extendedContent && (
              <button
                onClick={() => setIsModalOpen(true)}
                className=" text-green-700 font-semibold py-2 px-4 rounded-lg mb-6 w-fit transition-colors duration-200"
              >
                Leer más
              </button>
            )}
            <h3 className="text-xl font-semibold text-green-800 mb-3">{subtitle}</h3>
            <div 
              className="text-green-700 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: additionalDescription }}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 transform transition-all duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 id="modal-title" className="text-2xl font-bold text-green-900">{name}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label="Cerrar modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div 
              className="text-green-700 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: extendedContent }}
            />
          </div>
        </div>
      )}
    </>
  );
}