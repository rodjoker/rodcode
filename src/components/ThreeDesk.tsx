'use client'
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Html } from '@react-three/drei'
import * as THREE from 'three'

/* helper para wrap text en canvas */

/* helper para wrap text en canvas */
function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.split(' ')
  let line = ''
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' '
    const metrics = ctx.measureText(testLine)
    const testWidth = metrics.width
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y)
      line = words[n] + ' '
      y += lineHeight
    } else {
      line = testLine
    }
  }
  ctx.fillText(line, x, y)
}

function Monitor({ texture }: { texture: THREE.Texture }) {
  return (
    <group position={[0, 0.8, 0]}>
      {/* Marco del monitor */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[6.4, 4.1, 0.1]} />
        <meshStandardMaterial color="#9CA3AF" metalness={0.2} roughness={0.5} />
      </mesh>

      {/* Pantalla del monitor */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[6.0, 3.8]} />
        <meshBasicMaterial 
          map={texture} 
          toneMapped={false}
        />
      </mesh>

      {/* Base del monitor */}
      <mesh position={[0, -1.8, 0]}>
        <boxGeometry args={[2.0, 0.14, 1.8]} />
        <meshStandardMaterial color="#9CA3AF" metalness={0.2} roughness={0.5} />
      </mesh>
    </group>
  )
}

function DeskObjects({ texture }: { texture: THREE.Texture }) {
  return (
    <group rotation={[0, -0.2, 0]} position={[-0.2, -0.6, 0]}>
      <Float rotationIntensity={0.2} floatIntensity={0.6}>
        <Monitor texture={texture} />
      </Float>

      <mesh position={[2.4, -1.05, -0.8]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#374151" metalness={0.3} roughness={0.4} />
      </mesh>

      <mesh position={[-2.5, -1.05, -0.7]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      <Html position={[0, -0.5, 1.2]} center>
        <div style={{ color: '#fff', fontSize: 12, padding: 6 }}>
          <strong>RodCode</strong>
        </div>
      </Html>
    </group>
  )
}

export default function ThreeDeskScene() {
  const [texture] = useState(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 2048
    canvas.height = 1152
    const ctx = canvas.getContext('2d')!

    const margin = 70
    const contentWidth = canvas.width - margin * 2
    let y = 72

    // ── Fondo blanco limpio ──────────────────────────────────────────────────
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Línea de acento superior
    ctx.fillStyle = '#111827'
    ctx.fillRect(0, 0, canvas.width, 8)

    // ── Nombre ───────────────────────────────────────────────────────────────
    ctx.fillStyle = '#111827'
    ctx.font = 'bold 46px Inter, system-ui'
    ctx.fillText('RODOLFO ANTONIO RODRÍGUEZ QUINTERO', margin, y)
    y += 38

    // Contacto
    ctx.font = '19px Inter, system-ui'
    ctx.fillStyle = '#4B5563'
    ctx.fillText('+34 611360462  ·  rodolfoantoniorq@gmail.com  ·  LinkedIn  ·  Portafolio', margin, y)
    y += 28

    // Título profesional
    ctx.font = 'bold 22px Inter, system-ui'
    ctx.fillStyle = '#2563EB'
    ctx.fillText('DESARROLLADOR FULL STACK  ·  React · Next.js · NestJS · React Native · AWS', margin, y)
    y += 22

    // Línea separadora
    ctx.fillStyle = '#E5E7EB'
    ctx.fillRect(margin, y, contentWidth, 2)
    y += 18

    // ── PERFIL ───────────────────────────────────────────────────────────────
    ctx.font = 'bold 20px Inter, system-ui'
    ctx.fillStyle = '#111827'
    ctx.fillText('PERFIL', margin, y)
    y += 24

    ctx.font = '17px Inter, system-ui'
    ctx.fillStyle = '#374151'
    const perfil = 'Desarrollador Full Stack con experiencia construyendo productos completos en producción: interfaces web, apps móviles y arquitecturas serverless en AWS. Especializado en el ecosistema JavaScript/TypeScript (React, Next.js, NestJS, React Native) y sistemas de tiempo real con WebSockets. Uso la IA como co-piloto de desarrollo para entregar código más limpio y escalable a mayor velocidad.'
    wrapText(ctx, perfil, margin, y, contentWidth, 23)
    y += 70

    // Línea separadora
    ctx.fillStyle = '#E5E7EB'
    ctx.fillRect(margin, y, contentWidth, 2)
    y += 18

    // ── HABILIDADES ──────────────────────────────────────────────────────────
    ctx.font = 'bold 20px Inter, system-ui'
    ctx.fillStyle = '#111827'
    ctx.fillText('HABILIDADES TÉCNICAS', margin, y)
    y += 24

    const skills = [
      ['Lenguajes',      'JavaScript, TypeScript, Python'],
      ['Frontend',       'React, Next.js, Tailwind CSS, Material UI'],
      ['Backend',        'Node.js, Express.js, NestJS, FastAPI'],
      ['Mobile',         'React Native, Expo'],
      ['Bases de datos', 'MongoDB, PostgreSQL, Supabase'],
      ['Cloud',          'AWS (Lambda, Cognito, S3, API Gateway, Connect), Serverless Framework'],
      ['Tiempo real',    'WebSockets, Socket.io, Redis/Upstash · Estado: Zustand'],
      ['IA & Herramientas', 'GitHub Copilot, Claude AI, Git, GitHub, Swagger'],
    ]

    ctx.font = '17px Inter, system-ui'
    skills.forEach(([label, value]) => {
      ctx.fillStyle = '#111827'
      ctx.font = 'bold 17px Inter, system-ui'
      ctx.fillText(label + ':', margin, y)
      const labelW = ctx.measureText(label + ':  ').width
      ctx.fillStyle = '#374151'
      ctx.font = '17px Inter, system-ui'
      ctx.fillText(value, margin + labelW, y)
      y += 24
    })
    y += 6

    // Línea separadora
    ctx.fillStyle = '#E5E7EB'
    ctx.fillRect(margin, y, contentWidth, 2)
    y += 18

    // ── EXPERIENCIA ──────────────────────────────────────────────────────────
    ctx.font = 'bold 20px Inter, system-ui'
    ctx.fillStyle = '#111827'
    ctx.fillText('EXPERIENCIA', margin, y)
    y += 24

    // GEMES
    ctx.font = 'bold 18px Inter, system-ui'
    ctx.fillStyle = '#111827'
    ctx.fillText('GEMES — Plataforma de Logística (Freelance)   |   Ene. 2024 – Actualidad', margin, y)
    y += 22

    const gemes = [
      '• Plataforma de 3 actores en producción: backend serverless (NestJS + AWS Lambda), backoffice React y app móvil React Native',
      '• Tiempo real con WebSockets (AWS API Gateway) + Redis — coordinación instantánea entre clientes, operadores y riders',
      '• GPS tracking en background en app móvil con notificaciones push prioritarias (Expo Notifications)',
      '• Infraestructura AWS completa: Lambda, Cognito, S3, API Gateway con Serverless Framework',
    ]
    ctx.font = '16px Inter, system-ui'
    ctx.fillStyle = '#374151'
    gemes.forEach(line => {
      wrapText(ctx, line, margin, y, contentWidth, 22)
      y += 24
    })
    y += 8

    // Freelance adicional
    ctx.font = 'bold 18px Inter, system-ui'
    ctx.fillStyle = '#111827'
    ctx.fillText('Proyectos Freelance Adicionales   |   Mar. 2023 – Actualidad', margin, y)
    y += 22

    const freelance = [
      '• Next.js + Supabase: reducción del 30% en tiempo de desarrollo con auth y BD integradas',
      '• API RESTful Python (FastAPI) + AWS Boto3 para gestión de usuarios con CRUD completo',
      '• Auth NestJS + Passport.js con OAuth 2.0 — integración segura con servicios de terceros',
    ]
    ctx.font = '16px Inter, system-ui'
    ctx.fillStyle = '#374151'
    freelance.forEach(line => {
      wrapText(ctx, line, margin, y, contentWidth, 22)
      y += 24
    })
    y += 10

    // Línea separadora
    ctx.fillStyle = '#E5E7EB'
    ctx.fillRect(margin, y, contentWidth, 2)
    y += 18

    // ── ESTUDIOS ─────────────────────────────────────────────────────────────
    ctx.font = 'bold 20px Inter, system-ui'
    ctx.fillStyle = '#111827'
    ctx.fillText('ESTUDIOS', margin, y)
    y += 24

    ctx.font = '17px Inter, system-ui'
    ctx.fillStyle = '#374151'
    ctx.fillText('Desarrollo Web Full Stack — Protalento / ADA School, 2023', margin, y)
    y += 24
    ctx.fillText('Profesional en Derecho — Universidad Arturo Michelena, 2011', margin, y)

    return new THREE.CanvasTexture(canvas)
  })

  return (
    <Canvas camera={{ position: [0, 1.6, 6], fov: 40 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <directionalLight position={[-5, 3, -5]} intensity={0.4} />
      <OrbitControls enablePan={true} enableZoom={true} />
      <DeskObjects texture={texture} />
    </Canvas>
  )
}
