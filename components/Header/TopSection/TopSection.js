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
        <span>Whitepapers</span>
        <IconContainer img={discord} alt="discord" height={20} width={20} />
        <IconContainer img={twitter} alt="twitter" height={20} width={20} />
        <IconContainer img={telegram} alt="telegram" height={20} width={20} />
      </div>
    </div>
  )
}

export default TopSection
