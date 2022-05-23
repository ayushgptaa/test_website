import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import { ScrollSnapSection } from 'components/ScrollSnap'

import Heading from 'components/Heading'
import Button from 'components/Button'

import statisticImgMobile from '/public/images/store/Features/statisticImgMobile.svg'
import statisticImgDesktop from '/public/images/store/Features/statisticImgDesktop.svg'

import styles from './Features.module.scss'

const Features = () => {
  return (
    <>
      <ScrollSnapSection
        alignDesktop="start"
        alignMobile="start"
        marginDesktop="1x">
        <Fade>
          <section className={styles.container}>
            <div className={styles.headWrapper}>
              <Fade direction="up">
                <Heading text="Data consumption is rapidly increasing" />
                <h3 className={styles.secondaryHeading}>
                  Time to decentralize
                </h3>
              </Fade>
            </div>
            <div className={styles.imgContainer}>
              <div className={styles.statisticImgMobile}>
                <Image
                  src={statisticImgMobile}
                  width={statisticImgMobile.width}
                  height={statisticImgMobile.height}
                  alt="Global Data consumption"
                />
              </div>
              <div className={styles.statisticImgDesktop}>
                <Image
                  src={statisticImgDesktop}
                  width={statisticImgDesktop.width}
                  height={statisticImgDesktop.height}
                  alt="Global Data consumption"
                />
              </div>
            </div>
            <div className={styles.textWrapper}>
              <Fade direction="up">
                <span className={styles.text}>
                  Global data consumption is projected to grow at a rate of over
                  25% per year. Today, virtually all of the world&#39;s data is
                  stored on centralized servers, which are controlled by a
                  handful of corporations.
                </span>
                <Button
                  text="Check Our Solutions"
                  type="button"
                  black
                  transparent
                />
              </Fade>
            </div>
          </section>
        </Fade>
      </ScrollSnapSection>

      <ScrollSnapSection>
        <section className={styles.mainFeature}>
          <Fade>
            <div className={styles.bgPattern} />
          </Fade>
          <div className={styles.textWrapper}>
            <Fade direction="up" cascade duration={500}>
              <Heading text="A hyper-speed Decentralized Storage Network" />
              <h3 className={styles.secondaryHeading}>
                Unlike any other Cloud.
              </h3>
              <span className={styles.text}>
                Züs&#39; low-latency Blockchain monitors Storage Providers (to
                ensure file availability) and leverages crypto-economics (to
                incentivize optimal behavior). This brings a high-quality &
                hyper-fast decentralized storage experience to the end user.
              </span>
            </Fade>
          </div>
        </section>
      </ScrollSnapSection>
    </>
  )
}

export default Features
