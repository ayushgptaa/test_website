import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <Fade direction="up" triggerOnce duration={800} cascade>
          <Heading text="Store and Retrieve your files on Züs" />
          <Paragraph>
            You are one step closer to having access to any information,
            anywhere in the world. The Züs network provides you a reliable
            decentralized storage for your files that is fast and easy with
            their blockchain protocol. The process is swift and intuitive. Let's
            get started!
          </Paragraph>
        </Fade>
      </div>
    </main>
  )
}

export default Hero
