import { useEffect, useState } from "react"
import { Group, MeshPhysicalMaterial } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default () => {
  const [ThreeGraces, setThreeGraces] = useState(new Group())
  useEffect(() => {
    new GLTFLoader().load("./assets/model/scene.gltf", ({ scene }) => {
      scene.traverse(object => {
        if (object.isMesh === false) return
        object.castShadow = true
        object.receiveShadow = true
        object.material = new MeshPhysicalMaterial({
          color: "white",
          roughness: 0,
          metalness: 0
        })
      })
      setThreeGraces(scene)
    })
  }, [])
  return { model: ThreeGraces }
}
