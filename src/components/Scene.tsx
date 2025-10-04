import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'

function Modelo() {
  const gltf = useGLTF('/models/modelo.glb')
  return <primitive object={gltf.scene} />
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <Modelo />
    </Canvas>
  )
}
