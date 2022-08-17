import Image from 'next/image'

import Paragraph from '/components/Paragraph'
import Button from 'components/Button'
import Heading from 'components/Heading'
import ContainerWithIcon from '../ContainerWithIcon'
import BulletText from 'components/BulletText'

import {
  MobileArtAnimation,
  DesktopArtAnimation,
  TextContainerAnimation,
} from '../AppsAnimations'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './index.module.scss'

const ShowcaseBackground = () => {
  return (
    <div className={styles.ellipseContainer}>
      <div className={styles.ellipseLeft}></div>
      <div className={styles.ellipseRight}></div>
    </div>
  )
}

const ShowcaseArtMobile = () => {
  return (
    <MobileArtAnimation>
      <div className={styles.showcaseArtMobile}>
        <Image
          src="/images/homePage/Showcase/showcaseArt.png"
          alt="showcase"
          quality={100}
          layout="fill"
          priority
        />
      </div>
    </MobileArtAnimation>
  )
}

const ShowcaseArtDesktop = () => {
  return (
    <div className={styles.showcaseArtDesktop}>
      <DesktopArtAnimation direction="">
        <Image
          src="/images/homePage/Showcase/showcaseArt.png"
          alt="showcase"
          quality={100}
          layout="fixed"
          height={800}
          width={860}
          priority
        />
      </DesktopArtAnimation>
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

          <div className={styles.listContainer}>
            <BulletText>Consistent uptime. Lorem ipsum</BulletText>
            <BulletText>dolor sit amet, consectetur adipiscing elit</BulletText>
            <BulletText>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BulletText>
          </div>
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
  const isMobile = useGetScreenSize()

  return (
    <ContainerWithIcon
      logo=""
      alt=""
      height={0}
      width={0}
      style={{ padding: isMobile ? null : '21rem 0 7.8rem' }}>
      <ShowcaseBackground />
      <ShowcaseArtMobile />
      <ShowcaseArtDesktop />
      <TextContainer />
    </ContainerWithIcon>
  )
}

export default Showcase
