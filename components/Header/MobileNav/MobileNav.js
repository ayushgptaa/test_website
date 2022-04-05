import Link from 'next/link'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import styles from './Mobilenav.module.scss'

const MobileNav = ({ animation }) => {
  return (
    <motion.nav
      className={styles.mobileNav}
      initial={{ x: '150%', display: 'none' }}
      animate={animation}
      transition={{ duration: 0.7, type: 'spring', ease: 'easeInOut' }}>
      <ul className={styles.navlinksContainer}>
        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/build">Build</Link>
        </li>
        <li>
          <Link href="/earn">Earn</Link>
        </li>
      </ul>
    </motion.nav>
  )
}

MobileNav.propTypes = {
  animation: PropTypes.object.isRequired,
}

export default MobileNav
