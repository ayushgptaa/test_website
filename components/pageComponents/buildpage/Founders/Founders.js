import Image from 'next/image'
import { Zoom, Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Text from 'components/Text'
import SocialIcons from 'components/SocialIcons'
import FoundersCaption from './FoundersCaption'

import styles from './Founders.module.scss'
import { ScrollSnapSection } from 'components/ScrollSnap'

const Founders = () => {
  return (
    <section className={styles.container}>
      <ScrollSnapSection>
        <div className={styles.bgPattern}>
          <div className={styles.textContainer}>
            <Fade direction="up" cascade>
              <Heading text="Join the Community" />
              <Text>
                Join the conversation in our community groups. Share ideas,
                throughts, feedbaack and help us grow this unique network.
                You’ll find us on the usual channels below
              </Text>
              <SocialIcons width={64} height={64} />
            </Fade>
          </div>
        </div>
      </ScrollSnapSection>

      <ScrollSnapSection alignMobile="start" marginMobile="1x">
        <div className={styles.imgContainer}>
          <Image
            src="/images/buildPage/Founders/brain.png"
            width={1122}
            height={595}
            alt="bgImage"
          />
          <div className={styles.overlay} />
          <div className={styles.overlay2} />
        </div>

        <div className={styles.imgText}>
          <Fade cascade>
            <Heading text="The Founders" />
            <Text left>
              In 2017, Saswata set out to build a data-rich farming application
              on top of Ethereum. After some experimentation, he realized the
              app would be unworkable on Ethereum due to various latency and
              scalability constraints. He needed a blockchain capable of
              providing fast-finality, scalability, and a high performance
              storage service. Since such a platform didn’t exist, Saswata
              teamed up with Tom Austin to build the platform from scratch.
              <span>
                Four years later, they’ve built not only Züs - a hyper-speed
                blockchain and storage network - but also an initial ecosystem
                of apps in order to facilitate its adoption; Züs will launch
                with apps such as: consumer & enterprise solutions to buy and
                sell storage securely, NFT-centric apps to store NFT data, a
                serverless air-gapped wallet and staking app, and an app to
                provide storage capacity.
              </span>
              <span>
                Once just an idea, Züs can now take the world Beyond The Cloud.
              </span>
            </Text>
          </Fade>
        </div>
      </ScrollSnapSection>

      <ScrollSnapSection
        alignMobile="start"
        marginMobile="1x"
        alignDesktop="end">
        <Zoom>
          <div className={styles.foundersContainer}>
            <div className={styles.foundersImg}>
              <Image
                src="/images/buildPage/Founders/Founders.png"
                width={700}
                height={700}
                alt="Founders"
                layout="intrinsic"
              />
            </div>
            <FoundersCaption />
          </div>
        </Zoom>
      </ScrollSnapSection>
    </section>
  )
}

export default Founders
