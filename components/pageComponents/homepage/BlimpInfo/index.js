import Image from 'next/image'

import Paragraph from '/components/Paragraph'
import Button from 'components/Button'
import Heading from 'components/Heading'
import ContainerWithIcon from '../ContainerWithIcon'

import { ImageAnimation, TextContainerAnimation } from '../AppsAnimations'

import styles from './index.module.scss'

const BlimpBackground = () => {
  return (
    <div className={styles.ellipseContainer}>
      <div className={styles.ellipseTop}></div>
      <div className={styles.rectangle}></div>
    </div>
  )
}

const BlimpArt = () => {
  return (
    <div className={styles.blimpArt}>
      <ImageAnimation>
        <Image
          src="/images/homePage/BlimpInfo/blimpArt.png"
          alt="Blimp"
          quality={100}
          layout="fill"
          priority
        />
      </ImageAnimation>
    </div>
  )
}

const TextContainer = () => {
  return (
    <div className={styles.textContent}>
      <TextContainerAnimation>
        <Heading text="An incentive to scale" Tag="h3" periodColor="#2EB5DF" />
        <Paragraph>
          A crypto-economic model that rewards network growth. As more data is
          stored on the network, more Züs Cloud Network ($ZCN) tokens are staked
          on the network.
        </Paragraph>
        <div>
          <Button type="button" text="Token Economics" transparent black />
        </div>
      </TextContainerAnimation>
    </div>
  )
}

const BlimpInfo = () => {
  return (
    <ContainerWithIcon
      logo="/images/homePage/BlimpInfo/blimpLogo.svg"
      alt="Blimp Logo"
      height={30}
      width={65}
      blimpContainer>
      <BlimpBackground />
      <BlimpArt />
      <TextContainer />
    </ContainerWithIcon>
  )
}

export default BlimpInfo
