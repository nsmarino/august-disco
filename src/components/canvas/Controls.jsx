import React, { useRef, useEffect } from 'react'
import { MapControls } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import useStore from '@/helpers/store'

const Controls = () => {

  const pan = useStore((state) => state.pan)

  const { camera, gl } = useThree()
  const cameraLastPosition = useRef({
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
  })

  gl.domElement.addEventListener("keydown", ()=>console.log("keydown"))
  const controls = useRef()
  useEffect(() => {
    const handleKeyDown = ()=> console.log("key down")
    console.log(controls.current)
    document.addEventListener("keydown", handleKeyDown)
  }, [])
  useFrame(() => {
    controls.current.update()
  })

  const handleChange = (e) => {
    const maxDefault = 150
    const maxX = maxDefault
    const minX = -maxDefault
    const maxY = maxDefault
    const minY = -maxDefault
    const maxZ = maxDefault
    const minZ = -maxDefault
    const x = e?.target.target.x
    const y = e?.target.target.y
    const z = e?.target.target.z

    if (x < minX || x > maxX) {
      e?.target.target.setX(x < minX ? minX : maxX)
      camera.position.setX(cameraLastPosition.current.x)
    }
    if (z < minZ || z > maxZ) {
      e?.target.target.setZ(z < minZ ? minZ : maxZ)
      camera.position.setZ(cameraLastPosition.current.z)
    }
    if (y < minY || y > maxY) {
      e?.target.target.setY(y < minY ? minY : maxY)
      camera.position.setY(cameraLastPosition.current.y)
    }
    cameraLastPosition.current.x = camera.position.x
    cameraLastPosition.current.y = camera.position.y
    cameraLastPosition.current.z = camera.position.z
  }

  return (
    <MapControls
      ref={controls}
      enablePan={pan}
      enableDamping={true}
      dampingFactor={0.1}
      enableRotate={false}
      maxZoom={2}
      minZoom={0.25}
      onChange={(e)=>handleChange(e)}
    />
  )
}

export default Controls