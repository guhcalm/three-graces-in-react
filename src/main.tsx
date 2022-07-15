import { createRoot as myRoot } from "react-dom/client"
import { GlobalStyles } from "./styles"
import { MyApp } from "./_app"

myRoot(document.querySelector("#root") as HTMLDivElement).render(
  <>
    <GlobalStyles />
    <MyApp />
  </>
)
