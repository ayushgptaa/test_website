import Link from 'next/link'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import navData from '../navData'

import styles from './Mobilenav.module.scss'
import SocialIcons from 'components/SocialIcons'

const MobileNav = ({ animation }) => {
  return (
    <motion.nav
      className={styles.mobileNav}
      initial={{ x: '150%', display: 'none' }}
      animate={animation}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
      }}>
      <ul className={styles.navlinksContainer}>
        {navData.map(({ name, link }) => (
          <li key={name}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
        <Button
          type="button"
          text="Launch Apps"
          black
          transparent
          link="/launch-apps"
        />
      </ul>
      <SocialIcons height={28} width={28} className={styles.socialIcons} />
    </motion.nav>
  )
}

MobileNav.propTypes = {
  animation: PropTypes.object.isRequired,
}

export default MobileNav
