/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import Link from 'next/link'

import ZusLogoImg from 'public/images/Header/zus.svg'

import styles from './ZusLogo.module.scss'

const ZusLogo = () => {
  return (
    <Link href="/" passHref>
      <a className={styles.logoLink}>
        <Image
          src={`/${ZusLogoImg.src}`}
          alt="ZusLogo"
          height={40}
          width={40}
          quality={100}
        />
        <span>züs</span>
      </a>
    </Link>
  )
}

export default ZusLogo
