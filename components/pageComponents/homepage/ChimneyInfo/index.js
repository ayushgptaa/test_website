import Image from 'next/image'

import Paragraph from '/components/Paragraph'
import Button from 'components/Button'
import Heading from 'components/Heading'
import ContainerWithIcon from '../ContainerWithIcon'

import {
  MobileArtAnimation,
  DesktopArtAnimation,
  TextContainerAnimation,
} from '../AppsAnimations'

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
    <MobileArtAnimation>
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
      <DesktopArtAnimation>
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
      <TextContainerAnimation>
        <Heading text="Plug in & earn" Tag="h3" periodColor="#DF7ACF" />
        <Paragraph>
          Turn your spare storage into income. The Chimney app can get your
          server up and running on Züs in just a few clicks.
        </Paragraph>
        <div>
          <Button type="button" text="Learn More" transparent black />
        </div>
      </TextContainerAnimation>
    </div>
  )
}

const ChimneyInfo = () => {
  return (
    <ContainerWithIcon
      logo="/images/homePage/ChimneyInfo/chimneyLogo.svg"
      alt="Chimney Logo"
      height={40}
      width={40}>
      <ChimneyBackground />
      <ChimneyArtMobile />
      <ChimneyArtDesktop />
      <TextContent />
    </ContainerWithIcon>
  )
}

export default ChimneyInfo
