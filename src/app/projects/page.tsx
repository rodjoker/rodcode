import Header from '../../components/Header';

export default function Projects() {
  return (
  <main className="min-h-screen bg-green-50 text-green-900">
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-900">Proyectos</h1>
        <p className="text-lg text-green-700 mb-4 text-center">Aquí encontrarás una lista de todos mis proyectos destacados.</p>
        {/* Ejemplo de proyecto */}
        <div className="bg-green-100 border border-green-200 rounded-xl p-6 shadow-lg hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-2 text-green-900">Portfolio Web</h2>
          <p className="text-green-700 mb-2">Mi portafolio personal con Next.js y Tailwind.</p>
          <a href="#" className="text-green-500 hover:text-green-600 transition-colors">Ver más</a>
        </div>
      </section>
    </main>
  );
}
