import Heading from 'components/Heading'
import SocialIcons from 'components/SocialIcons'
import GetNotified from 'components/GetNotified'

import styles from './index.module.scss'

const Hero = () => {
  return (
    <main className={styles.rootContainer}>
      <div className={styles.backgroundImg} />
      <Heading
        text="This content is being streamed from ZCN dstorage"
        withoutPeriod
      />
      <div className={styles.mainTextContent}>
        <h4 className={styles.secondaryHeading}>
          Get notified as soon as mainnet launches
        </h4>
        <GetNotified showcasePage />
        <SocialIcons styles={styles} />
      </div>
    </main>
  )
}

export default Hero
