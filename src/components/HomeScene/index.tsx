import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshStandardMaterial, Mesh, BackSide } from "three"
import { useCustomContext, useSetupScene } from "../../hooks"
import { BridgeProvider, useBridgeContext } from "../../context"

const sceneMaterial = new MeshStandardMaterial({
  color: "rgb(0,0,2)",
  roughness: 0.5,
  metalness: 0,
  side: BackSide
})

const Model = () => {
  const { model } = useBridgeContext().state
  const lightRef = useRef<Mesh>(null!)
  useFrame(({ raycaster, mouse, camera }) => {
    raycaster.setFromCamera(mouse, camera)
    const path = raycaster.ray.direction
      .multiplyScalar(Math.min(Math.abs(mouse.x) + Math.abs(mouse.y) + 4, 5.5))
      .add(camera.position)
    lightRef.current?.position.lerp(path, 0.05)
  })
  return (
    <>
      <group scale={0.12}>
        <primitive object={model.clone()} />
      </group>
      <pointLight
        ref={lightRef}
        args={["white", 1, 20, 40]}
        castShadow
        position={[10, 5, 2]}
      />
      <mesh material={sceneMaterial}>
        <sphereGeometry args={[1.2]} />
      </mesh>
    </>
  )
}

const Scene = () => {
  useSetupScene()
  return <Model />
}

export default () => (
  <Canvas
    gl={{ antialias: true, powerPreference: "high-performance" }}
    camera={{ fov: 10 }}
  >
    <BridgeProvider value={useCustomContext()}>
      <Scene />
    </BridgeProvider>
  </Canvas>
)
