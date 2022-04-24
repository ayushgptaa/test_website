import Heading from 'components/Heading'
import Button from 'components/Button'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <main className={styles.container}>
      <div className={styles.heroImg}></div>
      <div className={styles.contentContainer}>
        <Heading text="Build for the future" uppercase />
        <p className={styles.text}>
          Global data consumption is growing at a faster rate than global data
          storage capacity. Virtually all of this data is currently stored on
          centralized cloud solutions. Be the decentralized answer to an
          increasingly centralized problem. Build on Züs.
        </p>
        <Button type="button" text="Check Out Our GitHub" />
      </div>
    </main>
  )
}

export default Hero
