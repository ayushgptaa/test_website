import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import NFtCards from './NftCards'

import { prodcuts } from 'SocialLinks/links'

import styles from './index.module.scss'

const NftCreations = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.mainTextContent}>
        <Fade direction="up" duration={600} cascade triggerOnce>
          <Heading withoutPeriod text="Latest NFT Creations" Tag="h3" />
          <Paragraph>
            Cloud Storage on Züs is enabled by a reliable decentralized cloud
            network and a lightning-fast Layer 1 blockchain protocol. This makes
            the process of getting started swift and intuitive.
          </Paragraph>
        </Fade>
      </div>

      <Fade fraction={0.4} duration={800} cascade triggerOnce>
        <NFtCards />
      </Fade>

      <Fade direction="up" duration={600} triggerOnce>
        <div className={styles.bottomLink}>
          <a href={prodcuts.CHALK} rel="noreferrer" target="_blank">
            View More Züs NFTs
          </a>
        </div>
      </Fade>
    </section>
  )
}

export default NftCreations
