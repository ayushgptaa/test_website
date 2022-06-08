import Link from 'next/link'
import propTypes from 'prop-types'

import SocialIcons from 'components/SocialIcons'

import styles from './TopSection.module.scss'

const TopSection = ({ removeSocialIcons }) => {
  return (
    <div className={styles.wrapper}>
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
}

export default TopSection
