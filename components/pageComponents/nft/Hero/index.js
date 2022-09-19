import Image from 'next/image'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import { prodcuts } from 'SocialLinks/links'

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
        <div>
          <Button
            type="button"
            text="Launch the Chalk NFT App"
            link={prodcuts.CHALK}
            black
          />
        </div>
      </div>

      <div className={styles.mainImg}>
        <Image
          src="/images/nft/Hero/mainImage.png"
          alt="Permanent Storage for NFTs"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          sizes="(max-width : 786px) 100vw,
          50vw"
        />
      </div>
    </main>
  )
}

export default Hero
