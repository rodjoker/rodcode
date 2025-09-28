import Header from '../../components/Header';

export default function Contact() {
  return (
  <main className="min-h-screen bg-green-50 text-green-900">
      <Header />
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8 text-green-900">Contacto</h1>
        <p className="text-lg text-green-700 mb-4">¿Quieres trabajar conmigo o tienes alguna pregunta? ¡Contáctame!</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Nombre" className="p-3 rounded-lg bg-green-100 border border-green-200 text-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none" />
          <input type="email" placeholder="Email" className="p-3 rounded-lg bg-green-100 border border-green-200 text-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none" />
          <textarea placeholder="Mensaje" className="p-3 rounded-lg bg-green-100 border border-green-200 text-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none" rows={4} />
          <button type="submit" className="bg-green-500 hover:bg-green-600 py-3 px-6 rounded-xl font-bold text-white transition-colors">Enviar</button>
        </form>
      </section>
    </main>
  );
}
