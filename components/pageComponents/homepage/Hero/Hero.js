import CountDownTimer from './CountdownTimer'
import Heading from 'components/Heading'
import GetNotified from 'components/GetNotified'
import SocialIcons from 'components/SocialIcons'

import styles from './Hero.module.scss'

const targetDate = new Date('22 May, 2022').getTime()

const Hero = () => {
  return (
    <main className={styles.container}>
      <Heading text="Go Beyond the Cloud" uppercase />
      <CountDownTimer targetDate={targetDate} />
      <h4 className={styles.secondaryHeading}>
        Get notified as soon as mainnet launches
      </h4>
      <GetNotified />
      <SocialIcons styles={styles} />
    </main>
  )
}

export default Hero
