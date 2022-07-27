import { useContext } from "react"
import { LoadGracesContext, actions } from "../../context"

export default () => {
  const [state, dispatch] = useContext(LoadGracesContext)
  return { state, dispatch, actions }
}
