import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Paragraph from 'components/Paragraph'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './index.module.scss'

const Hero = () => {
  const isMobile = useGetScreenSize()
  return (
    <main className={styles.container}>
      {!isMobile && (
        <div className={styles.heroImg}>
          <Image
            src="/images/zcn/Hero/heroImg.png"
            alt="Züs"
            layout="fill"
            quality={100}
            priority
          />
        </div>
      )}
      <div className={styles.contentContainer}>
        <Fade direction="up" triggerOnce cascade duration={600}>
          <Heading text="Rainfall Is Here" />
          <Paragraph>
            Rainfall is the economic protocol for the Züs Cloud Network.
          </Paragraph>
          <div className={styles.buttons}>
            <Button type="button" text="Learn More" transparent black />
            <Button type="button" text="Econ Paper" />
          </div>
          <div className={styles.customPara}>
            <Paragraph>
              The protocol maintains a low year-over-year inflation rate (sub
              10%) for the ZCN token, while incentivizing two key expansion
              factors for the Züs Cloud Network: a low-cost cloud storage
              service for clients via free egress & cloud network growth via
              optimizing service provider rewards for both high-performing
              blobbers (storage providers) and the network’s miners and
              sharders.
            </Paragraph>
          </div>
        </Fade>
      </div>
    </main>
  )
}

export default Hero
