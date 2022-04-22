import IconContainer from '/components/IconContainer'

import discord from '/public/images/SocialIcons/discord.svg'
import twitter from '/public/images/SocialIcons/twitter.svg'
import telegram from '/public/images/SocialIcons/telegram.svg'

import styles from './SocialIcons.module.scss'

const SocialIcons = () => {
  return (
    <ul className={styles.socialIcons}>
      <li>
        <IconContainer img={discord} alt="discord" height={28} width={28} />
      </li>
      <li>
        <IconContainer img={twitter} alt="twitter" height={28} width={28} />
      </li>
      <li>
        <IconContainer img={telegram} alt="telegram" />
      </li>
    </ul>
  )
}

export default SocialIcons
