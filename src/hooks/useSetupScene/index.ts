import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { ACESFilmicToneMapping, sRGBEncoding } from "three"

export default () => {
  const { camera, gl } = useThree()
  useEffect(() => {
    camera.position.set(0, 0, 5)
    camera.lookAt(0, 0, 0)
    camera.near = 0
    camera.far = 15
    gl.outputEncoding = sRGBEncoding
    gl.toneMapping = ACESFilmicToneMapping
    gl.toneMappingExposure = 1.5
    gl.setPixelRatio(Math.min(devicePixelRatio, 2) * 0.9)
    gl.shadowMap.enabled = true
  }, [])
}
