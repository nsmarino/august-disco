import useStore from '@/helpers/store'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

const DialogueTrigger = ({ dialogue }) => {
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)
  return (
    <>
      <mesh
        ref={mesh}
        onClick={() => console.log(dialogue)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.5 : 1}
        rotation={[Math.PI / 4, Math.PI / 4, 0]}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color='orange' />
      </mesh>
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </>
  )
}
export default DialogueTrigger
