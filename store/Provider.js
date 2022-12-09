import { useReducer } from "react";
import Context from "./Context";
import reducer from "./reducer"

const Provider = ({ initstates, children }) => {
  const [states, dispatch] = useReducer(reducer, initstates);

  return (
    <Context.Provider value={[states, dispatch]}>{children}</Context.Provider>
  )
}

export default Provider
