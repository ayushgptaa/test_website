import Image from 'next/image'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'

import styles from './index.module.scss'

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.aboutZcn}>
        <div className={styles.ellipseRight} />
        <div className={styles.ellipseLeft} />

        <Heading text="What is ZCN?" withoutPeriod Tag="h3" />
        <Paragraph>
          The Züs Cloud Network is a hyper-speed data storage network. Enabled
          by a cutting-edge storage protocol; secured by a novel layer 1
          blockchain.
        </Paragraph>
      </div>

      <div className={styles.moreInfo}>
        <div className={styles.imgContainer}>
          <Image
            src="/images/nft/Features/img2.png"
            alt="ZCN"
            layout="fill"
            quality={80}
            priority
          />
        </div>

        <div className={styles.infoText}>
          <Heading text="Store = Stake" Tag="h3" />
          <Paragraph>
            With every byte that is stored on the Züs Cloud Network, a
            corresponding amount of ZCN must be staked on both the client side
            and the service provider side.
            <span>
              The “Store = Stake” model establishes a relationship between Züs
              storage and ZCN tokens; in order for any storage to be added to
              the Züs Cloud Network, a corresponding amount of ZCN musst also be
              staked. This means that as more storage is consumed on the
              network, more ZCN is locked is Züs storage contracts.
            </span>
          </Paragraph>

          <Button
            type="button"
            text="Staking Process"
            transparent
            black
            link="/staking"
          />
        </div>
      </div>
    </section>
  )
}

export default About
