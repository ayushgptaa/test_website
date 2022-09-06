import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'

import { whitepaperLinks } from 'SocialLinks/links'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './index.module.scss'

const Info = () => {
  const isMobile = useGetScreenSize()

  return (
    <section className={styles.rootContainer}>
      <div className={styles.container1}>
        <Heading text="How It Works" Tag="h3" />
        <Fade delay={500} duration={600} cascade triggerOnce>
          <div className={styles.container1Img}>
            <Image
              src={
                isMobile
                  ? '/images/delegation/Info/blobberImgMobile.png'
                  : '/images/delegation/Info/blobberImgDesktop.png'
              }
              alt="Blobber Delegation"
              qualtiy={100}
              layout="fill"
              priority
            />
          </div>
        </Fade>

        <div className={styles.container1Text}>
          <Fade direction="up" duration={600} cascade delay={500} triggerOnce>
            <h5 className={styles.purpleText}>How it Works</h5>
            <Heading text="Blobber Delegation" withoutPeriod Tag="h4" />
            <Paragraph>
              The Züs Cloud Network has an unbounded storage capacity and an
              unbounded number of participating blobbers. Since a Blobber with
              more ZCN staked can receive a larger share of block rewards, an
              incentive exists to accept outside delegation. A ZCN holder may
              delegate tokens to any Blobber that is accepting delegation.
            </Paragraph>
          </Fade>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.container2Text}>
          <Fade direction="up" duration={600} cascade triggerOnce>
            <h5 className={styles.purpleText}>How it Works</h5>
            <Heading text="Miner & Sharder Delegation" withoutPeriod Tag="h4" />
            <Paragraph>
              For the first phase of mainnet (Fuji), there will be 15
              team-operated nodes in the Active Set (10 Miners and 5 Sharders)
              that can receive delegation from ZCN holders. Each node will have
              100 delegation slots. Each slot is comprised of a unique wallet
              and will have a minimum ZCN staking requirement of 3,000 ZCN and a
              maximum of 5,000 ZCN per slot. Each node will distribute 100% of
              earnings to its delegators.
            </Paragraph>
          </Fade>
        </div>

        <Fade delay={500} duration={600} cascade triggerOnce>
          <div className={styles.container2Img}>
            <Image
              src={
                isMobile
                  ? '/images/delegation/Info/minerImgMobile.png'
                  : '/images/delegation/Info/minerImgDesktop.png'
              }
              alt="Miner & Sharder Delegation"
              qualtiy={100}
              layout="fill"
              priority
            />
          </div>
        </Fade>

        <div className={styles.tools}>
          <Fade direction="up" duration={600} cascade triggerOnce>
            <Heading text="Delegation Tools" withoutPeriod Tag="h4" />
            <div className={styles.buttonsContainer}>
              <Button
                type="button"
                text="Bolt App"
                transparent
                black
                link="https://staging-bolt.testnet-0chain.net/"
                blank
              />
              <Button
                type="button"
                text="Wallet CLI"
                transparent
                black
                link={whitepaperLinks.ECONOMIC_PROTOCOL}
                blank
              />
            </div>
            <Paragraph>
              ZCN holders can delegate via the Bolt wallet app or the CLI.
            </Paragraph>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Info
