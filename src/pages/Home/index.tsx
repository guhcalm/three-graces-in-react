import { FC } from "react"
import { HomeScene } from "../../components"
import { useCustomContext } from "../../hooks"
import Container, { Navbar, Info, Canvas } from "./styles"

const data = {
  nav: ["ART", "ABOUT", "VISIT", "SHOP", "SEARCH"],
  title: ["The", "THREE GRACES"],
  info: `Antonio Canova' s statue The Three Graces is a Neoclassical sculpture,
    in marble, of the mythological three Charites, daughters of Zeus –
    identified on some engravings of the statue as, from left to right,
    Euphrosyne, Aglaea and Thalia – who were said to represent
    youth/beauty (Thalia), mirth (Euphrosyne), and elegance (Aglaea). The
    Graces presided over banquets and gatherings, to delight the guests of
    the gods.`
}

export default () => (
  <Container>
    <Canvas>
      <HomeScene />
    </Canvas>
    <Navbar>
      <ul>
        {data.nav.map(page => (
          <li className={page}>{page}</li>
        ))}
      </ul>
    </Navbar>
    <Info>
      <h2>{data.title[0]}</h2>
      <h1>{data.title[1]}</h1>
      <p>{data.info}</p>
    </Info>
  </Container>
)
