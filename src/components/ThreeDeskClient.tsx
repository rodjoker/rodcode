'use client'

import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { PDFDownloadButton } from './PDFDownloadButton'
import Lazy3D from './Lazy3D'

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
              DESARROLLADOR FULL STACK · React · Node.js · Express · NestJS · AWS
            </p>
            <hr className="border-[#30363D] mt-3" />
          </div>

          {/* PERFIL */}
          <div>
            <h2 className="text-xs font-bold text-[#58A6FF] uppercase tracking-widest mb-2">Perfil</h2>
            <p className="text-[#8B949E]">
              Desarrollador Full Stack con cerca de 3 años de experiencia programando, especializado en React, Node.js y Express. Experiencia concreta en mantenimiento, evolución y mejora continua de aplicaciones web en producción real: diagnóstico y resolución de bugs críticos, optimización de infraestructura y evolución de APIs y flujos de negocio existentes. Trabajo con MongoDB y SQL, diseño APIs RESTful, y estoy acostumbrado a operar de forma autónoma sobre múltiples frentes de un mismo producto (frontend, backend y despliegue), con foco en calidad, buenas prácticas y aprendizaje continuo.
            </p>
          </div>

          {/* HABILIDADES */}
          <div>
            <h2 className="text-xs font-bold text-[#58A6FF] uppercase tracking-widest mb-3">Habilidades Técnicas</h2>
            <div className="space-y-1.5">
              {[
                ['Lenguajes',       'JavaScript, TypeScript'],
                ['Frontend',        'React, Next JS, Material UI, HTML, CSS, Tailwind CSS'],
                ['Backend',         'Node.js, Express.js, NestJS'],
                ['Bases de datos',  'MongoDB, SQL'],
                ['Tiempo real',     'WebSockets'],
                ['Cloud',           'AWS (Lambda, Amazon Connect)'],
                ['Herramientas y prácticas', 'Git/GitHub, Postman, diseño de APIs RESTful, control de versiones, optimización de costos de infraestructura, Prompt engineering, Desarrollo asistido por IA (GitHub Copilot, Claude AI)'],
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

            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-[#E6EDF3]">Desarrollador Full Stack — Freelance</span>
              <span className="text-[#6E7681] text-xs whitespace-nowrap ml-4">Mar. 2023 – Actualidad</span>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-[#C9D1D9] text-[13px]">
                GEMES — Plataforma de logística y delivery (Ene. 2024 – Actualidad)
              </p>
              <ul className="mt-2 space-y-1 text-[#8B949E]">
                <li>• Asumí la responsabilidad completa del backend y frontend (cliente y operadores) tras los primeros 8 meses del proyecto, liderando su mantenimiento y evolución continua</li>
                <li>• Migré la infraestructura AWS, reduciendo el costo operativo mensual en aproximadamente un 80% mediante la eliminación de componentes innecesarios (DocumentDB, NAT, VPC)</li>
                <li>• Diagnostiqué y resolví incidentes críticos en producción: cálculo incorrecto de tarifas de riders, pérdida de sesión entre cuentas y reconexión de WebSocket con tokens vencidos</li>
                <li>• Desarrollé y mantuve APIs RESTful con Node.js/NestJS y MongoDB, integradas con servicios AWS (Cognito, Lambda) para autenticación y comunicación en tiempo real vía WebSockets</li>
                <li>• Construí y evolucioné el frontend web en React para clientes y operadores: formularios, tablas dinámicas y módulos de notificaciones</li>
                <li>• Diseñé e implementé el sistema de auto-asignación de pedidos a riders, que calcula el rider disponible más cercano al local de origen aplicando reglas de negocio (disponibilidad, pedidos activos, ubicación), reduciendo la carga operativa manual del equipo de despacho</li>
              </ul>
              <p className="mt-1 text-xs text-[#58A6FF] italic">
                Stack: NestJS · Node.js · MongoDB · AWS (Lambda, Cognito) · WebSockets · React
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#C9D1D9] text-[13px]">
                Plataforma de administración de proyectos inmobiliarios (Mar. 2023 – Dic. 2023)
              </p>
              <ul className="mt-2 space-y-1 text-[#8B949E]">
                <li>• Desarrollé el frontend con React (Vite) y Material UI para la gestión de proyectos de construcción y remodelación: alta, edición y eliminación de proyectos, asignación de trabajadores y seguimiento de avance</li>
                <li>• Contribuí puntualmente al backend (endpoints REST) y a la infraestructura como código para el despliegue en AWS</li>
              </ul>
            </div>
          </div>

          {/* ESTUDIOS */}
          <div>
            <h2 className="text-xs font-bold text-[#58A6FF] uppercase tracking-widest mb-3">Estudios</h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#E6EDF3]">Formación en Desarrollo Web Full Stack MERN</span>
                  <span className="text-[#6E7681] text-xs">2023</span>
                </div>
                <p className="text-[#8B949E]">ADA School</p>
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
                <span className="font-semibold text-[#E6EDF3]">AWS Certified Cloud Practitioner (CCP)</span>
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
      <Lazy3D
        className="w-full h-full"
        reserveHeight="60vh"
        fallback={
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-center px-6">
            <p className="text-gray-300 text-lg font-semibold">Mi CV</p>
            <p className="text-gray-400 text-sm max-w-sm">
              Full Stack con React, Node.js/Express y AWS. Ábrelo aquí o descárgalo en PDF.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Ver CV
              </button>
              <PDFDownloadButton />
            </div>
          </div>
        }
      >
        <div style={{ width: '100%', height: '60vh', cursor: 'pointer' }}>
          <ThreeDeskScene onMonitorClick={() => setShowModal(true)} />
        </div>
      </Lazy3D>
      {showModal && <CVModal onClose={() => setShowModal(false)} />}
    </>
  )
}
