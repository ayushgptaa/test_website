import { Fade } from 'react-awesome-reveal'

import Paragraph from 'components/Paragraph'

import styles from './MainFeature.module.scss'

const MainFeature = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.bgPatternLeft} />
        <div className={styles.bgPatternRight} />
        <Fade direction="up" cascade duration={800} fraction={0.8} triggerOnce>
          <h2 className={styles.heading}>
            Lightning Fast. Decentralized. Storage.
          </h2>
          <Paragraph>
            The Züs Cloud Network is a hyper-speed data storage network. Enabled
            by a cutting-edge storage protocol; secured by a novel layer 1
            blockchain.
          </Paragraph>
        </Fade>
      </div>
    </section>
  )
}

export default MainFeature
