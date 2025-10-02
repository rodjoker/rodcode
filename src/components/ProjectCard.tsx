

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
   
  <div className="bg-green-100 border border-green-200 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-all duration-300">
      {image && (
  <img src={image} alt={title} className="w-full h-40 object-cover bg-green-50" />
      )}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-green-900">{title}</h2>
          <p className="text-green-700 mb-4">{description}</p>
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-green-900 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-center">Ver Proyecto</a>
        )}
      </div>
    </div>
    
  );
}
