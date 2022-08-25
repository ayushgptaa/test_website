import Image from 'next/image'

import Paragraph from '/components/Paragraph'
import Button from 'components/Button'
import Heading from 'components/Heading'
import ContainerWithIcon from '../ContainerWithIcon'

import { ImageAnimation, TextContainerAnimation } from '../AppsAnimations'

import styles from './index.module.scss'

const ShowcaseBackground = () => {
  return (
    <div className={styles.ellipseContainer}>
      <div className={styles.ellipseLeft}></div>
      <div className={styles.ellipseRight}></div>
    </div>
  )
}

const ShowcaseArt = () => {
  return (
    <div className={styles.showcaseArt}>
      <ImageAnimation>
        <Image
          src="/images/homePage/Showcase/showcaseArt.png"
          alt="showcase"
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
    <div className={styles.textContentWrapper}>
      <TextContainerAnimation fraction={0.4}>
        <Heading
          text="Get high fidelity data streaming powered by dstorage."
          Tag="h3"
          withoutPeriod
        />
      </TextContainerAnimation>

      <div className={styles.textContent}>
        <TextContainerAnimation>
          <Paragraph left>
            Consistent uptime. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Paragraph>

          <Paragraph left>
            High-fidelity is the ultimate form of accuracy. The data is the most
            accurate and complete representation of the product’s original
            information.
          </Paragraph>
        </TextContainerAnimation>
      </div>
      <TextContainerAnimation>
        <div>
          <Button
            type="button"
            text="See it live on our demo page"
            transparent
            black
            link="/showcase"
          />
        </div>
      </TextContainerAnimation>
    </div>
  )
}

const Showcase = () => {
  return (
    <ContainerWithIcon
      logo=""
      alt=""
      height={0}
      width={0}
      className={styles.containerWithIcon}>
      <ShowcaseBackground />
      <ShowcaseArt />
      <TextContainer />
    </ContainerWithIcon>
  )
}

export default Showcase
