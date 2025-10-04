'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

function FloatingCode() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Code snippets to display
  const codeSnippets = [
    `function RodCode() {
  return "FullStack Dev"
}`,
    `const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "AWS",
  "Salesforce"
]`,
    `// Build awesome
// 3D experiences
render(<App />)`
  ];
  
  const [currentSnippet, setCurrentSnippet] = useState(0);
  
  // Cambiar el snippet de código cada rotación completa (aproximadamente)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 6000); // Ajustado para coincidir mejor con la rotación
    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    const rotation = meshRef.current.rotation.y % (Math.PI * 2);
    // Cuando las letras están al revés (entre 90° y 270°)
    if (rotation > Math.PI/2 && rotation < Math.PI * 1.5) {
      meshRef.current.rotation.y += 0.02; // Giro más rápido cuando no es visible
    } else {
      meshRef.current.rotation.y += 0.005; // Giro más lento cuando es legible
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0}
      floatIntensity={2}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 0, 0]}
      >
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial 
          color={hovered ? "#9CA3AF" : "#374151"}
          metalness={0.6}
          roughness={0.2}
        />
        <Html
          transform
          distanceFactor={10}
          position={[0, 0, 0.06]}
          style={{
            width: '280px',
            height: '180px',
            background: 'rgba(0,0,0,0.8)',
            padding: '20px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <pre
            style={{
              margin: 0,
              color: '#fff',
              fontFamily: 'monospace',
              fontSize: '14px',
              textAlign: 'left',
              whiteSpace: 'pre-wrap'
            }}
          >
            {codeSnippets[currentSnippet]}
          </pre>
        </Html>
      </mesh>
    </Float>
  );
}

export default function ThreeHero() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.6} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate
        autoRotateSpeed={1}
      />
      <FloatingCode />
    </Canvas>
  );
}
