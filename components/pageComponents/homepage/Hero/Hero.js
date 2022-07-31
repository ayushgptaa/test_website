import Heading from 'components/Heading'
import SocialIcons from 'components/SocialIcons'
import { Fade } from 'react-awesome-reveal'

import CountDownTimer from './CountdownTimer'
import GetNotified from 'components/GetNotified'

import styles from './Hero.module.scss'

const targetDate = new Date('30 July, 2022').getTime()

const Hero = () => {
  return (
    <main className={styles.container}>
      <Fade cascade duration={800} damping={0.2} direction="up" triggerOnce>
        <Heading text="Go beyond the cloud" />
        <CountDownTimer targetDate={targetDate} />
        <h4 className={styles.secondaryHeading}>
          Get notified as soon as mainnet launches
        </h4>
        <GetNotified />
        <SocialIcons styles={styles} />
      </Fade>
    </main>
  )
}

export default Hero
