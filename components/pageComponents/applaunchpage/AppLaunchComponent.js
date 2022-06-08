import { useEffect } from 'react'
import Image from 'next/image'
import { Fade, Zoom } from 'react-awesome-reveal'

import Container from './Container'
import Heading from 'components/Heading'
import Text from 'components/Text'
import Button from 'components/Button'

import applaunchData from './applaunchData'

import styles from './AppLaunch.module.scss'

const AppLaunchComponent = () => {
  useEffect(() => {
    const IconContainer = document.getElementById('IconContainer')
    const vultBorder = document.getElementById('vultBorder')

    const showBorder = () => {
      vultBorder.style.opacity = 1
    }

    const hideBorder = () => {
      vultBorder.style.opacity = 0
    }

    IconContainer.addEventListener('mouseenter', showBorder)
    IconContainer.addEventListener('mouseleave', hideBorder)

    return () => {
      IconContainer.removeEventListener('mouseenter', showBorder)
      IconContainer.removeEventListener('mouseleave', hideBorder)
    }
  }, [])

  return (
    <section className={styles.rootContainer}>
      <div className={styles.ellipse} />

      <div className={styles.mainText}>
        <Fade direction="up" cascade>
          <Heading text="The App ecosystem" uppercase />
          <Text>See what’s possible on the Züs Cloud Network.</Text>
        </Fade>
      </div>
      <Zoom cascade>
        <div className={styles.appLaunchContainer}>
          {applaunchData.map(
            ({ icon, heading, text, btnText, border, btnTextSecondary }) => (
              <Container key={heading}>
                <div
                  className={styles.whiteBorder}
                  id={border && 'vultBorder'} />
                <div className={styles.containerContent}>
                  <div className={styles.iconContainer} id="IconContainer">
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
                <Button transparent text={btnText} type="button" />
                {btnTextSecondary && (
                  <Button
                    transparent
                    text={btnTextSecondary}
                    type="button"
                    style={{ top: '4.5rem' }}
                  />
                )}
              </Container>
            )
          )}
          <Container textContainer>
            <Heading text="More coming soon" />
          </Container>
        </div>
      </Zoom>
    </section>
  )
}

export default AppLaunchComponent
