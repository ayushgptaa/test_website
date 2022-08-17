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
          src="/images/homePage/VultInfo/vultArtMobile.png"
          alt="Chimney"
          quality={100}
          layout="fill"
          priority
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
          priority
        />
      </DesktopArtAnimation>
    </div>
  )
}

const TextContent = () => {
  return (
    <div className={styles.teContainerWrapper}>
      <TextContainerAnimation>
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
          <div>
            <Button
              type="button"
              text="Store"
              link="/store"
              transparent
              black
            />
          </div>
        </div>

        <div className={styles.textContainerBorderWrapper}>
          <TextContainerBorder />
        </div>
      </TextContainerAnimation>
    </div>
  )
}

const VultInfo = () => {
  return (
    <ContainerWithIcon
      logo="/images/homePage/VultInfo/vultLogo.svg"
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
