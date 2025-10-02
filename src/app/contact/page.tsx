"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Footer from '@/components/Footer';
import Header from '../../components/Header';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
    ).then(
      () => {
        setStatusMessage("Mensaje enviado con éxito ✅");
        setIsSuccess(true);
        form.current?.reset(); // Limpia los campos
      },
      () => {
        setStatusMessage("Error al enviar el mensaje ❌");
        setIsSuccess(false);
      }
    );
  };

  return (
    <>
      <main className="min-h-screen bg-green-50 text-green-900 mt-32">
        <Header />
        <section className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-8 text-green-900">Contacto</h1>
          <p className="text-lg text-green-700 mb-4">
            ¿Quieres trabajar conmigo o tienes alguna pregunta? ¡Contáctame!
          </p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="p-3 rounded-lg bg-green-100 border border-green-200 text-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 rounded-lg bg-green-100 border border-green-200 text-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              required
              rows={4}
              className="p-3 rounded-lg bg-green-100 border border-green-200 text-green-900 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 py-3 px-6 rounded-xl font-bold text-white transition-colors"
            >
              Enviar
            </button>
          </form>

          {statusMessage && (
            <p
              className={`mt-6 text-lg font-medium ${
                isSuccess ? "text-green-700" : "text-red-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
