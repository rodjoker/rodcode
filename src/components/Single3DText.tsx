'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei'

interface Single3DTextProps {
  text: string
  height?: string
  backgroundColor?: string
}

function Text3DObject({ text }: { text: string }) {
  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
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
  color="#F3F4F6"
  metalness={0.6}
  roughness={0.25}
  emissive="#FFFFFF"
  emissiveIntensity={0.25}
/>

        </Text3D>
      </Center>
    </Float>
  )
}

function Single3DText({ text, height = "25vh", backgroundColor = "#000000" }: Single3DTextProps) {
  return (
    <div className={`w-full bg-transparent`} style={{ height }}>
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 50,
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={[backgroundColor]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.15}
          penumbra={1}
          intensity={0.5}
        />

        <Text3DObject text={text} />

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

export default Single3DText