

import Header from '../../components/Header';

export default function Dashboard() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Bienvenido a Rodcode</h1>
        <p className="text-lg text-gray-200 mb-8">Explora mis proyectos, habilidades y experiencia en desarrollo web moderno.</p>
        <nav className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="/home" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-colors duration-200">Home</a>
          <a href="/projects" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-colors duration-200">Projects</a>
          <a href="/about" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-colors duration-200">About Me</a>
          <a href="/contact" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-colors duration-200">Contact</a>
        </nav>
      </section>
    </main>
    </>
  );
}
