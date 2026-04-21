'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(' ')
  let line = ''
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' '
    if (ctx.measureText(testLine).width > maxWidth && n > 0) {
      ctx.fillText(line, x, y)
      line = words[n] + ' '
      y += lineHeight
    } else {
      line = testLine
    }
  }
  ctx.fillText(line, x, y)
  return y + lineHeight
}

function buildCVTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 2048
  canvas.height = 1152
  const ctx = canvas.getContext('2d')!

  const M = 64          // margin
  const W = canvas.width - M * 2
  let y = 0

  // ── Fondo dark ───────────────────────────────────────────────────────────────
  ctx.fillStyle = '#0D1117'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // ── Barra título superior ─────────────────────────────────────────────────
  ctx.fillStyle = '#161B22'
  ctx.fillRect(0, 0, canvas.width, 44)

  // Puntos de semáforo
  const dots = ['#FF5F57', '#FFBD2E', '#28C840']
  dots.forEach((c, i) => {
    ctx.beginPath()
    ctx.arc(28 + i * 26, 22, 9, 0, Math.PI * 2)
    ctx.fillStyle = c
    ctx.fill()
  })

  // Título centrado
  ctx.font = 'bold 20px Inter, system-ui'
  ctx.fillStyle = '#8B949E'
  ctx.textAlign = 'center'
  ctx.fillText('CV — RodCode', canvas.width / 2, 30)
  ctx.textAlign = 'left'

  // ── Barra acento degradado ────────────────────────────────────────────────
  const grad = ctx.createLinearGradient(0, 44, canvas.width, 44)
  grad.addColorStop(0, '#2563EB')
  grad.addColorStop(1, '#7C3AED')
  ctx.fillStyle = grad
  ctx.fillRect(0, 44, canvas.width, 6)

  y = 76

  // ── HEADER ───────────────────────────────────────────────────────────────
  ctx.font = 'bold 40px Inter, system-ui'
  ctx.fillStyle = '#F0F6FC'
  ctx.fillText('RODOLFO ANTONIO RODRÍGUEZ QUINTERO', M, y)
  y += 32

  ctx.font = '17px Inter, system-ui'
  ctx.fillStyle = '#8B949E'
  ctx.fillText('+34 611360462  ·  rodolfoantoniorq@gmail.com  ·  linkedin.com/in/rodolforodriguez-desarrolladorweb  ·  rodcode.dev', M, y)
  y += 24

  ctx.font = 'bold 19px Inter, system-ui'
  ctx.fillStyle = '#58A6FF'
  ctx.fillText('DESARROLLADOR FULL STACK  ·  React · Next.js · NestJS · React Native · AWS', M, y)
  y += 16

  ctx.fillStyle = '#30363D'
  ctx.fillRect(M, y, W, 1)
  y += 16

  // ── PERFIL ────────────────────────────────────────────────────────────────
  ctx.font = 'bold 13px Inter, system-ui'
  ctx.fillStyle = '#58A6FF'
  ctx.fillText('PERFIL', M, y)
  y += 18

  ctx.font = '15px Inter, system-ui'
  ctx.fillStyle = '#C9D1D9'
  y = wrapText(ctx, 'Desarrollador Full Stack con experiencia construyendo productos completos en producción: interfaces web, apps móviles y arquitecturas serverless en AWS. Especializado en JavaScript/TypeScript (React, Next.js, NestJS, React Native) y sistemas de tiempo real con WebSockets. Uso la IA como co-piloto de desarrollo para entregar código más limpio y escalable.', M, y, W, 21)
  y += 4

  ctx.fillStyle = '#30363D'
  ctx.fillRect(M, y, W, 1)
  y += 14

  // ── HABILIDADES ───────────────────────────────────────────────────────────
  ctx.font = 'bold 13px Inter, system-ui'
  ctx.fillStyle = '#58A6FF'
  ctx.fillText('HABILIDADES TÉCNICAS', M, y)
  y += 18

  const skills: [string, string][] = [
    ['Lenguajes',        'JavaScript, TypeScript, Python'],
    ['Frontend',         'React, Next.js, Tailwind CSS, Material UI, HTML, CSS'],
    ['Backend',          'Node.js, Express.js, NestJS, FastAPI'],
    ['Mobile',           'React Native, Expo'],
    ['Bases de datos',   'MongoDB, PostgreSQL, Supabase'],
    ['Cloud',            'AWS (Lambda, Cognito, S3, API Gateway, Connect), Serverless Framework'],
    ['Tiempo real',      'WebSockets, Socket.io, Redis/Upstash · Zustand'],
    ['IA & Tools',       'Claude AI, GitHub Copilot, Git, GitHub, Swagger'],
  ]

  skills.forEach(([label, value]) => {
    ctx.font = 'bold 15px Inter, system-ui'
    ctx.fillStyle = '#E6EDF3'
    ctx.fillText(label + ':', M, y)
    const lw = ctx.measureText(label + ':  ').width
    ctx.font = '15px Inter, system-ui'
    ctx.fillStyle = '#8B949E'
    ctx.fillText(value, M + lw, y)
    y += 20
  })
  y += 8

  ctx.fillStyle = '#30363D'
  ctx.fillRect(M, y, W, 1)
  y += 14

  // ── EXPERIENCIA ───────────────────────────────────────────────────────────
  ctx.font = 'bold 13px Inter, system-ui'
  ctx.fillStyle = '#58A6FF'
  ctx.fillText('EXPERIENCIA', M, y)
  y += 18

  ctx.font = 'bold 16px Inter, system-ui'
  ctx.fillStyle = '#E6EDF3'
  ctx.fillText('GEMES — Plataforma de Logística (Freelance)', M, y)
  ctx.font = '14px Inter, system-ui'
  ctx.fillStyle = '#6E7681'
  ctx.textAlign = 'right'
  ctx.fillText('Ene. 2024 – Actualidad', canvas.width - M, y)
  ctx.textAlign = 'left'
  y += 20

  ctx.font = '14px Inter, system-ui'
  ctx.fillStyle = '#8B949E'
  const gemesLines = [
    '• Backend serverless (NestJS + AWS Lambda), backoffice React y app móvil React Native en producción',
    '• Tiempo real con WebSockets (AWS API Gateway) + Redis — coordinación entre clientes, operadores y riders',
    '• GPS tracking en background con notificaciones push prioritarias (Expo Notifications)',
    '• Infraestructura AWS: Lambda, Cognito, S3, API Gateway con Serverless Framework',
  ]
  gemesLines.forEach(line => {
    y = wrapText(ctx, line, M + 10, y, W - 10, 20)
  })

  ctx.font = '13px Inter, system-ui'
  ctx.fillStyle = '#58A6FF'
  ctx.fillText('Stack: NestJS · TypeScript · MongoDB Atlas · AWS · React Native · Expo · Redis · Zustand', M + 10, y)
  y += 20

  ctx.font = 'bold 16px Inter, system-ui'
  ctx.fillStyle = '#E6EDF3'
  ctx.fillText('Proyectos Freelance Adicionales', M, y)
  ctx.font = '14px Inter, system-ui'
  ctx.fillStyle = '#6E7681'
  ctx.textAlign = 'right'
  ctx.fillText('Mar. 2023 – Actualidad', canvas.width - M, y)
  ctx.textAlign = 'left'
  y += 20

  ctx.font = '14px Inter, system-ui'
  ctx.fillStyle = '#8B949E'
  const freelanceLines = [
    '• Next.js + Supabase: reducción del 30% en tiempo de desarrollo',
    '• API RESTful Python (FastAPI) + AWS Boto3 — CRUD completo con persistencia en BD',
    '• Auth NestJS + Passport.js con OAuth 2.0 para integración con servicios de terceros',
  ]
  freelanceLines.forEach(line => {
    y = wrapText(ctx, line, M + 10, y, W - 10, 20)
  })
  y += 6

  ctx.fillStyle = '#30363D'
  ctx.fillRect(M, y, W, 1)
  y += 14

  // ── ESTUDIOS ──────────────────────────────────────────────────────────────
  ctx.font = 'bold 13px Inter, system-ui'
  ctx.fillStyle = '#58A6FF'
  ctx.fillText('ESTUDIOS', M, y)
  y += 18

  ctx.font = 'bold 15px Inter, system-ui'
  ctx.fillStyle = '#E6EDF3'
  ctx.fillText('Desarrollo Web Full Stack', M, y)
  ctx.font = '13px Inter, system-ui'
  ctx.fillStyle = '#6E7681'
  ctx.textAlign = 'right'
  ctx.fillText('2023', canvas.width - M, y)
  ctx.textAlign = 'left'
  y += 18
  ctx.font = '13px Inter, system-ui'
  ctx.fillStyle = '#8B949E'
  ctx.fillText('Protalento / ADA School', M, y)
  y += 18

  ctx.font = 'bold 15px Inter, system-ui'
  ctx.fillStyle = '#E6EDF3'
  ctx.fillText('Profesional en Derecho', M, y)
  ctx.font = '13px Inter, system-ui'
  ctx.fillStyle = '#6E7681'
  ctx.textAlign = 'right'
  ctx.fillText('2011', canvas.width - M, y)
  ctx.textAlign = 'left'
  y += 18
  ctx.font = '13px Inter, system-ui'
  ctx.fillStyle = '#8B949E'
  ctx.fillText('Universidad Arturo Michelena', M, y)
  y += 18

  ctx.fillStyle = '#30363D'
  ctx.fillRect(M, y, W, 1)
  y += 14

  // ── CERTIFICACIONES ───────────────────────────────────────────────────────
  ctx.font = 'bold 13px Inter, system-ui'
  ctx.fillStyle = '#58A6FF'
  ctx.fillText('CERTIFICACIONES', M, y)
  y += 18

  ctx.font = 'bold 15px Inter, system-ui'
  ctx.fillStyle = '#E6EDF3'
  ctx.fillText('AWS Certified Cloud Practitioner', M, y)
  ctx.font = '13px Inter, system-ui'
  ctx.fillStyle = '#6E7681'
  ctx.textAlign = 'right'
  ctx.fillText('2025', canvas.width - M, y)
  ctx.textAlign = 'left'
  y += 18
  ctx.font = '13px Inter, system-ui'
  ctx.fillStyle = '#8B949E'
  ctx.fillText('Amazon Web Services · credly.com/badges/e829ea0a-7fad-4379-ab9c-c4f0b813fb32', M, y)

  return new THREE.CanvasTexture(canvas)
}

function Monitor({ texture, onMonitorClick }: { texture: THREE.Texture; onMonitorClick: () => void }) {
  return (
    <group position={[0, 0.8, 0]}>
      {/* Glow exterior detrás del marco */}
      <mesh position={[0, 0, -0.02]}>
        <boxGeometry args={[6.7, 4.4, 0.01]} />
        <meshStandardMaterial color="#2563EB" emissive="#2563EB" emissiveIntensity={0.6} transparent opacity={0.25} />
      </mesh>

      {/* Marco metálico visible */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[6.4, 4.1, 0.12]} />
        <meshStandardMaterial
          color="#374151"
          emissive="#1e3a5f"
          emissiveIntensity={0.4}
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>

      {/* Pantalla — clickeable */}
      <mesh position={[0, 0, 0.07]} onClick={onMonitorClick}>
        <planeGeometry args={[6.0, 3.8]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {/* Pie */}
      <mesh position={[0, -2.7, 0]}>
        <boxGeometry args={[0.2, 1.8, 0.2]} />
        <meshStandardMaterial color="#374151" metalness={0.85} roughness={0.2} />
      </mesh>
      <mesh position={[0, -3.55, 0]}>
        <boxGeometry args={[2.2, 0.12, 1.2]} />
        <meshStandardMaterial color="#374151" metalness={0.85} roughness={0.2} />
      </mesh>
    </group>
  )
}

function DeskObjects({ texture, onMonitorClick }: { texture: THREE.Texture; onMonitorClick: () => void }) {
  return (
    <group rotation={[0, -0.15, 0]} position={[-0.1, -0.4, 0]}>
      <Float rotationIntensity={0.15} floatIntensity={0.4}>
        <Monitor texture={texture} onMonitorClick={onMonitorClick} />
      </Float>
    </group>
  )
}

export default function ThreeDeskScene({ onMonitorClick }: { onMonitorClick: () => void }) {
  const [texture] = React.useState(() => buildCVTexture())

  return (
    <Canvas camera={{ position: [0, 0.6, 9], fov: 36 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-4, 2, -4]} intensity={0.3} color="#58A6FF" />
      <pointLight position={[0, 4, 2]} intensity={0.4} color="#7C3AED" />
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
      <DeskObjects texture={texture} onMonitorClick={onMonitorClick} />
    </Canvas>
  )
}
