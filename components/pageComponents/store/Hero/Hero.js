import Heading from 'components/Heading'
import InputBox from 'components/InputBox'
import Button from 'components/Button'
import SocialIcons from 'components/SocialIcons'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <main className={styles.container}>
      <div className={styles.heroImg}></div>
      <div className={styles.contentContainer}>
        <Heading text="Store and Retrieve your files on Züs" uppercase />
        <p className={styles.text}>
          Cloud Storage on Züs is enabled by a reliable decentralized cloud
          network and a lightning-fast Layer 1 blockchain protocol. This makes
          the process of getting started swift and ituitive.
        </p>
        <h4 className={styles.secondaryHeading}>
          Get notified when it&#39;s ready
        </h4>
        <InputBox type="email" />
        <Button type="submit" text="Get notified" />
        <SocialIcons />
      </div>
    </main>
  )
}

export default Hero
