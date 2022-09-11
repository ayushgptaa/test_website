import Image from 'next/image'

import Paragraph from '/components/Paragraph'
import Button from 'components/Button'
import Heading from 'components/Heading'
import ContainerWithIcon from '../ContainerWithIcon'
import BulletText from 'components/BulletText'

// import { ImageAnimation, TextContainerAnimation } from '../AppsAnimations'

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
      {/* <ImageAnimation direction=""> */}
      <Image
        src="/images/homePage/Showcase/showcaseArt.png"
        alt="showcase"
        quality={100}
        layout="fill"
        priority
      />
      {/* </ImageAnimation> */}
    </div>
  )
}

const TextContainer = () => {
  return (
    <div className={styles.textContentWrapper}>
      {/* <TextContainerAnimation fraction={0.4} direction=""> */}
      <Heading
        text="Get high fidelity data streaming powered by dstorage."
        Tag="h3"
        withoutPeriod
      />

      <div className={styles.textContent}>
        <Paragraph left>
          Dstorage provides high fidelity data streaming that is always
          available with high redundancy to attract more engagements and
          conversions.
        </Paragraph>

        <div className={styles.listContainer}>
          <BulletText>Always available with 99.999% uptime</BulletText>
          <BulletText> No network congestion</BulletText>
          <BulletText>Global Access </BulletText>
          <BulletText>Increase in data throughput performance</BulletText>
        </div>
      </div>

      <div>
        <Button
          type="button"
          text="See it live on our demo page"
          transparent
          black
          link="/showcase"
        />
      </div>
      {/* </TextContainerAnimation> */}
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
