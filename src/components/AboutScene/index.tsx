import { FC, Suspense, useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  sRGBEncoding,
  ACESFilmicToneMapping,
  Group,
  Vector3,
  DataTexture3D
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { useLoadModel } from "../../hooks"

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

const Model = ({ data }) => {
  const { model } = useLoadModel()
  const modelRef = useRef<Group>()
  const [path, setPath] = useState({
    current: { camera: new Vector3(0, 0, 5), lookAt: new Vector3() },
    target: Graces.Euphere
  })
  useEffect(() => {
    setPath(current => ({ ...current, target: Graces[data] }))
  }, [data])
  useFrame(({ camera }) => {
    setPath(current => {
      if (JSON.stringify(current.current) === JSON.stringify(current.target))
        return current
      current.current.camera.lerp(current.target.camera, 0.05)
      current.current.lookAt.lerp(current.target.lookAt, 0.05)
      return current
    })
    camera.position.copy(path.current.camera)
    camera.lookAt(path.current.lookAt)
  })
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
      <pointLight
        args={["white", 2, 30, 30]}
        position={[0, 0, -2]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight
        position={[-5, 0, 1]}
        decay={20}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  )
}

const Scene = ({ data }) => {
  const { camera, gl } = useThree()
  useEffect(() => {
    new OrbitControls(camera, gl.domElement).update()
    camera.near = 0
    gl.outputEncoding = sRGBEncoding
    gl.toneMapping = ACESFilmicToneMapping
    gl.toneMappingExposure = 1
    gl.setPixelRatio(devicePixelRatio)
    gl.shadowMap.enabled = true
  }, [])
  return <Model data={data} />
}

export default (({ data }) => (
  <Suspense>
    <Canvas gl={{ antialias: true }}>
      <Scene data={data} />
    </Canvas>
  </Suspense>
)) as FC
