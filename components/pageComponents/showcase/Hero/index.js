import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import SocialIcons from 'components/SocialIcons'
import GetNotified from 'components/GetNotified'

import styles from './index.module.scss'

const Hero = () => {
  return (
    <main className={styles.rootContainer}>
      <div className={styles.backgroundImg} />

      <div className={styles.heroBackground} />

      <Fade duration={800} direction="up" triggerOnce>
        <Heading
          text="This content is being streamed from ZCN dstorage"
          withoutPeriod
        />
      </Fade>

      <div className={styles.mainTextContent}>
        <Fade duration={800} direction="up" triggerOnce delay={500}>
          <h4 className={styles.secondaryHeading}>
            Get notified as soon as mainnet launches
          </h4>
          <GetNotified showcasePage />
          <SocialIcons styles={styles} />
        </Fade>
      </div>
    </main>
  )
}

export default Hero
