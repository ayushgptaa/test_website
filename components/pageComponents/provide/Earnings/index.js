import Image from 'next/image'

import Paragraph from '/components/Paragraph'
import Heading from 'components/Heading'
import IconContainer from 'components/IconContainer'
import RewardsCalculator from './RewardsCalculator'

import {
  MobileArtAnimation,
  DesktopArtAnimation,
  TextContainerAnimation,
} from '../../homepage/AppsAnimations'

import styles from './index.module.scss'

const ChimneyBackground = () => {
  return (
    <div className={styles.ellipseContainer}>
      <div className={styles.ellipseTop}></div>
      <div className={styles.ellipseBottom}></div>
    </div>
  )
}

const ChimneyArtMobile = () => {
  return (
    <MobileArtAnimation direction="">
      <div className={styles.chimneyArtMobile}>
        <Image
          src="/images/homePage/ChimneyInfo/chimneyArtMobile.png"
          alt="Chimney"
          quality={100}
          layout="fill"
          priority
        />
      </div>
    </MobileArtAnimation>
  )
}

const ChimneyArtDesktop = () => {
  return (
    <div className={styles.chimneyArtDesktop}>
      <DesktopArtAnimation direction="">
        <Image
          src="/images/homePage/ChimneyInfo/chimneyArtDesktop.png"
          alt="Chimney"
          quality={100}
          layout="fixed"
          height={680}
          width={750}
          priority
        />
      </DesktopArtAnimation>
    </div>
  )
}

const TextContent = () => {
  return (
    <div className={styles.textContent}>
      <TextContainerAnimation direction="">
        <Heading text="Plug in & earn" Tag="h3" periodColor="#DF7ACF" />
        <Paragraph left className={styles.paragraph}>
          Turn your spare storage into income. The Chimney app can get your
          server up and running on Züs in just a few clicks.
        </Paragraph>
      </TextContainerAnimation>
      <TextContainerAnimation direction="">
        <RewardsCalculator />
      </TextContainerAnimation>
    </div>
  )
}

const Earnings = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.icon}>
          <IconContainer
            img="/images/homePage/ChimneyInfo/chimneyLogo.svg"
            alt="Chimney Logo"
            height={40}
            width={40}
          />
        </div>
        <ChimneyBackground />
        <ChimneyArtMobile />
        <ChimneyArtDesktop />
        <TextContent />
      </div>
    </section>
  )
}

export default Earnings
