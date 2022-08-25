import PropTypes from 'prop-types'
import clsx from 'clsx'

import IconContainer from '/components/IconContainer'

import SocialLinks from '/SocialLinks'

import styles from './SocialIcons.module.scss'

const { DISCORD, TWITTER, TELEGRAM } = SocialLinks

const iconsData = [
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

const SocialIcons = ({
  height = 28,
  width = 28,
  data = iconsData,
  className = '',
}) => {
  return (
    <ul className={clsx(styles.socialIcons, className)}>
      {data &&
        data.map(({ name, link, img }) => {
          return (
            <li key={name}>
              <a href={link} rel="noreferrer" target="_blank">
                <IconContainer
                  img={img}
                  alt={name}
                  height={height}
                  width={width}
                  priority
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
  data: PropTypes.array,
  className: PropTypes.string,
}

export default SocialIcons
