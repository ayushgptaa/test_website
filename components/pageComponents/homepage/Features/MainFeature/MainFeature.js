import { Fade } from 'react-awesome-reveal'

import Paragraph from 'components/Paragraph'

import styles from './MainFeature.module.scss'

const MainFeature = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.bgPatternLeft} />
        <div className={styles.bgPatternRight} />
        <Fade
          direction="up"
          cascade
          duration={800}
          fraction={0.5}
          damping={0.2}
          triggerOnce>
          <h2 className={styles.heading}>
            Lightning Fast. Decentralized. Storage.
          </h2>
          <Paragraph>
            With the power of ZUS at your fingertips, you have limitless
            possibilities. Our reliable decentralized cloud solution for all
            types-of rich media can gain back control over your data at
            lightning speeds.
          </Paragraph>
        </Fade>
      </div>
    </section>
  )
}

export default MainFeature
