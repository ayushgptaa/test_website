import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import ReadingSlider from './AdditionalReading/ReadingSlider'
import IconContainer from './IconContainer'

import styles from './WhitepaperComponent.module.scss'

const WhitepaperComponent = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <Heading text="Whitepapers" />
        <IconContainer />
      </main>
      <section className={styles.sectionContainer}>
        <Fade triggerOnce>
          <h2 className={styles.heading}>Additional Reading</h2>
          <ReadingSlider />
        </Fade>
      </section>
    </>
  )
}

export default WhitepaperComponent
