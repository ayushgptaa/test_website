import Heading from 'components/Heading'
import ReadingSlider from './AdditionalReading/ReadingSlider'
import IconContainer from './IconContainer'
import styles from './WhitepaperComponent.module.scss'

const WhitepaperComponent = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <Heading text="whitepapers" uppercase />
        <IconContainer />
      </main>
      <section className={styles.sectionContainer}>
        <h2 className={styles.heading}>Additional Reading</h2>
        <ReadingSlider />
      </section>
    </>
  )
}

export default WhitepaperComponent
