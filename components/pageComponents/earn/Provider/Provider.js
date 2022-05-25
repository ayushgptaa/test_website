import Heading from 'components/Heading'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import styles from './Provider.module.scss'

const buttonData = [
  {
    icon: '/images/SocialIcons/discord.svg',
    link: 'https://discord.gg/j2geZU6S',
    text: 'Talk to the community',
  },
  {
    icon: '/images/earn/Provider/zendesk.svg',
    link: '/',
    text: 'Talk to the community',
  },
]

const Provider = () => {
  return (
    <section className={styles.container}>
      <Fade>
        <div className={styles.textContainer}>
          <Heading text="Service Providers Information" />
          <p className={styles.text}>
            Have more questions you need help with? Reach out to us on the
            channels below.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          {buttonData.map(({ link, icon, text }) => (
            <a
              href={link}
              rel="noreferrer"
              target="_blank"
              className={styles.button}
              key={text}>
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
            </a>
          ))}
        </div>
      </Fade>
    </section>
  )
}

export default Provider
