import Heading from 'components/Heading'
import Image from 'next/image'

import styles from './Provider.module.scss'

const buttonData = [
  {
    icon: '/images/SocialIcons/discord.svg',
    text: 'Talk to the community',
  },
  {
    icon: '/images/earn/Provider/zendesk.svg',
    text: 'Get technical support',
  },
]

const Provider = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <Heading text="Service Providers Information" />
        <p className={styles.text}>
          Have more questions you need help with? Reach out to us on the
          channels below.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        {buttonData.map(({ icon, text }) => (
          <div className={styles.button} key={text}>
            <div className={styles.icon}>
              <Image
                src={icon}
                width={80}
                height={80}
                alt={text}
                layout="fixed"
              />
            </div>
            <div className={styles.divider} />
            <span className={styles.buttonText}>{text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Provider
