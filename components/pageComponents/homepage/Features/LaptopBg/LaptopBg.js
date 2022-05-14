import Image from 'next/image'

import TextContainerBorder from 'components/TextContainerBorder'
import Button from '/components/Button'
import Heading from 'components/Heading'

import laptopDesktop from '/public/images/homePage/Features/laptopDesktop.svg'
import laptopMobile from '/public/images/homePage/Features/laptopMobile.svg'

import styles from './LaptoBg.module.scss'

const data = {
  heading: 'Unbounded Storage Capacity',
  para: 'There is no limit to the amount of storage that can be put on the Züs Cloud Network. The more storage, the better.',
  btnText: 'Store',
}

const MobileBackground = () => {
  return (
    <div className={styles.laptopImgBg}>
      <div className={styles.imgContainer}>
        <div className={styles.laptopDesktop}>
          <Image
            src={laptopDesktop}
            quality={100}
            layout="responsive"
            priority={1}
          />
        </div>
        <div className={styles.laptopMobile}>
          <Image
            src={laptopMobile}
            quality={100}
            layout="responsive"
            priority={1}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <Heading text={data.heading} />
        <p className={styles.para}>{data.para}</p>
        <Button type="button" text={data.btnText} black />
        <div className={styles.textDetails}>
          <TextContainerBorder />
        </div>
      </div>
    </div>
  )
}

export default MobileBackground
