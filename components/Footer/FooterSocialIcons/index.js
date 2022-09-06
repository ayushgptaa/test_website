import IconContainer from 'components/IconContainer'

import styles from './index.module.scss'

import { SocialLinks } from '/SocialLinks/links'

const {
  DISCORD,
  TWITTER,
  TELEGRAM,
  MEDIUM,
  LINKEDIN,
  FACEBOOK,
  GITHUB,
  YOUTUBE,
} = SocialLinks

const topIcons = [
  {
    name: 'discord',
    icon: '/images/Footer/footerIcons/discord.svg',
    link: DISCORD,
  },
  {
    name: 'twitter',
    icon: '/images/Footer/footerIcons/twitter.svg',
    link: TWITTER,
  },
  {
    name: 'facebook',
    icon: '/images/Footer/footerIcons/facebook.svg',
    link: FACEBOOK,
  },
  {
    name: 'linkedin',
    icon: '/images/Footer/footerIcons/linkedin.svg',
    link: LINKEDIN,
  },
]

const bottomIcons = [
  {
    name: 'youtube',
    icon: '/images/Footer/footerIcons/youtube.svg',
    link: YOUTUBE,
  },
  {
    name: 'github',
    icon: '/images/Footer/footerIcons/github.svg',
    link: GITHUB,
  },
  {
    name: 'medium',
    icon: '/images/Footer/footerIcons/medium.svg',
    link: MEDIUM,
  },
  {
    name: 'telegram',
    icon: '/images/Footer/footerIcons/telegram.svg',
    link: TELEGRAM,
  },
]

const TopIcons = () => {
  return (
    <div className={styles.topIcons}>
      {topIcons.map(({ name, icon, link }) => {
        return (
          <a
            href={link}
            target="_black"
            rel="noreferrer"
            key={name}
            className={styles.icon}>
            <IconContainer img={icon} alt={name} height={40} width={40} />
          </a>
        )
      })}
    </div>
  )
}

const BottomIcons = () => {
  return (
    <div className={styles.bottomIcons}>
      {bottomIcons.map(({ name, icon, link }) => {
        return (
          <a
            href={link}
            target="_black"
            rel="noreferrer"
            key={name}
            className={styles.icon}>
            <IconContainer img={icon} alt={name} height={40} width={40} />
          </a>
        )
      })}
    </div>
  )
}

const FooterSocialIcons = () => {
  return (
    <div className={styles.rootContainer}>
      <TopIcons />
      <BottomIcons />
    </div>
  )
}

export default FooterSocialIcons
