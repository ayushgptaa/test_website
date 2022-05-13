import Image from 'next/image'

import whitepaperData from '../whitepaperData'

import styles from './IconContainer.module.scss'

const IconContainer = () => {
  return (
    <div className={styles.rootContainer}>
      {whitepaperData.map(({ icon, text }) => (
        <div className={styles.container} key={text}>
          <div className={styles.bgPattern}></div>
          <Image
            src={icon}
            alt={text}
            quality={100}
            height={80}
            width={80}
            layout="fixed"
          />
          <p>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default IconContainer
