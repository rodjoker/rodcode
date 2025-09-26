import Header from '../../components/Header';

export default function Contact() {
  return (
  <main className="min-h-screen bg-blue-50 text-blue-900">
      <Header />
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">Contacto</h1>
        <p className="text-lg text-blue-700 mb-4">¿Quieres trabajar conmigo o tienes alguna pregunta? ¡Contáctame!</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Nombre" className="p-3 rounded-lg bg-blue-100 border border-blue-200 text-blue-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
          <input type="email" placeholder="Email" className="p-3 rounded-lg bg-blue-100 border border-blue-200 text-blue-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
          <textarea placeholder="Mensaje" className="p-3 rounded-lg bg-blue-100 border border-blue-200 text-blue-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" rows={4} />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-xl font-bold text-white transition-colors">Enviar</button>
        </form>
      </section>
    </main>
  );
}
