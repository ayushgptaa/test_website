import PropTypes from 'prop-types'

import IconContainer from '/components/IconContainer'

import SocialLinks from '/SocialLinks'

import styles from './SocialIcons.module.scss'

const { DISCORD, TWITTER, TELEGRAM } = SocialLinks

let iconsData = [
  {
    link: DISCORD,
    name: 'discord',
    img: '/images/SocialIcons/discord.svg',
  },
  {
    link: TWITTER,
    name: 'twitter',
    img: '/images/SocialIcons/twitter.svg',
  },
  {
    link: TELEGRAM,
    name: 'telegram',
    img: '/images/SocialIcons/telegram.svg',
  },
]

const SocialIcons = ({ height = 28, width = 28, footerIcons = [] }) => {
  if (footerIcons?.length !== 0) iconsData = footerIcons

  return (
    <ul className={styles.socialIcons}>
      {iconsData.map(({ name, link, img }) => {
        return (
          <li key={name}>
            <a href={link} rel="noreferrer" target="_blank">
              <IconContainer
                img={img}
                alt={name}
                height={height}
                width={width}
              />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

SocialIcons.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  footerIcons: PropTypes.array,
}

export default SocialIcons
