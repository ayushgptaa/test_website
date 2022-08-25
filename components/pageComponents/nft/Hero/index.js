import Image from 'next/image'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'
import { Fade } from 'react-awesome-reveal'

const Hero = () => {
  return (
    <main className={styles.rootContainer}>
      <div className={styles.maintextContent}>
        <Fade direction="up" duration={600} cascade triggerOnce>
          <Heading text="Permanent Storage for NFTs" withoutPeriod />
          <Paragraph>
            Cloud Storage on Züs is enabled by a reliable decentralized cloud
            network and a lightning-fast Layer 1 blockchain protocol. This makes
            the process of getting started swift and intuitive.
          </Paragraph>
          <div>
            <Button type="button" text="Launch the Chalk NFT App" />
          </div>
        </Fade>
      </div>

      <Fade duration={600} delay={1000} triggerOnce>
        <div className={styles.mainImg}>
          <Image
            src="/images/nft/Hero/mainImg.png"
            alt="NFT Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </Fade>
    </main>
  )
}

export default Hero
