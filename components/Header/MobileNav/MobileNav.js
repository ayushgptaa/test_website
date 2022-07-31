import Link from 'next/link'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import navData from '../navData'

import styles from './Mobilenav.module.scss'

const MobileNav = ({ animation }) => {
  return (
    <motion.nav
      className={styles.mobileNav}
      initial={{ x: '150%', display: 'none' }}
      animate={animation}
      transition={{ duration: 0.5, type: 'linear', ease: 'easeInOut' }}>
      <ul className={styles.navlinksContainer}>
        {navData.map(({ name, link }) => (
          <li key={name}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

MobileNav.propTypes = {
  animation: PropTypes.object.isRequired,
}

export default MobileNav
