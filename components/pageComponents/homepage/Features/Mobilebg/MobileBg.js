import Image from 'next/image'

import Button from '/components/Button'
import Heading from 'components/Heading'

import iphoneImgMobile from '/public/images/homePage/Features/iphoneImgMobile.png'

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
          src={iphoneImgMobile}
          quality={100}
          priority={false}
          layout="responsive"
        />
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
