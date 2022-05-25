import PropTypes from 'prop-types'

import IconContainer from '/components/IconContainer'

import styles from './SocialIcons.module.scss'

const SocialIcons = ({ height = 28, width = 28 }) => {
  return (
    <ul className={styles.socialIcons}>
      <li>
        <a href="https://discord.gg/j2geZU6S" rel="noreferrer" target="_blank">
          <IconContainer
            img="/images/SocialIcons/discord.svg"
            alt="discord"
            height={height}
            width={width}
          />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/zuscloud" rel="noreferrer" target="_blank">
          <IconContainer
            img="/images/SocialIcons/twitter.svg"
            alt="twitter"
            height={height}
            width={width}
          />
        </a>
      </li>
      <li>
        <a href="https://t.me/ZusCloudNetwork" rel="noreferrer" target="_blank">
          <IconContainer
            img="/images/SocialIcons/telegram.svg"
            alt="telegram"
            height={height}
            width={width}
          />
        </a>
      </li>
    </ul>
  )
}

SocialIcons.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

export default SocialIcons
