import Image from 'next/image'

import styles from './index.module.scss'

const HeaderImgComponent = () => {
  return (
    <div className={styles.imgContainer}>
      <Image
        src="/images/homePage/Hero/hero-img.png"
        width={876}
        height={527}
        priority
      />
    </div>
  )
}

export default HeaderImgComponent
