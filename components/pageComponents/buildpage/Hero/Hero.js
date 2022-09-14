import Image from 'next/image'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Paragraph from 'components/Paragraph'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <main className={styles.container}>
      <div className={styles.ellipseRight}></div>
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
      <div className={styles.contentContainer}>
        <Heading text="Build for the future" />
        <Paragraph>
          Global data consumption is growing at a faster rate than global data
          storage capacity. Virtually all of this data is currently stored on
          centralized cloud solutions. Be the decentralized answer to an
          increasingly centralized problem. Build on Züs.
        </Paragraph>

        <Button
          type="button"
          text="Check Our GitHub"
          link="https://github.com/0chain"
          blank
        />
      </div>
    </main>
  )
}

export default Hero
