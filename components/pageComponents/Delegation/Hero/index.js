import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import styles from './index.module.scss'

const Hero = () => {
  return (
    <main className={styles.rootContainer}>
      <div className={styles.mainTextContainer}>
        <Fade direction="up" duration={600} cascade triggerOnce>
          <Heading text="Delegation" />
          <Paragraph>
            Any ZCN holder may delegate their tokens to a Service Provider to
            receive a portion of the Service Provider’s earnings.
          </Paragraph>
        </Fade>
      </div>
    </main>
  )
}

export default Hero
