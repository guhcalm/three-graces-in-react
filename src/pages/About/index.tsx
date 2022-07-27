import { AboutScene } from "../../components"
import { useCustomContext } from "../../hooks"
import Container, { Info, ReadMore } from "./styles"

const data = {
  graces: {
    Aglaea: `Aglace is the Greek goddess of beauty, splendor, glory and magnificence. She is the youngest of the Charites according to Hesiod. Aglaea is one of three daughters of Zeus and either the Oceanid Eurynome, or of Eunomia, the goddess of good order and lawful conduct.`,
    Thalia: `Thalia, in Greek religion, one of the nine Muses, patron of comedy; also, according to the Greek poet Hesiod, a Grace (one of a group of goddesses of fertility). She is the mother of the Corybantes, celebrants of the Great Mother of the Gods, Cybele, the father being Apollo, a god related to music and dance. In her hands she carried the comic mask and the shepherd’s staff.`,
    Euphere: `Euphrosyne is a Goddess of Good Cheer, Joy and Mirth. Her name is the female version of a Greek word euphrosynos, which means "merriment". The Greek poet Pindar states that these goddesses were created to fill the world with pleasant moments and good will. Usually the Charites attended the goddess of beauty Aphrodite.`
  }
}

export default () => {
  const { state, dispatch, actions } = useCustomContext()
  const { grace } = state
  const onClick = ({ target }) => dispatch(actions.setGrace(target.id))
  return (
    <Container>
      <Info>
        <ul className={grace}>
          {Object.entries(data.graces).map(([name]) => (
            <li
              key={name}
              id={name}
              onClick={onClick}
              className={grace === name ? "active" : ""}
            >
              {name}
            </li>
          ))}
        </ul>
        <p>{data.graces[grace]}</p>
        <ReadMore type="button">READ MORE</ReadMore>
      </Info>
      <div>
        <AboutScene />
      </div>
    </Container>
  )
}
