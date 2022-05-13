import Link from 'next/link'

import IconContainer from 'components/IconContainer'
import discord from '/public/images/SocialIcons/discord.svg'
import twitter from '/public/images/SocialIcons/twitter.svg'
import telegram from '/public/images/SocialIcons/telegram.svg'

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
          img={`/${discord.src}`}
          alt="discord"
          height={20}
          width={20}
        />
        <IconContainer
          img={`/${twitter.src}`}
          alt="twitter"
          height={20}
          width={20}
        />
        <IconContainer
          img={`/${telegram.src}`}
          alt="telegram"
          height={20}
          width={20}
        />
      </div>
    </div>
  )
}

export default TopSection
