import Heading from 'components/Heading'
import ButtonWithIcon from 'components/ButtonWithIcon'

import discord from '/public/images/SocialIcons/discord.svg'
import zendesk from '/public/images/earn/Provider/zendesk.svg'

import styles from './Provider.module.scss'

const buttonData = [
  { icon: discord, text: 'Talk to the community' },
  { icon: zendesk, text: 'Get technical support' },
]

const Provider = () => {
  return (
    <section className={styles.container}>
      <Heading text="Service Providers Information" />
      <p className={styles.text}>
        Have more questions you need help with? Reach out to us on the channels
        below.
      </p>
      {buttonData.map(({ icon, text }) => (
        <ButtonWithIcon icon={icon} text={text} key={text} />
      ))}
    </section>
  )
}

export default Provider
