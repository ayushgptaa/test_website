import Image from 'next/image'

import Paragraph from '/components/Paragraph'
import Button from 'components/Button'
import Heading from 'components/Heading'
import TextContainerBorder from './TextContainerBorder'
import ContainerWithIcon from '../ContainerWithIcon'

import {
  MobileArtAnimation,
  DesktopArtAnimation,
  TextContainerAnimation,
} from '../AppsAnimations'

import styles from './index.module.scss'

const VultArtMobile = () => {
  return (
    <MobileArtAnimation>
      <div className={styles.vultArtMobile}>
        <Image
          src="/images/homePage/VultInfo/VultArtMobile.png"
          alt="Chimney"
          quality={100}
          layout="fill"
        />
      </div>
    </MobileArtAnimation>
  )
}

const VultBackground = () => {
  return (
    <div className={styles.ellipseContainer}>
      <div className={styles.ellipseTop}></div>
      <div className={styles.ellipseBottom}></div>
    </div>
  )
}

const VultArtDesktop = () => {
  return (
    <div className={styles.vultArtDesktop}>
      <DesktopArtAnimation>
        <Image
          src="/images/homePage/VultInfo/vultArtDesktop.png"
          alt="Chimney"
          quality={100}
          layout="fixed"
          height={500}
          width={600}
        />
      </DesktopArtAnimation>
    </div>
  )
}

const TextContent = () => {
  return (
    <TextContainerAnimation>
      <div className={styles.teContainerWrapper}>
        <div className={styles.textContent}>
          <Heading
            text="Unbounded Storage Capacity"
            Tag="h3"
            periodColor="#0B9DFF"
          />
          <Paragraph>
            There is no limit to the amount of storage that can be put on the
            Züs Cloud Network. The more storage, the better.
          </Paragraph>
          <Button type="button" text="Store" link="/store" transparent black />
        </div>
        <div className={styles.textContainerBorderWrapper}>
          <TextContainerBorder />
        </div>
      </div>
    </TextContainerAnimation>
  )
}

const VultInfo = () => {
  return (
    <ContainerWithIcon
      logo="/images/homepage/VultInfo/vultLogo.svg"
      alt="Vult Logo"
      height={50}
      width={70}
      vultContainer>
      <VultArtMobile />
      <VultArtDesktop />
      <TextContent />
      <VultBackground />
    </ContainerWithIcon>
  )
}

export default VultInfo
