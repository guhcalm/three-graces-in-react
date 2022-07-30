import { useEffect } from "react"
import { Mesh, MeshLambertMaterial, MeshStandardMaterial } from "three"
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
      .load("./assets/model/graces.glb", ({ scene }) => {
        scene.traverse(object => {
          if (!(object instanceof Mesh)) return
          object.matrixAutoUpdate = false
          object.castShadow = false
          object.receiveShadow = false
          object.material.dispose()
          object.material = new MeshStandardMaterial({
            color: "white",
            roughness: 0.9,
            metalness: 0.5
          })
        })
        scene.position.set(-0.2, -2.23, -1.9)
        dispatch(actions.loadModel(scene))
      })
  }, [])
}
