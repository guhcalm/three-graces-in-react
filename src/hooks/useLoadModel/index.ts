import { useEffect, useState } from "react"
import { Group, Mesh, MeshStandardMaterial } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

let model
new GLTFLoader()
  .setDRACOLoader(
    new DRACOLoader()
      .setDecoderPath("/examples/js/libs/draco/")
      .setDecoderConfig({ type: "js" })
  )
  .load("./assets/model/scene.gltf", ({ scene }) => {
    scene.traverse(object => {
      if (!(object instanceof Mesh)) return
      object.castShadow = false
      object.receiveShadow = false
      object.material.dispose()
      object.material = new MeshStandardMaterial({
        color: "white",
        roughness: 1,
        metalness: 0
      })
    })
    model = scene
  })
export default () => {
  const [ThreeGraces, setThreeGraces] = useState(new Group())
  useEffect(() => {}, [])
  return { model: ThreeGraces }
}
