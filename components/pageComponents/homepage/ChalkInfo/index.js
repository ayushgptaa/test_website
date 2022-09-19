import Image from 'next/image'

import Paragraph from '/components/Paragraph'
import Button from 'components/Button'
import Heading from 'components/Heading'
import ContainerWithIcon from '../ContainerWithIcon'

import useGetScreenSize from 'hooks/useGetScreenSize'

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
    <div className={styles.chalkArtMobile}>
      <Image
        src="/images/homePage/ChalkInfo/chalkArtMobile.png"
        alt="Chalk"
        quality={100}
        layout="fill"
      />
    </div>
  )
}

const ChalkArtDesktop = () => {
  return (
    <div className={styles.chalkArtDesktop}>
      <Image
        src="/images/homePage/ChalkInfo/chalkArtDesktop.png"
        alt="Chalk"
        quality={100}
        layout="fixed"
        height={550}
        width={600}
      />
    </div>
  )
}

const TextContainer = () => {
  return (
    <div className={styles.textContent}>
      <Heading
        text="Taking NFTs to the next level"
        Tag="h3"
        periodColor="#F75A38"
      />
      <Paragraph>
        The Chalk app brings groundbreaking features to NFT creators. By
        leveraging Züs, creators will now enjoy codeless NFT minting without
        upfront costs as well as permanent decentralized storage that will never
        go offline
      </Paragraph>
      <div>
        <Button type="button" text="Learn more" transparent black link="/nft" />
      </div>
    </div>
  )
}

const ChalkInfo = () => {
  const isMobile = useGetScreenSize()
  return (
    <ContainerWithIcon
      logo="/images/homePage/ChalkInfo/chalkLogo.svg"
      alt="Chalk Logo"
      height={55}
      width={75}>
      <EllipseContainer />
      {isMobile && <ChalkArtMobile />}
      <TextContainer />
      {!isMobile && <ChalkArtDesktop />}
    </ContainerWithIcon>
  )
}

export default ChalkInfo
