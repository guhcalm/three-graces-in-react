import { useEffect, useState } from "react"
import { Group, MeshPhysicalMaterial } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

export default () => {
  const [ThreeGraces, setThreeGraces] = useState(new Group())
  useEffect(() => {
    new GLTFLoader()
      .setDRACOLoader(
        new DRACOLoader()
          .setDecoderPath("/draco/")
          .setDecoderConfig({ type: "js" })
      )
      .load("./assets/model/scene.gltf", ({ scene }) => {
        scene.traverse(object => {
          if (object.isMesh === false) return
          object.castShadow = false
          object.receiveShadow = false
          object.material = new MeshPhysicalMaterial({
            color: "white",
            roughness: 1
          })
        })
        setThreeGraces(scene)
      })
  }, [])
  return { model: ThreeGraces }
}
