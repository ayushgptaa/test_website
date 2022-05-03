import Image from 'next/image'

import Heading from 'components/Heading'
import Button from 'components/Button'

import featuresData from './featuresData'

import styles from './Features.module.scss'

const Features = () => {
  const renderFeatures = () => {
    return featuresData.map(({ imgDesktop, imgMobile, heading, text }) => (
      <section className={styles.container} key={heading}>
        <div className={styles.imgContainer}>
          <div className={styles.imgDesktop}>
            <Image src={imgDesktop} alt={heading} quality={100} />
          </div>
          <div className={styles.imgMobile}>
            <Image src={imgMobile} alt={heading} quality={100} />
          </div>
        </div>
        <div className={styles.textContent}>
          <Heading text={heading} />
          <p className={styles.text}>{text}</p>
          <Button text="Get Notified" type="button" />
        </div>
      </section>
    ))
  }
  return (
    <div className={styles.rootWrapper}>
      <div className={styles.ellipse} />
      {renderFeatures()}
    </div>
  )
}

export default Features
