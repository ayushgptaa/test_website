import Image from 'next/image'
import propTypes from 'prop-types'
import clsx from 'clsx'

import styles from './index.module.scss'

const HeaderImgComponent = ({ removeImg = false }) => {
  return (
    <div className={clsx(styles.imgContainer, removeImg && styles.removeImg)}>
      <Image
        src="/images/homePage/Hero/hero-img.png"
        width={876}
        height={527}
        priority
      />
    </div>
  )
}

HeaderImgComponent.propTypes = {
  removeImg: propTypes.bool,
}

export default HeaderImgComponent
