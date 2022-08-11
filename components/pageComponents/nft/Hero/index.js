import Image from 'next/image'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'

const Hero = () => {
  return (
    <main className={styles.rootContainer}>
      <div className={styles.maintextContent}>
        <Heading text="Permanent Storage for NFTs" withoutPeriod />
        <Paragraph>
          Cloud Storage on Züs is enabled by a reliable decentralized cloud
          network and a lightning-fast Layer 1 blockchain protocol. This makes
          the process of getting started swift and intuitive.
        </Paragraph>
        <Button type="button" text="Launch the Chalk NFT App" />
      </div>

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
    </main>
  )
}

export default Hero
