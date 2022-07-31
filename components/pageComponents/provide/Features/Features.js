import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import clsx from 'clsx'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Paragraph from 'components/Paragraph'

import featuresData from './featuresData'

import styles from './Features.module.scss'

const mainFeature = [
  {
    mainHeading: 'Want to learn more about the rewards?',
    mainText:
      'There are many ways you can earn rewards in the Züs ecosystem. Read our Token Economics document to learn more about our sustainable rewards model.',
    btnText: 'Token Economics',
    serial: '1',
  },
  {
    mainHeading: 'Want to add Servers to the Network?',
    mainText:
      'Getting your Servers connected to our network is straightforward. To help, we’ve assembled a comprehensive Installation Guide.',
    btnText: 'Installation guide',
    serial: '2',
  },
]

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
          <Fade
            direction="up"
            triggerOnce
            duration={800}
            fraction={0.5}
            cascade>
            <div className={styles.textContent}>
              {textContentEllipse && (
                <div className={styles.textContentEllipse} />
              )}
              <Heading text={heading} />
              <Paragraph className={styles.text}>{text}</Paragraph>
              <Button text="Get Notified" type="button" />
            </div>
          </Fade>
        </section>
      )
    )
  }
  return (
    <div className={styles.rootWrapper}>
      <section className={styles.mainFeatures}>
        <Fade direction="up" triggerOnce duration={800} fraction={0.3} cascade>
          {mainFeature.map(({ mainHeading, mainText, btnText, serial }) => (
            <div className={styles.blueContainer} key={serial}>
              <Heading text={mainHeading} Tag="h3" withoutPeriod />
              <Paragraph>{mainText}</Paragraph>
              <Button type="button" text={btnText} transparent black />
            </div>
          ))}
        </Fade>
      </section>
      {renderFeatures()}
    </div>
  )
}

export default Features
