import Image from 'next/image'
import { Zoom, Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import FoundersCaption from './FoundersCaption'

import styles from './Founders.module.scss'

const Founders = () => {
  return (
    <section className={styles.container}>
      <div className={styles.foundersImgDesktopContainer}>
        <Fade direction="up" triggerOnce>
          <Heading text="The Founders" Tag="h3" />
        </Fade>
        <Zoom triggerOnce fraction={0.5}>
          <div className={styles.foundersImgDesktop}>
            <Image
              src="/images/buildPage/Founders/foundersDesktop.jpg"
              objectFit="contain"
              alt="Founders"
              layout="fill"
              quality={100}
            />
          </div>
        </Zoom>
      </div>

      <FoundersCaption />

      <div className={styles.mainText}>
        <Heading text="The Founders" Tag="h3" />
        <Fade direction="up" duration={600} triggerOnce cascade>
          <Paragraph>
            In 2017, Saswata had set out to build a data-rich farming
            application on top of Ethereum, but he later found such an app to be
            unworkable due to Ethereum’s latency and scalability constraints. He
            needed a blockchain capable of providing fast-finality, scalability,
            and a high performance storage service. Since such a platform didn’t
            exist, Saswata was introduced to a Tom Austin and they teamed up to
            build it from scratch.
            <span>
              Four years later, they’ve built not only Züs, a hyper-speed
              blockchain and storage network, but also an initial ecosystem of
              apps in order to facilitate its adoption - apps such as: consumer
              & enterprise solutions to buy and sell storage securely,
              NFT-centric apps to store NFT data, a serverless air-gapped wallet
              and staking app, and an app to provide storage capacity.
            </span>
            <span>
              Once just an idea, Züs can now take the world Beyond The Cloud.{' '}
            </span>
          </Paragraph>
        </Fade>
      </div>

      <Zoom triggerOnce>
        <div className={styles.foundersImg}>
          <Image
            src="/images/buildPage/Founders/founders.jpg"
            objectFit="contain"
            alt="Founders"
            layout="fill"
            quality={100}
          />
        </div>
      </Zoom>
    </section>
  )
}

export default Founders
