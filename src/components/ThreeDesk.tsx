'use client'
import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
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
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5.4, 3.1, 0.1]} />
        <meshStandardMaterial color="#9CA3AF" metalness={0.2} roughness={0.5} />
      </mesh>

      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[5.0, 2.8]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

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
    
    // Fondo
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Configuración base
    const margin = 40
    let y = margin
    const contentWidth = canvas.width - (margin * 2)
    
    // Encabezado
    ctx.fillStyle = '#111827'
    ctx.font = 'bold 32px Inter, system-ui'
    ctx.fillText('RODOLFO ANTONIO RODRÍGUEZ QUINTERO', margin, y)
    y += 30

    // Contacto
    ctx.font = '16px Inter, system-ui'
    ctx.fillStyle = '#4B5563'
    ctx.fillText('Cel: +34 611360462 | rodolfoantoniorq@gmail.com | LinkedIn | GitHub', margin, y)
    y += 35

    // Título
    ctx.font = 'bold 20px Inter, system-ui'
    ctx.fillStyle = '#111827'
    ctx.fillText('DESARROLLADOR WEB', margin, y)
    y += 35

    // Perfil
    ctx.font = 'bold 18px Inter, system-ui'
    ctx.fillText('PERFIL', margin, y)
    y += 25
    
    const perfil = 'Desarrollador Full Stack con 2 años de experiencia en desarrollo web y móvil, con un enfoque en la integración de herramientas de IA para optimizar y acelerar los flujos de trabajo de desarrollo. Especializado en JavaScript, React, Node.js, Express.js y MongoDB, con experiencia en Python y FastAPI para el desarrollo de APIs y servicios.'
    ctx.font = '14px Inter, system-ui'
    wrapText(ctx, perfil, margin, y, contentWidth, 20)
    y += 45

    // Experiencia
    ctx.font = 'bold 18px Inter, system-ui'
    ctx.fillText('EXPERIENCIA', margin, y)
    y += 25
    
    ctx.font = 'bold 16px Inter, system-ui'
    ctx.fillText('Desarrollador Full Stack Freelance (Mar. 2023 – Actualidad)', margin, y)
    y += 20

    const experiencias = [
      '• Desarrollo de aplicaciones web responsivas utilizando React Vite, Material UI y MongoDB',
      '• Implementación de AWS Cognito User Pool para autenticación de usuarios',
      '• APIs RESTful con Python (FastAPI) y NestJS, integrando AWS Boto3',
      '• Sistemas de autenticación con OAuth 2.0 usando Passport.js',
      '• Integración con servicios AWS (Lex, Connect) para optimización de procesos'
    ]

    ctx.font = '14px Inter, system-ui'
    experiencias.forEach(exp => {
      wrapText(ctx, exp, margin, y, contentWidth, 18)
      y += 20
    })

    // Habilidades
    y += 25
    ctx.font = 'bold 18px Inter, system-ui'
    ctx.fillText('HABILIDADES TÉCNICAS', margin, y)
    y += 25

    const skills = [
      'Lenguajes: JavaScript, TypeScript, Python',
      'Frontend: React, Next.js, Material UI, Tailwind CSS',
      'Backend: Node.js, Express.js, FastAPI, NestJS',
      'Bases de Datos: MongoDB, SQL',
      'Cloud: AWS (Lex, Connect, Cognito, Boto3), Git, GitHub'
    ]

    ctx.font = '14px Inter, system-ui'
    skills.forEach(skill => {
      wrapText(ctx, '• ' + skill, margin, y, contentWidth, 18)
      y += 20
    })

    // Otras Habilidades
    y += 20
    ctx.font = 'bold 18px Inter, system-ui'
    ctx.fillText('OTRAS HABILIDADES', margin, y)
    y += 20

    const otherSkills = [
      'Prompt engineering y optimización de instrucciones para IA',
      'Desarrollo asistido por IA (GitHub Copilot)',
      'Integración de modelos de IA para optimización de procesos'
    ]

    ctx.font = '14px Inter, system-ui'
    otherSkills.forEach(skill => {
      wrapText(ctx, '• ' + skill, margin, y, contentWidth, 18)
      y += 18
    })

    // Estudios
    y += 20
    ctx.font = 'bold 18px Inter, system-ui'
    ctx.fillText('ESTUDIOS', margin, y)
    y += 20

    // Footer
    ctx.font = '14px Inter, system-ui'
    ctx.fillStyle = '#4B5563'
    wrapText(ctx, 'Formación en Desarrollo Web Full Stack – Protalento/ADA School, 2023', margin, y, contentWidth, 18)

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
