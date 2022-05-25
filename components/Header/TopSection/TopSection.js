import Link from 'next/link'

import SocialIcons from 'components/SocialIcons'

import styles from './TopSection.module.scss'

const TopSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperLeft}>
        <span>EN</span>
      </div>
      <div className={styles.wrapperRight}>
        <span>
          <Link href="/whitepapers">Whitepapers</Link>
        </span>
        <SocialIcons height={24} width={24} />
      </div>
    </div>
  )
}

export default TopSection
