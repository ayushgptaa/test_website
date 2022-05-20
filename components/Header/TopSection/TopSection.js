import Link from 'next/link'

import IconContainer from 'components/IconContainer'

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
        <IconContainer
          img="/images/SocialIcons/discord.svg"
          alt="discord"
          height={20}
          width={20}
        />
        <IconContainer
          img="/images/SocialIcons/twitter.svg"
          alt="twitter"
          height={20}
          width={20}
        />
        <IconContainer
          img="/images/SocialIcons/telegram.svg"
          alt="telegram"
          height={20}
          width={20}
        />
      </div>
    </div>
  )
}

export default TopSection
