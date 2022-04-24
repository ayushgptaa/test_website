import Heading from 'components/Heading'

import TextContainer from './TextContainer'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <Heading text="Earn rewards for growing the cloud" uppercase />
        <p className={styles.text}>
          Turn your unused server capacity into income by simply logging your
          server onto Züs. Turn your ZCN into staking income by delegating
          tokens to Blobbers.
        </p>
      </div>
      <TextContainer />
    </main>
  )
}

export default Hero
