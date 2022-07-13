import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Image from 'next/image'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <main className={styles.container}>
      <Fade>
        <div className={styles.heroImg}>
          <Image
            src="/images/buildPage/Hero/heroImg.png"
            layout="fill"
            quality={100}
            alt="heroImg"
            objectFit="cover"
            priority
          />
        </div>
      </Fade>
      <Fade direction="up">
        <div className={styles.contentContainer}>
          <Heading text="Build for the future" uppercase />
          <span className={styles.text}>
            Global data consumption is growing at a faster rate than global data
            storage capacity. Virtually all of this data is currently stored on
            centralized cloud solutions. Be the decentralized answer to an
            increasingly centralized problem. Build on Züs.
          </span>

          <Button
            type="button"
            text="Check Our GitHub"
            link="https://github.com/0chain"
          />
        </div>
      </Fade>
    </main>
  )
}

export default Hero
