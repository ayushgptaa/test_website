import Image from 'next/image'

import Paragraph from '/components/Paragraph'
import Button from 'components/Button'
import Heading from 'components/Heading'
import ContainerWithIcon from '../ContainerWithIcon'

import { ImageAnimation, TextContainerAnimation } from '../AppsAnimations'

import styles from './index.module.scss'

const ChimneyBackground = () => {
  return (
    <div className={styles.ellipseContainer}>
      <div className={styles.ellipseTop}></div>
      <div className={styles.ellipseBottom}></div>
    </div>
  )
}

const ChimneyArt = () => {
  return (
    <div className={styles.chimneyArt}>
      <ImageAnimation direction="">
        <Image
          src="/images/homePage/ChimneyInfo/chimneyArt.png"
          alt="Chimney"
          quality={100}
          layout="fill"
          priority
        />
      </ImageAnimation>
    </div>
  )
}

const TextContent = () => {
  return (
    <div className={styles.textContent}>
      <TextContainerAnimation direction="">
        <Heading text="Plug in & earn" Tag="h3" periodColor="#DF7ACF" />
        <Paragraph>
          Turn your spare storage into income. The Chimney app is an easy-to-use
          service that will help you get your server running in just a few
          clicks!
        </Paragraph>
        <div>
          <Button
            type="button"
            text="Learn More"
            transparent
            black
            link="/provide"
          />
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
      <ChimneyArt />
      <TextContent />
    </ContainerWithIcon>
  )
}

export default ChimneyInfo
