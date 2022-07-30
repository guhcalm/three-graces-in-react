import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Mesh, BackSide, Color } from "three"
import {
  BridgeProvider,
  useBridgeContext,
  useLoadtGracesContext
} from "../../context"

const Model = () => {
  const lightRef = useRef<Mesh>(null!)
  useFrame(({ raycaster, mouse, camera }) => {
    raycaster.setFromCamera(mouse, camera)
    const path = raycaster.ray.direction
      .multiplyScalar(Math.min(Math.abs(mouse.x) + Math.abs(mouse.y) + 4, 5.5))
      .add(camera.position)
    lightRef.current?.position.lerp(path, 0.05)
  })
  return (
    <group>
      <group scale={0.12}>
        <primitive object={useBridgeContext().state.model.clone()} />
      </group>
      <pointLight ref={lightRef} args={["white", 1, 20, 40]} castShadow />
      <mesh>
        <sphereGeometry args={[1.2]} />
        <meshStandardMaterial
          color="rgb(0,0,2)"
          roughness={0.5}
          metalness={0}
          side={BackSide}
        />
      </mesh>
    </group>
  )
}

export default () => (
  <Canvas
    gl={{
      antialias: false,
      powerPreference: "high-performance",
      stencil: false,
      logarithmicDepthBuffer: true,
      alpha: false
    }}
    camera={{ fov: 10 }}
    onCreated={({ camera, gl, scene }) => {
      camera.position.set(0, 0, 5)
      camera.lookAt(0, 0, 0)
      camera.near = 0.1
      camera.far = 15
      gl.setPixelRatio(Math.min(devicePixelRatio, 2) * 0.9)
      scene.background = new Color("rgb(2,2,2)")
    }}
  >
    <BridgeProvider value={useLoadtGracesContext()}>
      <Model />
    </BridgeProvider>
  </Canvas>
)
