import { createContext, ReactNode, useContext, useReducer } from "react"
import { Group } from "three"

const initialState = {
  model: new Group(),
  grace: "Aglaea"
}

const reducer = (state, { type, payload }) =>
  ({
    LOAD_MODEL: { ...state, model: payload },
    SET_GRACE: { ...state, grace: payload }
  }[type])

export const actions = {
  loadModel: (payload: Group) => ({ type: "LOAD_MODEL", payload }),
  setGrace: (payload: string) => ({ type: "SET_GRACE", payload })
}

const LoadGracesContext = createContext<any>(null)
export const useLoadtGracesContext = () => useContext(LoadGracesContext)
export const LoadGracesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <LoadGracesContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </LoadGracesContext.Provider>
  )
}

const BridgeContext = createContext<any>(null)
export const useBridgeContext = () => useContext(BridgeContext)
export const BridgeProvider = ({ value, children }) => (
  <BridgeContext.Provider value={value}>{children}</BridgeContext.Provider>
)
