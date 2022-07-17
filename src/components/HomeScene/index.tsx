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
      .multiplyScalar(Math.min(2 * Math.abs(mouse.x) + 4, 5.5))
      .add(camera.position)
    lightRef.current?.position.lerp(path, 0.2)
  })
  return (
    <>
      <group ref={modelRef} scale={0.12}>
        <primitive object={model} scale=".1" position={[-3.5, -10.5, 0]} />
      </group>
      <pointLight
        ref={lightRef}
        args={["white", 2, 20, 30]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
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
    gl.outputEncoding = sRGBEncoding
    gl.toneMapping = ACESFilmicToneMapping
    gl.toneMappingExposure = 1
    gl.setPixelRatio(devicePixelRatio)
    gl.shadowMap.enabled = true
    scene.fog = new Fog("black", 0, 10)
  }, [])
  return <Model />
}

export default (() => (
  <Suspense>
    <Canvas gl={{ antialias: true }} camera={{ fov: 10 }}>
      <Scene />
    </Canvas>
  </Suspense>
)) as FC
