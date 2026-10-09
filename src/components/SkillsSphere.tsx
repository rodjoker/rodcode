'use client'
import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import { skills, categoryColors } from './skillsData'

function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = golden * i
    points.push(new THREE.Vector3(
      Math.cos(theta) * r * radius,
      y * radius,
      Math.sin(theta) * r * radius
    ))
  }
  return points
}

function SkillTag({ position, skill }: { position: THREE.Vector3; skill: typeof skills[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Html position={position} center zIndexRange={[0, 10]}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: '4px 12px',
          borderRadius: '999px',
          background: hovered ? `${skill.color}22` : 'rgba(13,17,23,0.75)',
          border: `1px solid ${hovered ? skill.color : skill.color + '55'}`,
          color: hovered ? skill.color : '#C9D1D9',
          fontSize: '12px',
          fontWeight: hovered ? 700 : 500,
          fontFamily: 'Inter, system-ui, sans-serif',
          whiteSpace: 'nowrap',
          cursor: 'default',
          transition: 'all 0.25s ease',
          transform: hovered ? 'scale(1.2)' : 'scale(1)',
          backdropFilter: 'blur(6px)',
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: hovered ? `0 0 12px ${skill.color}44` : 'none',
        }}
      >
        <span style={{
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: skill.color,
          flexShrink: 0,
          boxShadow: `0 0 6px ${skill.color}`,
        }} />
        {skill.name}
      </div>
    </Html>
  )
}

function Particles() {
  const count = 180
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.5 + Math.random() * 4
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#58A6FF" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function SphereScene() {
  const groupRef = useRef<THREE.Group>(null)
  const positions = useMemo(() => fibonacciSphere(skills.length, 3.0), [])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += 0.0015
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08
  })

  return (
    <>
      <Particles />
      <group ref={groupRef}>
        {/* Esfera wireframe sutil */}
        <mesh>
          <sphereGeometry args={[3.0, 18, 18]} />
          <meshBasicMaterial color="#1e3a5f" wireframe transparent opacity={0.12} />
        </mesh>

        {skills.map((skill, i) => (
          <SkillTag key={skill.name} position={positions[i]} skill={skill} />
        ))}
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate={false}
      />
    </>
  )
}

export default function SkillsSphere() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Leyenda */}
      <div className="flex flex-wrap justify-center gap-4 mb-4 px-4">
        {Object.entries(categoryColors).map(([cat, color]) => (
          <div key={cat} className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
            {cat}
          </div>
        ))}
      </div>

      {/* Canvas 3D */}
      <div className="w-full" style={{ height: '55vh' }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} />
          <pointLight position={[-5, -5, -5]} intensity={0.3} color="#58A6FF" />
          <SphereScene />
        </Canvas>
      </div>

      <p className="text-xs text-gray-600 mt-2">Arrastra para explorar · Hover para resaltar</p>
    </div>
  )
}
