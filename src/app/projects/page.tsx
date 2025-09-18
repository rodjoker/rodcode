import Header from '../../components/Header';

export default function Projects() {
  return (
  <main className="min-h-screen bg-orange-100 text-gray-900">
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-orange-700">Proyectos</h1>
        <p className="text-lg text-orange-700 mb-4 text-center">Aquí encontrarás una lista de todos mis proyectos destacados.</p>
        {/* Ejemplo de proyecto */}
        <div className="bg-orange-50 border border-orange-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">Portfolio Web</h2>
          <p className="text-orange-700 mb-2">Mi portafolio personal con Next.js y Tailwind.</p>
          <a href="#" className="text-orange-400 underline">Ver más</a>
        </div>
      </section>
    </main>
  );
}
