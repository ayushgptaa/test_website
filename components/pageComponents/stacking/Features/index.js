import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'

const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <Fade duration={800} triggerOnce delay={1000}>
        <div className={styles.card}>
          <Image
            src="/images/stacking/Features/card1.png"
            alt="Sharder"
            layout="fill"
            quality={100}
          />
        </div>
      </Fade>
      <Fade duration={800} triggerOnce delay={1000}>
        <div className={styles.card}>
          <Image
            src="/images/stacking/Features/card2.png"
            alt="Miner"
            layout="fill"
            quality={100}
          />
        </div>
      </Fade>
    </div>
  )
}

const Features = () => {
  return (
    <section className={styles.rootWrapper}>
      <div className={styles.container1}>
        <Fade direction="up" duration={600} cascade triggerOnce>
          <Heading
            text="A Blobber stores files for a client in exchange for a payment in ZCN"
            withoutPeriod
            Tag="h3"
          />
          <Paragraph>
            Prior to starting the storage service, the client and blobber agree
            on the payment amount, in addition to other terms, such as size
            (GB), latency/speed, and geolocation. The terms of this agreement
            are etched into a smart contract, called a Storage Allocation. To
            finalize the Storage Allocation, the Blobber and the Client both
            deposit the ZCN amount of the storage payment into the Allocation,
            which is then locked and published to the blockchain according to
            the specified service terms.
          </Paragraph>
          <Paragraph>
            Read the Storage Whitepaper for more detail on allocations and other
            components within the Züs storage protocol.
          </Paragraph>
          <div>
            <Button
              type="button"
              text="Read the Storage Paper"
              transparent
              black
            />
          </div>
        </Fade>
      </div>

      <div className={styles.container2}>
        <Fade direction="up" duration={600} cascade triggerOnce delay={500}>
          <Heading text="Miner & Sharder Staking" Tag="h3" />
          <Paragraph>
            Miners and Sharders validate and maintain transactions published to
            the Züs blockchain. Together they represent a group of 141 network
            nodes — 111 miners and 30 sharders. This group is referred to as the
            Active Set.
          </Paragraph>
        </Fade>

        <Cards />

        <div className={styles.cardsBottomText}>
          <Fade direction="up" duration={600} cascade triggerOnce delay={500}>
            <Paragraph>
              Each member of the Active Set is required to collateralize their
              node with a minimum of 50,000 ZCN stake for the first year of
              mainnet (this duration will change in future network upgrades).
              Each member of the Active Set generates earnings on transaction
              fees and block rewards.
            </Paragraph>
            <Paragraph>
              To learn more about how the active set works, you can reference
              the architecture whitepaper.
            </Paragraph>

            <div>
              <Button
                type="button"
                text="Architecture Paper"
                transparent
                black
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Features
