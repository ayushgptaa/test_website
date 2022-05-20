import Heading from 'components/Heading'
import Button from 'components/Button'
import Image from 'next/image'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <main className={styles.container}>
      <div className={styles.heroImg}>
        <Image
          src="/images/buildPage/Hero/heroImg.png"
          layout="fill"
          quality={100}
          alt="heroImg"
          objectFit="cover"
          srcSet="2048w"
        />
      </div>
      <div className={styles.contentContainer}>
        <Heading text="Build for the future" uppercase />
        <span className={styles.text}>
          Global data consumption is growing at a faster rate than global data
          storage capacity. Virtually all of this data is currently stored on
          centralized cloud solutions. Be the decentralized answer to an
          increasingly centralized problem. Build on Züs.
        </span>
        <Button type="button" text="Check Out Our GitHub" />
      </div>
    </main>
  )
}

export default Hero
