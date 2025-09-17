import Header from '../../components/Header';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <Header />
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>
        <p className="text-lg text-gray-200 mb-4">¿Quieres trabajar conmigo o tienes alguna pregunta? ¡Contáctame!</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Nombre" className="p-3 rounded-lg bg-pink-800 text-white" />
          <input type="email" placeholder="Email" className="p-3 rounded-lg bg-pink-800 text-white" />
          <textarea placeholder="Mensaje" className="p-3 rounded-lg bg-pink-800 text-white" rows={4} />
          <button type="submit" className="bg-pink-600 hover:bg-pink-700 py-3 px-6 rounded-xl font-bold transition-colors">Enviar</button>
        </form>
      </section>
    </main>
  );
}
