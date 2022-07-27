import { useEffect } from "react"
import { Mesh, MeshStandardMaterial } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { useCustomContext } from ".."

export default () => {
  const { dispatch, actions } = useCustomContext()
  useEffect(() => {
    new GLTFLoader()
      .setDRACOLoader(
        new DRACOLoader()
          .setDecoderPath("https://www.gstatic.com/draco/v1/decoders/")
          .setDecoderConfig({ type: "js" })
      )
      .load("./assets/model/scene.gltf", ({ scene }) => {
        scene.traverse(object => {
          if (!(object instanceof Mesh)) return
          object.matrixAutoUpdate = false
          object.castShadow = false
          object.receiveShadow = false
          object.material.dispose()
          object.material = new MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0
          })
        })
        scene.scale.set(0.1, 0.1, 0.1)
        scene.position.set(-3.5, -10.5, 0)
        dispatch(actions.loadModel(scene))
      })
  }, [])
}
