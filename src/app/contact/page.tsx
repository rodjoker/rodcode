import Header from '../../components/Header';

export default function Contact() {
  return (
  <main className="min-h-screen bg-orange-100 text-gray-900">
      <Header />
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8 text-orange-700">Contacto</h1>
        <p className="text-lg text-orange-700 mb-4">¿Quieres trabajar conmigo o tienes alguna pregunta? ¡Contáctame!</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Nombre" className="p-3 rounded-lg bg-orange-50 border border-orange-300 text-gray-900" />
          <input type="email" placeholder="Email" className="p-3 rounded-lg bg-orange-50 border border-orange-300 text-gray-900" />
          <textarea placeholder="Mensaje" className="p-3 rounded-lg bg-orange-50 border border-orange-300 text-gray-900" rows={4} />
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 py-3 px-6 rounded-xl font-bold text-white transition-colors">Enviar</button>
        </form>
      </section>
    </main>
  );
}
