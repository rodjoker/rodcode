'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
      )
      .then(
        () => {
          setStatusMessage('Mensaje enviado con éxito ✅')
          setIsSuccess(true)
          form.current?.reset()
        },
        () => {
          setStatusMessage('Error al enviar el mensaje ❌')
          setIsSuccess(false)
        }
      )
  }

  return (
    <>
<form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-left">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none placeholder-gray-500"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              required
              rows={4}
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-xl font-bold text-white transition-colors"
            >
              Enviar
            </button>
          </form>
{statusMessage && (
            <p className={`mt-6 text-lg font-medium ${isSuccess ? 'text-gray-300' : 'text-red-400'}`}>
              {statusMessage}
            </p>
          )}
    </>
  )
}
