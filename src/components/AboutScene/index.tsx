import { useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import { useCustomContext, useSetupScene } from "../../hooks"
import { BridgeProvider, useBridgeContext } from "../../context"

const Graces = {
  Aglaea: {
    lookAt: new Vector3(
      -1.45568164297599,
      1.0444831403047026,
      -1.7386373643011563
    ),
    camera: new Vector3(
      1.8248980868051587,
      1.8617581461110024,
      -0.8331771490330537
    )
  },
  Thalia: {
    lookAt: new Vector3(
      -0.948630257329178,
      1.2144656583626912,
      -2.3645079129428073
    ),
    camera: new Vector3(
      -1.1302020853724541,
      1.231926905264657,
      1.6313307695014245
    )
  },
  Euphere: {
    lookAt: new Vector3(
      1.463857397681405,
      0.7472196560156306,
      -2.899828167305814
    ),
    camera: new Vector3(
      -1.8748439328218733,
      0.3370746332716125,
      -0.735375699356021
    )
  }
}

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
    <>
      <group scale={1.5}>
        <primitive object={model.clone()} name="model" />
      </group>
      <pointLight
        args={["white", 2, 30, 30]}
        position={[0, 0, -2]}
        castShadow
      />
      <pointLight position={[-5, 0, 1]} decay={20} castShadow />
    </>
  )
}

const Scene = () => {
  useSetupScene()
  return <Model />
}

export default () => (
  <Canvas gl={{ antialias: true, powerPreference: "high-performance" }}>
    <BridgeProvider value={useCustomContext()}>
      <Scene />
    </BridgeProvider>
  </Canvas>
)
