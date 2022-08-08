import Link from 'next/link'
import propTypes from 'prop-types'

import Button from 'components/Button'

import navData from '../navData'

import styles from './DesktopNav.module.scss'

const DesktopNav = ({ removeDesktopNav }) => {
  return (
    !removeDesktopNav && (
      <div className={styles.wrapper}>
        {navData.map(({ name, link }) => (
          <span key={name}>
            <Link href={link}>{name}</Link>
          </span>
        ))}

        <Button
          type="button"
          text="Launch Apps"
          black
          transparent
          link="/launch-apps"
        />
      </div>
    )
  )
}

DesktopNav.propTypes = {
  removeDesktopNav: propTypes.bool,
}

export default DesktopNav
