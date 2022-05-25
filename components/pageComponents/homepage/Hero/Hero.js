import Heading from 'components/Heading'
import SocialIcons from 'components/SocialIcons'
import { Fade } from 'react-awesome-reveal'

// Comment it now, will bring it again after mainnet is imminent
// import CountDownTimer from './CountdownTimer'
// import GetNotified from 'components/GetNotified'

import styles from './Hero.module.scss'

// const targetDate = new Date('30 June, 2022').getTime()

const Hero = () => {
  return (
    <main className={styles.container}>
      <Fade cascade duration={700} direction="up">
        <Heading text="Go Beyond the Cloud" uppercase />
        {/* <CountDownTimer targetDate={targetDate} />
        <h4 className={styles.secondaryHeading}>
          Get notified as soon as mainnet launches
        </h4>
        <GetNotified /> */}
        <SocialIcons styles={styles} />
      </Fade>
    </main>
  )
}

export default Hero
