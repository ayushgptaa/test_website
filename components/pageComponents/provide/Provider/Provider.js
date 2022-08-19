import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import useGetScreenSize from 'hooks/useGetScreenSize'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import styles from './Provider.module.scss'

const providerData = [
  {
    icon: '/images/provide/Provider/whitepaper.svg',
    iconDesktop: '/images/provide/Provider/whitepaperDesktop.svg',
    heading: 'Whitepaper',
    text: 'Read Blimp whitepaper in order to underdstand the requirements and features.',
  },
  {
    icon: '/images/provide/Provider/documentation.svg',
    iconDesktop: '/images/provide/Provider/documentationDesktop.svg',
    heading: 'Documentation',
    text: 'Visit the 0Chain documentation for detailed guides and setup instructions.',
  },
  {
    icon: '/images/provide/Provider/forum.svg',
    iconDesktop: '/images/provide/Provider/forumDesktop.svg',
    heading: 'Forum',
    text: 'Check our forum to ask questions and find resources for common, and not-so-common questions.',
  },
]

const Provider = () => {
  const isMobile = useGetScreenSize()

  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <Fade direction="up" cascade duration={800} tiggerOnce>
          <Heading
            text="Service Providers Information"
            Tag="h3"
            withoutPeriod
          />
          <Paragraph className={styles.text}>
            Have more questions you need help with? Reach out to us on the
            channels below.
          </Paragraph>
        </Fade>
      </div>

      <div className={styles.iconContainerWrapper}>
        <Fade
          direction="up"
          triggerOnce
          duration={800}
          fraction={isMobile ? 0 : 0.5}
          cascade>
          {providerData.map(({ icon, iconDesktop, heading, text }) => (
            <div className={styles.iconContainer} key={heading}>
              <div className={styles.arrowIcon} />
              <div className={styles.icon}>
                <Image
                  src={isMobile ? icon : iconDesktop}
                  alt={heading}
                  height={80}
                  width={80}
                  layout="fixed"
                />
              </div>
              <h4>{heading}</h4>
              <Paragraph>{text}</Paragraph>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  )
}

export default Provider
