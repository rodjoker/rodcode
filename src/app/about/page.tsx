import Header from '../../components/Header';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
      <Header />
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8">Sobre Mí</h1>
        <p className="text-lg text-gray-200 mb-4">Soy Daniel, desarrollador frontend apasionado por crear experiencias web modernas y funcionales. Me especializo en React, Next.js y diseño UI/UX.</p>
        <p className="text-gray-300">Siempre busco aprender nuevas tecnologías y mejorar mis habilidades.</p>
      </section>
    </main>
  );
}
