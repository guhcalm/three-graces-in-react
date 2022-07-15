import { ReactNode } from "react"
import { useCustomContext } from "../../hooks"
import Container from "./styles"

export default ({ children: App }: { children: ReactNode }) => {
  return <Container data-layout="">{App}</Container>
}
