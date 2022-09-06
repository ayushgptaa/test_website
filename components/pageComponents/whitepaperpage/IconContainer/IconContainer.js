import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import whitepaperData from '../whitepaperData'

import styles from './IconContainer.module.scss'

const IconContainer = () => {
  return (
    <div className={styles.rootContainer}>
      <Fade triggerOnce cascade direction="up" delay={500} duration={600}>
        {whitepaperData.map(({ icon, text, link }) => (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={styles.container}
            key={text}>
            <div className={styles.bgPattern}></div>
            <Image
              src={icon}
              alt={text}
              quality={100}
              height={80}
              width={80}
              layout="fixed"
              priority
            />
            <p>{text}</p>
          </a>
        ))}
      </Fade>
    </div>
  )
}

export default IconContainer
