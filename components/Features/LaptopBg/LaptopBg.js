import Image from 'next/image'

import TextContainerBorder from 'components/TextContainerBorder'
import Button from '/components/Button'

import laptopImg from '/public/images/Features/laptopImgMobile.png'

import styles from './LaptoBg.module.scss'

const data = {
  heading: 'Unbounded Storage Capacity',
  para: 'There is no limit to the amount of storage that can be put on the Züs Cloud Network. The more storage, the better.',
  btnText: 'Store',
}

const MobileBackground = () => {
  return (
    <div className={styles.laptopImgBg}>
      <Image src={laptopImg} quality={100} layout="fixed" priority={false} />

      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          {data.heading} <span>.</span>
        </h2>
        <p className={styles.para}>{data.para}</p>
        <Button type="button" text={data.btnText} black />
        <TextContainerBorder />
      </div>
    </div>
  )
}

export default MobileBackground
