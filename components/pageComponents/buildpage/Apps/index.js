import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'

import appsData from './appsData'

import styles from './index.module.scss'

const Apps = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        <Fade direction="up" triggerOnce cascade duration={600}>
          <Heading text="Building Resources" Tag="h3" />
          <Paragraph>
            We’ve brought together the tools and documentation to help get you
            started. Join a growing community of engineers. Build the next
            generation of the public cloud.
          </Paragraph>
        </Fade>
      </div>

      <div className={styles.apps}>
        <Fade direction="up" triggerOnce cascade duration={600} fraction={0.5}>
          {appsData.map(({ icon, name, description, btnText, link }) => (
            <div className={styles.app} key={name}>
              <div className={name && styles[`${name.toLowerCase()}`]}></div>
              <div className={styles.icon}>
                <Image
                  src={icon}
                  alt={name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className={styles.appContent}>
                <Heading text={name} Tag="h3" withoutPeriod />
                <Paragraph>{description}</Paragraph>
                <Button
                  type="button"
                  black
                  transparent
                  text={btnText}
                  link={link}
                  blank
                />
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  )
}

export default Apps
