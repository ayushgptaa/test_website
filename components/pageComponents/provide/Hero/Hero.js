import { Fade } from 'react-awesome-reveal'

import styles from './Hero.module.scss'
import Paragraph from 'components/Paragraph'

import Heading from 'components/Heading'

const Hero = () => {
  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <Fade direction="up" triggerOnce duration={600} cascade>
          <Heading text="Earn rewards for growing the cloud" />
          <Paragraph className={styles.text}>
            Turn your unused server capacity into income by simply logging your
            server onto Züs. Turn your ZCN into staking income by delegating
            tokens to Blobbers.
          </Paragraph>
        </Fade>
      </div>
    </main>
  )
}

export default Hero
