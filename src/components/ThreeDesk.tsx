'use client'
import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Float, Html } from '@react-three/drei'
import * as THREE from 'three'

function ResumeTexture({ width = 1024, height = 576 }: { width?: number, height?: number }) {
  const [texture] = useState(() => new THREE.CanvasTexture(document.createElement('canvas')))
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    canvasRef.current = canvas
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Estilos base
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, width, height)
    ctx.fillStyle = '#0f172a'
    ctx.font = '28px Inter, Roboto, monospace'
    ctx.textBaseline = 'top'

    // Cabecera
    ctx.fillStyle = '#0b1220'
    ctx.font = 'bold 36px Inter, Roboto, sans-serif'
    ctx.fillText('Rodolfo Rodriguez — RodCode', 40, 36)

    // Subtitulo
    ctx.font = '18px Inter, Roboto, sans-serif'
    ctx.fillStyle = '#0b1220'
    ctx.fillText('Programador Web FullStack', 40, 80)

    // Secciones: resumen breve y bullets
    ctx.font = '16px Inter, Roboto, monospace'
    const leftX = 40
    let y = 130
    const lineHeight = 22

    const summary =
      'FullStack developer especializado en React, Next.js, Three.js, Node.js, Python y despliegues en AWS y Google Cloud.'
    wrapText(ctx, summary, leftX, y, width - 80, lineHeight)
    y += 3 * lineHeight

    const bullets = [
      'Frontend: React · Next.js · Tailwind CSS · TypeScript',
      'Backend: Node.js · Express · NestJS · Python · FastAPI',
      'Cloud: AWS · Google Cloud · Salesforce · Amazon Connect',
      'Databases: MongoDB · PostgreSQL · Supabase',
    ]
    bullets.forEach((b) => {
      ctx.fillText('• ' + b, leftX, y)
      y += lineHeight
    })

    // Footer: contacto
    y = height - 72
    ctx.font = '14px Inter, Roboto, monospace'
    ctx.fillStyle = '#0369a1'
    ctx.fillText('Contacto: rodcode@example.com · GitHub: github.com/rodcode', leftX, y)

    // Actualiza la textura
    texture.image = canvas
    texture.needsUpdate = true
  }, [texture, width, height])

  // exposa la textura al resto de la escena
  return (
    // usamos Html para mostrar un fallback accesible encima si WebGL no está disponible
    <primitive object={texture} attach="map" />
  )
}

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
        <meshStandardMaterial color="#0b1220" metalness={0.2} roughness={0.3} />
      </mesh>

      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[5.0, 2.8]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      <mesh position={[0, -1.8, 0]}>
        <boxGeometry args={[2.0, 0.14, 1.8]} />
        <meshStandardMaterial color="#111827" />
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
        <meshStandardMaterial color="#06b6d4" metalness={0.3} roughness={0.4} />
      </mesh>

      <mesh position={[-2.5, -1.05, -0.7]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
        <meshStandardMaterial color="#f97316" />
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
  // create a canvas texture using the same code used above
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 576
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#0b1220'
  ctx.font = 'bold 36px Inter, sans-serif'
  ctx.fillText('Rodolfo Rodriguez — RodCode', 40, 36)
  ctx.font = '18px Inter, sans-serif'
  ctx.fillText('Programador Web FullStack', 40, 80)
  ctx.font = '16px monospace'
  ctx.fillText('Frontend: React · Next.js · Three.js · TypeScript', 40, 140)
  ctx.fillText('Backend: Node.js · Express · NestJS · Python · FastAPI', 40, 170)
  ctx.fillText('Cloud: AWS · Google Cloud · Salesforce · Amazon Connect', 40, 200)
  ctx.fillText('Databases: MongoDB · PostgreSQL · Supabase', 40, 230)
  ctx.font = '14px monospace'
  ctx.fillStyle = '#0369a1'
  ctx.fillText('Contacto: rodcode@example.com · GitHub: github.com/rodcode', 40, 520)

  const resumeTexture = new THREE.CanvasTexture(canvas)
  resumeTexture.needsUpdate = true

  return (
    <Canvas camera={{ position: [0, 1.6, 6], fov: 40 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <directionalLight position={[-5, 3, -5]} intensity={0.4} />
      <OrbitControls enablePan={true} enableZoom={true} />
      <DeskObjects texture={resumeTexture} />
    </Canvas>
  )
}
