import { Suspense } from "react"
import { createRoot as myRoot } from "react-dom/client"
import { LoadGracesProvider } from "./context"
import { GlobalStyles } from "./styles"
import { MyApp } from "./_app"

myRoot(document.querySelector("#root") as HTMLDivElement).render(
  <LoadGracesProvider>
    <GlobalStyles />
    <MyApp />
  </LoadGracesProvider>
)
