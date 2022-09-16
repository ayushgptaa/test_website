import Image from 'next/future/image'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'

const Hero = () => {
  return (
    <main className={styles.rootContainer}>
      <div className={styles.heroBackground}></div>
      <div className={styles.textContent}>
        <Heading text="About Züs" withoutPeriod />
        <Paragraph>
          Zus is creating a future that doesn’t exist today by bringing
          ownership of data and reliable passive income opportunities to
          everyday people and disrupting the traditional cloud landscape.
        </Paragraph>
      </div>
      <div className={styles.deviceImages}>
        <Image
          src="/images/About/Hero/phonesArt.png"
          alt="Zus app Ecosystem"
          quality={100}
          fill
          priority
          sizes="(max-width: 768px) 200vw,
          100vw"
        />
      </div>
    </main>
  )
}

export default Hero
