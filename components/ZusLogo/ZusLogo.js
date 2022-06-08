/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import Link from 'next/link'
import propTypes from 'prop-types'

import styles from './ZusLogo.module.scss'

const ZusLogo = ({ removeZusText }) => {
  return (
    <Link href="/" passHref>
      <a className={styles.logoLink}>
        <Image
          src="/images/Header/zus.svg"
          alt="ZusLogo"
          height={40}
          width={40}
          quality={100}
          priority
        />
        {!removeZusText && <span>züs</span>}
      </a>
    </Link>
  )
}

ZusLogo.propTypes = {
  removeZusText: propTypes.bool,
}

export default ZusLogo
