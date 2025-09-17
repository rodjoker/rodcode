import Header from '../../components/Header';

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Proyectos</h1>
        <p className="text-lg text-gray-200 mb-4 text-center">Aquí encontrarás una lista de todos mis proyectos destacados.</p>
        {/* Ejemplo de proyecto */}
        <div className="bg-purple-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Portfolio Web</h2>
          <p className="text-gray-300 mb-2">Mi portafolio personal con Next.js y Tailwind.</p>
          <a href="#" className="text-purple-300 underline">Ver más</a>
        </div>
      </section>
    </main>
  );
}
