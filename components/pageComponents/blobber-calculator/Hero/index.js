import Heading from 'components/Heading'

import styles from './index.module.scss'

const Hero = () => {
  return (
    <main className={styles.container}>
      <div className={styles.ellipseRight} />
      <Heading text="Blobber Rewards Calculator" />
    </main>
  )
}

export default Hero
