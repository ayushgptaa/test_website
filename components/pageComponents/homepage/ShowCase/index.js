import Image from 'next/image'

import Paragraph from '/components/Paragraph'
import Button from 'components/Button'
import Heading from 'components/Heading'
import ContainerWithIcon from '../ContainerWithIcon'
import BulletText from 'components/BulletText'

import styles from './index.module.scss'

export const ShowcaseBackground = () => {
  return (
    <div className={styles.ellipseContainer}>
      <div className={styles.ellipseLeft}></div>
      <div className={styles.ellipseRight}></div>
    </div>
  )
}

export const ShowcaseArt = () => {
  return (
    <div className={styles.showcaseArt}>
      <Image
        src="/images/homePage/Showcase/showcaseArt.png"
        alt="showcase"
        layout="fill"
        priority
        quality={100}
      />
      <video
        src="https://ayush-gupta.s3.us-east-2.amazonaws.com/test/video2.mp4"
        poster="/images/homePage/Showcase/poster2.jpg"
        playsInline
        loop
        muted
        preload="metadata"
        autoPlay></video>
    </div>
  )
}

const TextContainer = () => {
  return (
    <div className={styles.textContentWrapper}>
      <Heading
        text="Get high fidelity data streaming powered by dStorage."
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
