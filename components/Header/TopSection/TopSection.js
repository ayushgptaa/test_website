import Link from 'next/link'
import clsx from 'clsx'
import propTypes from 'prop-types'

import SocialIcons from 'components/SocialIcons'

import styles from './TopSection.module.scss'

const TopSection = ({ removeSocialIcons, borderWhite }) => {
  return (
    <div className={clsx(styles.wrapper, borderWhite && styles.borderWhite)}>
      <div className={styles.wrapperLeft}>
        <span>EN</span>
      </div>
      {!removeSocialIcons && (
        <div className={styles.wrapperRight}>
          <span>
            <Link href="/whitepapers">Whitepapers</Link>
          </span>
          <SocialIcons height={24} width={24} />
        </div>
      )}
    </div>
  )
}

TopSection.propTypes = {
  removeSocialIcons: propTypes.bool,
  borderWhite: propTypes.bool,
}

export default TopSection
