interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

export default function ProfileCard({ name, title, description, image }: ProfileCardProps) {
  return (
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
          <p className="text-green-700 text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}