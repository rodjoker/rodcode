'use client'

import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { PDFDownloadButton } from './PDFDownloadButton'

const ThreeDeskScene = dynamic(() => import('./ThreeDesk'), { ssr: false })

function CVModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0D1117] border border-[#30363D] rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Barra título */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-[#161B22] border-b border-[#30363D] px-6 py-3 rounded-t-xl">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-4 text-sm font-semibold text-[#8B949E]">CV — RodCode</span>
          </div>
          <div className="flex items-center gap-3">
            <PDFDownloadButton />
            <button
              onClick={onClose}
              className="text-[#8B949E] hover:text-white transition-colors text-xl leading-none"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Barra acento */}
        <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600" />

        {/* Contenido CV */}
        <div className="px-8 py-6 text-[#C9D1D9] space-y-6 text-sm leading-relaxed">

          {/* HEADER */}
          <div>
            <h1 className="text-2xl font-bold text-[#F0F6FC] tracking-wide">
              RODOLFO ANTONIO RODRÍGUEZ QUINTERO
            </h1>
            <p className="text-[#8B949E] mt-1">
              +34 611360462 · rodolfoantoniorq@gmail.com · linkedin.com/in/rodolforodriguez-desarrolladorweb · rodcode.dev
            </p>
            <p className="text-[#58A6FF] font-semibold mt-1">
              DESARROLLADOR FULL STACK · React · Next.js · NestJS · React Native · AWS
            </p>
            <hr className="border-[#30363D] mt-3" />
          </div>

          {/* PERFIL */}
          <div>
            <h2 className="text-xs font-bold text-[#58A6FF] uppercase tracking-widest mb-2">Perfil</h2>
            <p className="text-[#8B949E]">
              Desarrollador Full Stack con experiencia construyendo productos completos en producción: interfaces web, apps móviles y arquitecturas serverless en AWS. Especializado en el ecosistema JavaScript/TypeScript (React, Next.js, NestJS, React Native) y en sistemas de tiempo real con WebSockets. Uso la IA como co-piloto de desarrollo para entregar código más limpio y escalable a mayor velocidad.
            </p>
          </div>

          {/* HABILIDADES */}
          <div>
            <h2 className="text-xs font-bold text-[#58A6FF] uppercase tracking-widest mb-3">Habilidades Técnicas</h2>
            <div className="space-y-1.5">
              {[
                ['Lenguajes',       'JavaScript, TypeScript, Python'],
                ['Frontend',        'React, Next.js, Tailwind CSS, Material UI, HTML, CSS'],
                ['Backend',         'Node.js, Express.js, NestJS, FastAPI'],
                ['Mobile',          'React Native, Expo'],
                ['Bases de datos',  'MongoDB, PostgreSQL, Supabase'],
                ['Cloud',           'AWS (Lambda, Cognito, S3, API Gateway, Connect), Serverless Framework, Boto3'],
                ['Tiempo real',     'WebSockets, Socket.io, Redis/Upstash · Estado: Zustand'],
                ['IA & Herramientas','GitHub Copilot, Claude AI, Git, GitHub, Swagger'],
                ['Metodologías',    'Clean Code, GitFlow, Agile, REST API Design'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-2">
                  <span className="text-[#E6EDF3] font-semibold min-w-[130px]">{label}:</span>
                  <span className="text-[#8B949E]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCIA */}
          <div>
            <h2 className="text-xs font-bold text-[#58A6FF] uppercase tracking-widest mb-3">Experiencia</h2>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <span className="font-semibold text-[#E6EDF3]">GEMES — Plataforma de Logística (Freelance)</span>
                <span className="text-[#6E7681] text-xs whitespace-nowrap ml-4">Ene. 2024 – Actualidad</span>
              </div>
              <ul className="mt-2 space-y-1 text-[#8B949E]">
                <li>• Construí plataforma de 3 actores en producción: backend serverless (NestJS + AWS Lambda), backoffice web (React + Vite + MUI) y app móvil (React Native + Expo)</li>
                <li>• Implementé tiempo real con WebSockets (AWS API Gateway) + Redis para coordinación instantánea entre clientes, operadores y domiciliarios</li>
                <li>• GPS tracking en background en app móvil con notificaciones push prioritarias (Expo Notifications)</li>
                <li>• Infraestructura AWS completa: Lambda, Cognito, S3, API Gateway con Serverless Framework</li>
              </ul>
              <p className="mt-1 text-xs text-[#58A6FF] italic">
                Stack: NestJS · TypeScript · MongoDB Atlas · AWS Lambda/Cognito/S3/API Gateway · React Native · Expo · Redis · Zustand
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <span className="font-semibold text-[#E6EDF3]">Proyectos Freelance Adicionales</span>
                <span className="text-[#6E7681] text-xs whitespace-nowrap ml-4">Mar. 2023 – Actualidad</span>
              </div>
              <ul className="mt-2 space-y-1 text-[#8B949E]">
                <li>• Next.js + Supabase: reducción del 30% en tiempo de desarrollo aprovechando auth y base de datos integradas</li>
                <li>• API RESTful Python (FastAPI) + AWS Boto3 para gestión de usuarios con CRUD completo y persistencia en BD</li>
                <li>• Auth NestJS + Passport.js con soporte OAuth 2.0 para integración segura con servicios de terceros</li>
                <li>• Plataforma inmobiliaria: administración de proyectos con React Vite, Material UI y MongoDB</li>
                <li>• Integración AWS Connect + Cognito para flujos de autenticación y atención al cliente</li>
              </ul>
            </div>
          </div>

          {/* ESTUDIOS */}
          <div>
            <h2 className="text-xs font-bold text-[#58A6FF] uppercase tracking-widest mb-3">Estudios</h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#E6EDF3]">Desarrollo Web Full Stack</span>
                  <span className="text-[#6E7681] text-xs">2023</span>
                </div>
                <p className="text-[#8B949E]">Protalento / ADA School</p>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#E6EDF3]">Profesional en Derecho</span>
                  <span className="text-[#6E7681] text-xs">2011</span>
                </div>
                <p className="text-[#8B949E]">Universidad Arturo Michelena</p>
              </div>
            </div>
          </div>

          {/* CERTIFICACIONES */}
          <div>
            <h2 className="text-xs font-bold text-[#58A6FF] uppercase tracking-widest mb-3">Certificaciones</h2>
            <div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#E6EDF3]">AWS Certified Cloud Practitioner</span>
                <span className="text-[#6E7681] text-xs">2025</span>
              </div>
              <p className="text-[#8B949E]">Amazon Web Services</p>
              <a
                href="https://www.credly.com/badges/e829ea0a-7fad-4379-ab9c-c4f0b813fb32/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#58A6FF] hover:underline"
              >
                Verificar en Credly →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function ThreeDeskClient() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div style={{ width: '100%', height: '100%', cursor: 'pointer' }}>
        <ThreeDeskScene onMonitorClick={() => setShowModal(true)} />
      </div>
      {showModal && <CVModal onClose={() => setShowModal(false)} />}
    </>
  )
}
