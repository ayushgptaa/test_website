import Image from 'next/image'

import Button from '/components/Button'
import Heading from 'components/Heading'

import styles from './MobileBg.module.scss'

const data = {
  heading: 'An Incentive to Scale',
  para: 'A crypto economic model that rewards network growth. As more data isstored on the network, more Züs Cloud Network ($ZCN) tokens are staked on the network.',
  btnText: 'Token Economics',
}

const MobileBackground = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/images/homePage/Features/iphone.png"
          width={786}
          height={799}
          quality={100}
          priority={1}
        />
        <div className={styles.firstLayer} />
        <div className={styles.secondLayer} />
        <div className={styles.thirdLayer} />
        <div className={styles.fourthLayer} />
      </div>
      <div className={styles.textContainer}>
        <Heading text={data.heading} />
        <p className={styles.para}>{data.para}</p>
        <Button type="button" text={data.btnText} black />
      </div>
    </div>
  )
}

export default MobileBackground
