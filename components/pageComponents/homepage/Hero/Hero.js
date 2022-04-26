import CountDownTimer from './CountdownTimer'
import Heading from 'components/Heading'
import GetNotified from 'components/GetNotified'
import SocialIcons from 'components/SocialIcons'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <main className={styles.container}>
      <Heading text="Go Beyond the Cloud" uppercase />
      <h4 className={styles.secondaryHeading}>Launching in</h4>
      <CountDownTimer />
      <h4 className={styles.secondaryHeading}>
        Get notified as soon as mainnet launches
      </h4>
      <GetNotified />
      <SocialIcons styles={styles} />
    </main>
  )
}

export default Hero
