import Image from 'next/image'

import Paragraph from '/components/Paragraph'
import Button from 'components/Button'
import Heading from 'components/Heading'
import TextContainerBorder from './TextContainerBorder'
import ContainerWithIcon from '../ContainerWithIcon'

import { TextContainerAnimation, ImageAnimation } from '../AppsAnimations'

import styles from './index.module.scss'

const VultArt = () => {
  return (
    <ImageAnimation direction="">
      <div className={styles.vultArt}>
        <Image
          src="/images/homePage/VultInfo/vultArt.png"
          alt="Vult"
          quality={100}
          layout="fill"
          priority
        />
      </div>
    </ImageAnimation>
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

const TextContent = () => {
  return (
    <div className={styles.textContainerWrapper}>
      <TextContainerAnimation direction="">
        <div className={styles.textContent}>
          <Heading
            text="Unbounded Storage Capacity"
            Tag="h3"
            periodColor="#0B9DFF"
          />
          <Paragraph>
            The Züs Cloud Network provides an unlimited amount of storage. This
            means that with more space, you can keep all your important files
            safe!
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
      <VultArt />
      <TextContent />
      <VultBackground />
    </ContainerWithIcon>
  )
}

export default VultInfo
