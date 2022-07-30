import { useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Fog, Vector3 } from "three"
import {
  BridgeProvider,
  useBridgeContext,
  useLoadtGracesContext
} from "../../context"
import { Graces } from "./Graces"

const Model = () => {
  const { state } = useBridgeContext()
  const { model, grace } = state
  const [path, setPath] = useState({
    current: { camera: new Vector3(), lookAt: new Vector3() },
    target: Graces.Aglaea
  })
  useEffect(() => setPath(hid => ({ ...hid, target: Graces[grace] })), [grace])
  useFrame(({ camera }) =>
    setPath(hid => {
      if (JSON.stringify(hid.current) === JSON.stringify(hid.target)) return hid
      const { current, target } = hid
      current.camera.lerp(target.camera, 0.05)
      current.lookAt.lerp(target.lookAt, 0.05)
      camera.position.copy(current.camera)
      camera.lookAt(current.lookAt)
      return hid
    })
  )
  return (
    <group>
      <group scale={1.5}>
        <primitive object={model} name="model" />
      </group>
      <pointLight
        args={["white", 2, 30, 30]}
        position={[0, 0, -2]}
        castShadow
      />
      <pointLight position={[-5, 0, 1]} decay={20} castShadow />
    </group>
  )
}

export default () => (
  <Canvas
    gl={{
      antialias: false,
      powerPreference: "high-performance",
      stencil: false,
      alpha: true
    }}
    onCreated={({ camera, gl, scene }) => {
      camera.position.set(0, 0, 5)
      camera.lookAt(0, 0, 0)
      camera.near = 0.1
      camera.far = 15
      gl.setPixelRatio(Math.min(devicePixelRatio, 2) * 0.9)
      scene.fog = new Fog("black", 0, 15)
    }}
  >
    <BridgeProvider value={useLoadtGracesContext()}>
      <Model />
    </BridgeProvider>
  </Canvas>
)
