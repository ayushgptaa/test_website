import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import GetNotified from 'components/GetNotified'
import SocialIcons from 'components/SocialIcons'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <main className={styles.container}>
      <Fade cascade>
        <div className={styles.heroImg} />
        <div className={styles.contentContainer}>
          <Fade direction="up">
            <Heading text="Store and Retrieve your files on Züs" uppercase />
            <span className={styles.text}>
              Cloud Storage on Züs is enabled by a reliable decentralized cloud
              network and a lightning-fast Layer 1 blockchain protocol. This
              makes the process of getting started swift and ituitive.
            </span>
            <h4 className={styles.secondaryHeading}>
              Get notified when it&#39;s ready
            </h4>
            <div className={styles.bottom}>
              <GetNotified />
              <SocialIcons />
            </div>
          </Fade>
        </div>
      </Fade>
    </main>
  )
}

export default Hero
