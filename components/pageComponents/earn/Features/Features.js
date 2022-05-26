import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
// import Button from 'components/Button'
import { ScrollSnapSection } from 'components/ScrollSnap'

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
      }) => (
        <ScrollSnapSection marginMobile="1x" alignMobile="start">
          <Fade>
            <section
              className={`${styles.container} ${customStyle}`}
              key={heading}>
              <div className={styles.imgContainer}>
                <div className={styles.imgDesktop}>
                  <Image
                    src={imgDesktop}
                    width={imgDesktopWidth}
                    height={imgDesktopHeight}
                    alt={heading}
                    quality={100}
                    priority
                  />
                </div>
                <div className={styles.imgMobile}>
                  <Image
                    src={imgMobile}
                    width={imgMobileWidth}
                    height={imgMobileHeight}
                    alt={heading}
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className={styles.textContent}>
                <Heading text={heading} />
                <p className={styles.text}>{text}</p>
                {/* <Button text="Get Notified" type="button" /> */}
              </div>
            </section>
          </Fade>
        </ScrollSnapSection>
      )
    )
  }
  return (
    <div className={styles.rootWrapper}>
      <div className={styles.ellipse} />
      {renderFeatures()}
    </div>
  )
}

export default Features
