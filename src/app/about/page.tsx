import Header from '../../components/Header';

export default function About() {
  return (
  <main className="min-h-screen bg-blue-50 text-blue-900">
      <Header />
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">Sobre Mí</h1>
        <p className="text-lg text-blue-700 mb-4">Soy Daniel, desarrollador frontend apasionado por crear experiencias web modernas y funcionales. Me especializo en React, Next.js y diseño UI/UX.</p>
        <p className="text-blue-700">Siempre busco aprender nuevas tecnologías y mejorar mis habilidades.</p>
      </section>
    </main>
  );
}
