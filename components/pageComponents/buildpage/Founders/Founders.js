import Image from 'next/image'
import { Zoom, Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Text from 'components/Text'
import SocialIcons from 'components/SocialIcons'

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
              In 2017, Saswata had set out to build a data-rich farming
              application on top of Ethereum, but he later found such an app to
              be unworkable due to Ethereum’s latency and scalability
              constraints. He needed a blockchain capable of providing
              fast-finality, scalability, and a high performance storage
              service. Since such a platform didn’t exist, Saswata was
              introduced to a Tom Austin and they teamed up to build it from
              scratch.
              <span>
                Four years later, they’ve built not only Züs, a hyper-speed
                blockchain and storage network, but also an initial ecosystem of
                apps in order to facilitate its adoption - apps such as:
                consumer & enterprise solutions to buy and sell storage
                securely, NFT-centric apps to store NFT data, a serverless
                air-gapped wallet and staking app, and an app to provide storage
                capacity.
              </span>
              <span>
                Once just an idea, Züs can now take the world Beyond The Cloud.
              </span>
            </Text>
          </Fade>
        </div>
        <Zoom>
          <div className={styles.foundersImg}>
            <Image
              src="/images/buildPage/Founders/Founders.png"
              width={800}
              height={800}
              alt="Founders"
              layout="responsive"
            />
          </div>
        </Zoom>
      </ScrollSnapSection>
    </section>
  )
}

export default Founders
