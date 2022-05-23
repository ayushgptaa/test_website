import Heading from 'components/Heading'

import TextContainer from './TextContainer'

import styles from './Hero.module.scss'
import { Fade } from 'react-awesome-reveal'
import { ScrollSnapSection } from 'components/ScrollSnap'

const Hero = () => {
  return (
    <main className={styles.container}>
      <ScrollSnapSection>
        <div className={styles.contentContainer}>
          <Fade direction="up" cascade>
            <Heading text="Earn rewards for growing the cloud" uppercase />
            <p className={styles.text}>
              Turn your unused server capacity into income by simply logging
              your server onto Züs. Turn your ZCN into staking income by
              delegating tokens to Blobbers.
            </p>
          </Fade>
        </div>
      </ScrollSnapSection>
      <ScrollSnapSection>
        <div className={styles.textContainer}>
          <TextContainer />
        </div>
      </ScrollSnapSection>
    </main>
  )
}

export default Hero
