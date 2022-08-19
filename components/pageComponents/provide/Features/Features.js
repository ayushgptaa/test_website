import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import clsx from 'clsx'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Paragraph from 'components/Paragraph'
import MainFeature from './MainFeature'

import featuresData from './featuresData'

import styles from './Features.module.scss'

const Features = () => {
  const renderFeatures = () => {
    return featuresData.map(
      ({
        customStyle,
        imgDesktop,
        imgDesktopWidth,
        imgDesktopHeight,
        imgMobile,
        imgMobileWidth,
        imgMobileHeight,
        heading,
        text,
        phoneMobile,
        laptopImg,
        textContentEllipse,
        ellipseLeft,
        ellipseRight,
      }) => (
        <section className={`${styles.container} ${customStyle}`} key={heading}>
          {ellipseRight && <div className={styles.ellipseRight} />}
          {ellipseLeft && <div className={styles.ellipseleft} />}
          <Fade triggerOnce duration={500}>
            <div className={styles.imgContainer}>
              <div
                className={clsx(
                  styles.imgDesktop,
                  laptopImg && styles.laptopImg
                )}>
                <Image
                  layout="fixed"
                  src={imgDesktop}
                  width={imgDesktopWidth}
                  height={imgDesktopHeight}
                  alt={heading}
                  quality={100}
                  priority
                />
              </div>
              <div
                className={clsx(
                  styles.imgMobile,
                  phoneMobile && styles.phoneMobile,
                  laptopImg && styles.laptopImg
                )}>
                <Image
                  layout="fixed"
                  src={imgMobile}
                  width={imgMobileWidth}
                  height={imgMobileHeight}
                  alt={heading}
                  quality={100}
                  priority
                />
              </div>
            </div>
          </Fade>

          <div className={styles.textContent}>
            {textContentEllipse && (
              <div className={styles.textContentEllipse} />
            )}
            <Fade triggerOnce duration={600} fraction={0.5} cascade>
              <Heading text={heading} />
              <Paragraph className={styles.text}>{text}</Paragraph>
              <div>
                <Button text="Get Notified" type="button" />
              </div>
            </Fade>
          </div>
        </section>
      )
    )
  }
  return (
    <div className={styles.rootContainer}>
      <MainFeature />
      {renderFeatures()}
    </div>
  )
}

export default Features
