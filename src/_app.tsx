import { Layout } from "./components"
import { useLoadModel } from "./hooks"
import { Home, About } from "./pages"

export const MyApp = () => {
  useLoadModel()
  return (
    <Layout>
      <Home />
      <About />
    </Layout>
  )
}
