import Image from 'next/image'

import Heading from 'components/Heading'
import Button from 'components/Button'

import staticsImg from '/public/images/store/Features/staticsImg.png'

import styles from './Features.module.scss'

const Features = () => {
  return (
    <>
      <section className={styles.container}>
        <Heading text="Data consumption is rapidly increasing" />
        <h3 className={styles.secondaryHeading}>Time to decentralize</h3>
        <div className={styles.imgContainer}>
          <Image src={staticsImg} alt="Global Data consumption" />
        </div>
        <p className={styles.text}>
          Global data consumption is projected to grow at a rate of over 25% per
          year. Today, virtually all of the world&#39;s data is stored on
          centralized servers, which are controlled by a handful of
          corporations.
        </p>
        <Button text="Check Our Solutions" type="button" black transparent />
      </section>

      <section className={styles.mainFeature}>
        <div className={styles.bgPattern}></div>
        <Heading text="A hyper-speed Decentralized Storage Network" />
        <h3 className={styles.secondaryHeading}>Unlike any other Cloud.</h3>
        <p className={styles.text}>
          Züs&#39; low-latency Blockchain monitors Storage Providers (to ensure
          file availability) and leverages crypto-economics (to incentivize
          optimal behavior). This brings a high-quality & hyper-fast
          decentralized storage experience to the end user.
        </p>
      </section>
    </>
  )
}

export default Features
