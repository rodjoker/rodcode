

import Header from '../../components/Header';

export default function Dashboard() {
  return (
    <>
    <Header />
  <main className="min-h-screen bg-orange-50 text-gray-900">
      
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-orange-700">Bienvenido a Rodcode</h1>
        <p className="text-lg text-orange-700 mb-8">Explora mis proyectos, habilidades y experiencia en desarrollo web moderno.</p>
        <nav className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="/home" className="bg-orange-400 hover:bg-orange-600 text-gray-900 font-bold py-2 px-6 rounded-xl shadow-lg transition-colors duration-200">Home</a>
          <a href="/projects" className="bg-orange-400 hover:bg-orange-600 text-gray-900 font-bold py-2 px-6 rounded-xl shadow-lg transition-colors duration-200">Projects</a>
          <a href="/about" className="bg-orange-400 hover:bg-orange-600 text-gray-900 font-bold py-2 px-6 rounded-xl shadow-lg transition-colors duration-200">About Me</a>
          <a href="/contact" className="bg-orange-400 hover:bg-orange-600 text-gray-900 font-bold py-2 px-6 rounded-xl shadow-lg transition-colors duration-200">Contact</a>
        </nav>
      </section>
    </main>
    </>
  );
}
