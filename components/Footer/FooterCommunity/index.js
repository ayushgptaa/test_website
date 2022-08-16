import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import SocialIcons from 'components/SocialIcons'

import SocialLinks from '/SocialLinks'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './index.module.scss'

const { DISCORD, TWITTER, TELEGRAM, MEDIUM } = SocialLinks

const footerIcons = [
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
    link: MEDIUM,
    name: 'medium',
    img: '/images/SocialIcons/medium.svg',
  },
  {
    link: TELEGRAM,
    name: 'telegram',
    img: '/images/SocialIcons/telegram.svg',
  },
]

const FooterCommunity = () => {
  const isMobile = useGetScreenSize()

  const dimensions = isMobile ? 32 : 64

  return (
    <div className={styles.socialLinksContainer}>
      <div className={styles.background} />
      <div className={styles.textContent}>
        <Fade direction="up" cascade triggerOnce duration={600} fraction={0.5}>
          <Heading text="Join the Community" Tag="h3" />
          <Paragraph>
            Join the conversation in our community groups. Share ideas,
            throughts, feedbaack and help us grow this unique network. You’ll
            find us on the usual channels below
          </Paragraph>

          <SocialIcons
            height={dimensions}
            width={dimensions}
            footerIcons={footerIcons}
          />
        </Fade>
      </div>
    </div>
  )
}

export default FooterCommunity
