import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <Fade direction="up" triggerOnce duration={800} cascade>
          <Heading text="Store and Retrieve your files on Züs" />
          <Paragraph>
            Cloud Storage on Züs is enabled by a reliable decentralized cloud
            network and a lightning-fast Layer 1 blockchain protocol. This makes
            the process of getting started swift and ituitive.
          </Paragraph>
        </Fade>
      </div>
    </main>
  )
}

export default Hero
