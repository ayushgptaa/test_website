import IconContainer from '/components/IconContainer'
import PropTypes from 'prop-types'

import discord from '/public/images/SocialIcons/discord.svg'
import twitter from '/public/images/SocialIcons/twitter.svg'
import telegram from '/public/images/SocialIcons/telegram.svg'

import styles from './SocialIcons.module.scss'

const SocialIcons = ({ height = 28, width = 28 }) => {
  return (
    <ul className={styles.socialIcons}>
      <li>
        <IconContainer
          img={`/${discord.src}`}
          alt="discord"
          height={height}
          width={width}
        />
      </li>
      <li>
        <IconContainer
          img={`/${twitter.src}`}
          alt="twitter"
          height={height}
          width={width}
        />
      </li>
      <li>
        <IconContainer
          img={`/${telegram.src}`}
          alt="telegram"
          height={height}
          width={width}
        />
      </li>
    </ul>
  )
}

SocialIcons.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

export default SocialIcons
