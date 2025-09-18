interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
  <div className="bg-orange-50 border border-orange-300 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
      {image && (
  <img src={image} alt={title} className="w-full h-40 object-cover bg-orange-100" />
      )}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h2>
          <p className="text-orange-700 mb-4">{description}</p>
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-center">Ver Proyecto</a>
        )}
      </div>
    </div>
  );
}
