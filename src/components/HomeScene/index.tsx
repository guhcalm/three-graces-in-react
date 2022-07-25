import { FC, Suspense, useEffect, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  sRGBEncoding,
  MeshStandardMaterial,
  Mesh,
  ACESFilmicToneMapping,
  BackSide,
  Group,
  Fog
} from "three"
import { useLoadModel } from "../../hooks"

const sceneMaterial = new MeshStandardMaterial({
  color: "rgb(0,0,2)",
  roughness: 0.5,
  metalness: 0,
  side: BackSide
})

const Model = () => {
  const { model } = useLoadModel()
  const lightRef = useRef<Mesh>()
  const modelRef = useRef<Group>()
  useFrame(({ raycaster, mouse, camera }) => {
    raycaster.setFromCamera(mouse, camera)
    const { direction } = raycaster.ray
    const path = direction
      .multiplyScalar(Math.min(Math.abs(mouse.x) + Math.abs(mouse.y) + 4, 5.5))
      .add(camera.position)
    lightRef.current?.position.lerp(path, 0.2)
  })
  return (
    <>
      <group ref={modelRef} scale={0.12}>
        <primitive object={model} scale=".1" position={[-3.5, -10.5, 0]} />
      </group>
      <pointLight ref={lightRef} args={["white", 3, 20, 40]} castShadow />
      <mesh material={sceneMaterial}>
        <sphereGeometry args={[1.2]} />
      </mesh>
    </>
  )
}

const Scene = () => {
  const { scene, camera, gl } = useThree()
  useEffect(() => {
    camera.position.set(0, 0, 5)
    camera.lookAt(0, 0, 0)
    camera.near = 2
    camera.far = 15
    gl.outputEncoding = sRGBEncoding
    gl.toneMapping = ACESFilmicToneMapping
    gl.toneMappingExposure = 1
    gl.setPixelRatio(Math.min(devicePixelRatio, 2) * 0.9)
    gl.shadowMap.enabled = true
    scene.fog = new Fog("black", 0, 10)
  }, [])
  return <Model />
}

export default (() => (
  <Suspense>
    <Canvas
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ fov: 10 }}
    >
      <Scene />
    </Canvas>
  </Suspense>
)) as FC
