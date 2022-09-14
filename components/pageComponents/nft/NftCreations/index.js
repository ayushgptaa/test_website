import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import NFtCards from './NftCards'

import styles from './index.module.scss'

const NftCreations = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.mainTextContent}>
        <Heading withoutPeriod text="Latest NFT Creations" Tag="h3" />
        <Paragraph>
          Cloud Storage on Züs is enabled by a reliable decentralized cloud
          network and a lightning-fast Layer 1 blockchain protocol. This makes
          the process of getting started swift and intuitive.
        </Paragraph>
      </div>

      <NFtCards />
    </section>
  )
}

export default NftCreations
