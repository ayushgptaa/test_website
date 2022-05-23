import Heading from 'components/Heading'
import { Fade } from 'react-awesome-reveal'
import ReadingSlider from './AdditionalReading/ReadingSlider'
import IconContainer from './IconContainer'
import styles from './WhitepaperComponent.module.scss'

const WhitepaperComponent = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <Fade>
          <Heading text="whitepapers" uppercase />
          <IconContainer />
        </Fade>
      </main>
      <section className={styles.sectionContainer}>
        <Fade>
          <h2 className={styles.heading}>Additional Reading</h2>
          <ReadingSlider />
        </Fade>
      </section>
    </>
  )
}

export default WhitepaperComponent
