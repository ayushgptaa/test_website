import IconContainer from '/components/IconContainer'
import PropTypes from 'prop-types'

import styles from './SocialIcons.module.scss'
import { Fade } from 'react-awesome-reveal'

const SocialIcons = ({ height = 28, width = 28 }) => {
  return (
    <ul className={styles.socialIcons}>
      <Fade direction="up">
        <li>
          <IconContainer
            img="/images/SocialIcons/discord.svg"
            alt="discord"
            height={height}
            width={width}
          />
        </li>
        <li>
          <IconContainer
            img="/images/SocialIcons/twitter.svg"
            alt="twitter"
            height={height}
            width={width}
          />
        </li>
        <li>
          <IconContainer
            img="/images/SocialIcons/telegram.svg"
            alt="telegram"
            height={height}
            width={width}
          />
        </li>
      </Fade>
    </ul>
  )
}

SocialIcons.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

export default SocialIcons
