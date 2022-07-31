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

const EllipseContainer = () => {
  return (
    <div className={styles.ellipseContainer}>
      <div className={styles.ellipseTop}></div>
      <div className={styles.ellipseBottom}></div>
    </div>
  )
}

const ChalkArtMobile = () => {
  return (
    <MobileArtAnimation>
      <div className={styles.chalkArtMobile}>
        <Image
          src="/images/homePage/ChalkInfo/chalkArtMobile.png"
          alt="Chimney"
          quality={100}
          layout="fill"
        />
      </div>
    </MobileArtAnimation>
  )
}

const ChalkArtDesktop = () => {
  return (
    <div className={styles.chalkArtDesktop}>
      <DesktopArtAnimation>
        <Image
          src="/images/homePage/ChalkInfo/chalkArtDesktop.png"
          alt="Chalk"
          quality={100}
          layout="fixed"
          height={550}
          width={600}
        />
      </DesktopArtAnimation>
    </div>
  )
}

const TextContainer = () => {
  return (
    <div className={styles.textContent}>
      <TextContainerAnimation>
        <>
          <Heading
            text="Taking NFTs to the next level"
            Tag="h3"
            periodColor="#F75A38"
          />
          <Paragraph>
            Codeless NFT minting. Permanent decentralized storage. No upfront
            cost. The Chalk App leverages Züs to bring groundbreaking features
            to NFT creators.
          </Paragraph>
          <Button type="button" text="Learn more" transparent black />
        </>
      </TextContainerAnimation>
    </div>
  )
}

const ChalkInfo = () => {
  return (
    <ContainerWithIcon
      logo="/images/homePage/ChalkInfo/chalkLogo.svg"
      alt="Chalk Logo"
      height={55}
      width={75}>
      <EllipseContainer />
      <ChalkArtMobile />
      <TextContainer />
      <ChalkArtDesktop />
    </ContainerWithIcon>
  )
}

export default ChalkInfo
