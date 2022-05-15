import Image from 'next/image'

import Heading from 'components/Heading'
import Text from 'components/Text'
import SocialIcons from 'components/SocialIcons'

import FoundersImg from '/public/images/buildPage/Founders/Founders.png'
import bgPatternLarge from '/public/images/buildPage/Founders/bgPatternLarge.svg'

import styles from './Founders.module.scss'

const Founders = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bgPattern}>
        <div className={styles.textContainer}>
          <Heading text="Join the Community" />
          <Text>
            Join the conversation in our community groups. Share ideas,
            throughts, feedbaack and help us grow this unique network. You’ll
            find us on the usual channels below
          </Text>
          <SocialIcons width={64} height={64} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={`/${bgPatternLarge.src}`}
          width={bgPatternLarge.width}
          height={bgPatternLarge.height}
          alt="bgImage"
          quality={100}
          layout="responsive"
        />
        <div className={styles.overlay} />
        <div className={styles.overlay2} />
      </div>
      <div className={styles.imgText}>
        <Heading text="The Founders" />
        <Text left>
          In 2017, Saswata had set out to build a data-rich farming application
          on top of Ethereum, but he later found such an app to be unworkable
          due to Ethereum’s latency and scalability constraints. He needed a
          blockchain capable of providing fast-finality, scalability, and a high
          performance storage service. Since such a platform didn’t exist,
          Saswata was introduced to a Tom Austin and they teamed up to build it
          from scratch.
          <span>
            Four years later, they’ve built not only Züs, a hyper-speed
            blockchain and storage network, but also an initial ecosystem of
            apps in order to facilitate its adoption - apps such as: consumer &
            enterprise solutions to buy and sell storage securely, NFT-centric
            apps to store NFT data, a serverless air-gapped wallet and staking
            app, and an app to provide storage capacity.
          </span>
          <span>
            Once just an idea, Züs can now take the world Beyond The Cloud.
          </span>
        </Text>
      </div>
      <div className={styles.foundersImg}>
        <Image
          src={`/${FoundersImg.src}`}
          width={FoundersImg.width}
          height={FoundersImg.height}
          alt="Founders"
          quality={100}
          layout="responsive"
          priority={false}
        />
      </div>
    </section>
  )
}

export default Founders
