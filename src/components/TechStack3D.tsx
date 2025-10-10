'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei'


function Tech3DText({ text, position = [0, 0, 0] }: { text: string, position?: [number, number, number] }) {
  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
      position={position}
    >
      <Center scale={[1.2, 1.2, 1.2]}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={1.2}
          height={0.4}
          curveSegments={16}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.04}
          bevelOffset={0}
          bevelSegments={5}
          letterSpacing={0.1}
        >
          {text}
          <meshStandardMaterial
            color="#E5E7EB"
            metalness={0.9}
            roughness={0.1}
            emissive="#D1D5DB"
            emissiveIntensity={0.3}
          />
        </Text3D>
      </Center>
    </Float>
  )
}

function TechStack3D() {
  const techs = [
    { name: 'Next.js', position: [-15, 0, 0] as [number, number, number] },
    { name: 'React', position: [-7.5, 0, 0] as [number, number, number] },
    { name: 'JavaScript', position: [0, 0, 0] as [number, number, number] },
    { name: 'AWS', position: [7.5, 0, 0] as [number, number, number] },
    { name: 'Salesforce', position: [15, 0, 0] as [number, number, number] },
  ]

  return (
    <div className="w-full h-[25vh] bg-transparent">
      <Canvas
        camera={{
          position: [0, 0, 12],
          fov: 50,
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.15}
          penumbra={1}
          intensity={0.5}
        />

        {techs.map((tech) => (
          <Tech3DText key={tech.name} text={tech.name} position={tech.position} />
        ))}

        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default TechStack3D