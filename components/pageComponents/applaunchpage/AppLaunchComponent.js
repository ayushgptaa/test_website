import Image from 'next/image'
import { Fade, Zoom } from 'react-awesome-reveal'

import Container from './Container'
import Heading from 'components/Heading'
import Text from 'components/Text'

import applaunchData from './applaunchData'

import styles from './AppLaunch.module.scss'

const AppLaunchComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.ellipse} />

      <div className={styles.mainText}>
        <Fade direction="up" cascade>
          <Heading text="Dive into the app ecosystem" uppercase />
          <Text>See what’s possible on the Züs Cloud Network.</Text>
        </Fade>
      </div>
      <Zoom cascade>
        <div className={styles.appLaunchContainer}>
          {applaunchData.map(({ icon, heading, text, btnText }) => (
            <Container key={heading}>
              <div className={styles.containerContent}>
                <div className={styles.iconContainer}>
                  <Image
                    src={icon}
                    width={icon.width}
                    height={icon.height}
                    alt={heading}
                    layout="fixed"
                  />
                </div>
                <Heading text={heading} />
                <Text>{text}</Text>
              </div>
              <button type="button">{btnText}</button>
            </Container>
          ))}
          <Container textContainer>
            <Heading text="More coming soon" />
          </Container>
        </div>
      </Zoom>
    </section>
  )
}

export default AppLaunchComponent
