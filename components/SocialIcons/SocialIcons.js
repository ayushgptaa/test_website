import PropTypes from 'prop-types'

import IconContainer from '/components/IconContainer'

import styles from './SocialIcons.module.scss'

const iconsData = [
  {
    link: 'https://discord.gg/j2geZU6S',
    name: 'discord',
    img: '/images/SocialIcons/discord.svg',
  },
  {
    link: 'https://twitter.com/zuscloud',
    name: 'twitter',
    img: '/images/SocialIcons/twitter.svg',
  },
  {
    link: '/images/SocialIcons/twitter.svg',
    name: 'medium',
    img: '/images/SocialIcons/medium.svg',
  },

  {
    link: 'https://t.me/ZusCloudNetwork',
    name: 'telegram',
    img: '/images/SocialIcons/telegram.svg',
  },
]

const SocialIcons = ({ height = 28, width = 28 }) => {
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
}

export default SocialIcons
