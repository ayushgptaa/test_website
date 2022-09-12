import Image from 'next/image'
import clsx from 'clsx'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Paragraph from 'components/Paragraph'
import MainFeature from './MainFeature'

import featuresData from './featuresData'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './Features.module.scss'

const Features = () => {
  const isMobile = useGetScreenSize()
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
        link,
        button,
        blank,
      }) => (
        <section className={`${styles.container} ${customStyle}`} key={heading}>
          {ellipseRight && <div className={styles.ellipseRight} />}
          {ellipseLeft && <div className={styles.ellipseleft} />}

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
            {isMobile && (
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
            )}
          </div>

          <div className={styles.textContent}>
            {textContentEllipse && (
              <div className={styles.textContentEllipse} />
            )}

            <Heading text={heading} />
            <Paragraph className={styles.text}>{text}</Paragraph>
            <div>
              <Button text={button} type="button" link={link} blank={blank} />
            </div>
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
