import Image from 'next/image'

import ZusLogoImg from 'public/images/Header/zus.svg'

import styles from './ZusLogo.module.scss'

const ZusLogo = () => {
  return (
    <a href="/" className={styles.logoLink}>
      <Image
        src={ZusLogoImg}
        alt="ZusLogo"
        height={40}
        width={40}
        quality={100}
      />
      <span>züs</span>
    </a>
  )
}

export default ZusLogo
