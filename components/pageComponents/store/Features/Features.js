import Image from 'next/image'

import Heading from 'components/Heading'
import Button from 'components/Button'

import statisticImgMobile from '/public/images/store/Features/statisticImgMobile.svg'
import statisticImgDesktop from '/public/images/store/Features/statisticImgDesktop.svg'

import styles from './Features.module.scss'
import useGetScreenSize from 'hooks/useGetScreenSize'

const Features = () => {
  const isMobile = useGetScreenSize()
  return (
    <>
      <section className={styles.container}>
        <div className={styles.headWrapper}>
          <Heading text="Data consumption is rapidly increasing" Tag="h3" />
          <h3 className={styles.secondaryHeading}>Time to decentralize</h3>
        </div>
        <div className={styles.imgContainer}>
          {isMobile && (
            <div className={styles.statisticImgMobile}>
              <Image
                src={statisticImgMobile}
                width={statisticImgMobile.width}
                height={statisticImgMobile.height}
                alt="Global Data consumption"
              />
            </div>
          )}
          {!isMobile && (
            <div className={styles.statisticImgDesktop}>
              <Image
                src={statisticImgDesktop}
                width={statisticImgDesktop.width}
                height={statisticImgDesktop.height}
                alt="Global Data consumption"
              />
            </div>
          )}
        </div>
        <div className={styles.textWrapper}>
          <span className={styles.text}>
            Global data consumption is projected to grow at a rate of over 25%
            per year. Today, virtually all of the world&#39;s data is stored on
            centralized servers, which are controlled by a handful of
            corporations.
          </span>
          <Button
            text="Check Our Solution"
            type="button"
            black
            transparent
            link="https://staging-blimp.testnet-0chain.net/"
            blank
          />
        </div>
      </section>

      <section className={styles.mainFeature}>
        <div className={styles.bgPattern}>
          <Image
            src={
              isMobile
                ? '/images/store/Features/texture-mobile.png'
                : '/images/store/Features/texture-desktop.png'
            }
            alt="Background Texture"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className={styles.textWrapper}>
          <Heading text="A hyper-speed Decentralized Storage Network" />
          <h3 className={styles.secondaryHeading}>Unlike any other Cloud.</h3>
          <span className={styles.text}>
            Züs&#39; low-latency Blockchain monitors Storage Providers (to
            ensure file availability) and leverages crypto-economics (to
            incentivize optimal behavior). This brings a high-quality &
            hyper-fast decentralized storage experience to the end user.
          </span>
        </div>
      </section>
    </>
  )
}

export default Features
