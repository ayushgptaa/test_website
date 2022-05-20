import Image from 'next/image'

import TextContainerBorder from 'components/TextContainerBorder'
import Button from '/components/Button'
import Heading from 'components/Heading'

import styles from './LaptopBg.module.scss'

const data = {
  heading: 'Unbounded Storage Capacity',
  para: 'There is no limit to the amount of storage that can be put on the Züs Cloud Network. The more storage, the better.',
  btnText: 'Store',
}

const MobileBackground = () => {
  return (
    <div className={styles.laptopImgBg}>
      <div className={styles.imgContainer}>
        <Image
          src="/images/homePage/Features/laptop.png"
          width={624}
          height={462}
          quality={100}
          priority={1}
        />
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
