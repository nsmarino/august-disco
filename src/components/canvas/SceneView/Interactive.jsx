import { useRef, useState } from "react"
import { useFrame } from '@react-three/fiber'

export default function Interactive({ interactive }) {
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)

  useFrame((state, delta) =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
  )

  return (
    <>
      <mesh
        ref={mesh}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
        position={[-2,1,0]}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color={"blue"} />
      </mesh>
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </>
  )
}