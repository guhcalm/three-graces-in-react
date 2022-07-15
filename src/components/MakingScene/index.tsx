import { FC, Suspense, useEffect, useRef } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { sRGBEncoding, ACESFilmicToneMapping, Group, Vector3 } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { useLoadModel } from "../../hooks"

const Euphere = {
  lookAt: new Vector3(
    1.463857397681405,
    0.7472196560156306,
    -2.899828167305814
  ),
  normal: new Vector3(
    -0.5397508396168003,
    0.501085047163721,
    -1.6009055130380494
  ),
  camera: []
}

const Model = () => {
  const { model } = useLoadModel()
  const modelRef = useRef<Group>()
  return (
    <>
      <group ref={modelRef} scale={1.5}>
        <primitive
          object={model}
          scale=".1"
          position={[-3.5, -10.5, 0]}
          name="model"
        />
      </group>
      <pointLight args={["white", 2, 30, 30]} position={[0, 0, 1]} />
      <pointLight position={[-5, 5, 5]} args={["white", 1, 30, 30]} />
    </>
  )
}

const Scene = () => {
  const { camera, gl } = useThree()
  useEffect(() => {
    new OrbitControls(camera, gl.domElement).update()
    camera.position.copy(Euphere.camera)
    camera.lookAt.copy(Euphere.lookAt)
    camera.near = 0
    gl.outputEncoding = sRGBEncoding
    gl.toneMapping = ACESFilmicToneMapping
    gl.toneMappingExposure = 1
    gl.setPixelRatio(devicePixelRatio)
    gl.shadowMap.enabled = true
  }, [])
  return <Model />
}

export default (() => (
  <Suspense>
    <Canvas gl={{ antialias: true }}>
      <Scene />
    </Canvas>
  </Suspense>
)) as FC
