import CountDownTimer from './CountdownTimer'
import InputBox from 'components/InputBox'
import Button from 'components/Button'
import SocialIcons from 'components/SocialIcons'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <main>
      <h1 className={styles.mainHeading}>
        Go Beyond the Cloud <span>.</span>
      </h1>
      <h4 className={styles.secondaryHeading}>Launching in</h4>
      <CountDownTimer />
      <h4 className={styles.secondaryHeading}>
        Get notified as soon as mainnet launches
      </h4>
      <InputBox type="email" />
      <Button type="submit" text="Get notified" />
      <SocialIcons styles={styles} />
    </main>
  )
}

export default Hero
