import { useEffect } from 'react'
import Image from 'next/image'
import { Fade, Zoom } from 'react-awesome-reveal'
import clsx from 'clsx'

import AppContainer from './AppContainer'
import Heading from 'components/Heading'
import Text from 'components/Text'
import Button from 'components/Button'

import applaunchData from './applaunchData'

import styles from './AppLaunch.module.scss'

const AppLaunchComponent = () => {
  useEffect(() => {
    const IconContainers = document.querySelectorAll('.IconContainer')

    const getBorder = (index) => {
      return `.border-${index}`
    }

    const showBorder = (index) => {
      document.querySelector(getBorder(index)).style.opacity = 1
    }

    const hideBorder = (index) => {
      document.querySelector(getBorder(index)).style.opacity = 0
    }

    IconContainers.forEach((IconContainer, index) => {
      IconContainer.addEventListener('mouseenter', showBorder.bind(null, index))
      IconContainer.addEventListener('mouseleave', hideBorder.bind(null, index))
    })

    return () => {
      IconContainers.forEach((IconContainer) => {
        IconContainer.removeEventListener('mouseenter', showBorder)
        IconContainer.removeEventListener('mouseleave', hideBorder)
      })
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
            ({ icon, heading, text, btnText, btnTextSecondary }, index) => (
              <AppContainer key={heading}>
                <div className={clsx(styles.whiteBorder, `border-${index}`)} />
                <div className={styles.containerContent}>
                  <div className={clsx(styles.iconContainer, 'IconContainer')}>
                    <Image
                      src={icon}
                      width={icon.width}
                      height={icon.height}
                      alt={heading}
                      layout="fixed"
                      priority="false"
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
              </AppContainer>
            )
          )}
          <AppContainer textContainer>
            <Heading text="More coming soon" />
          </AppContainer>
        </div>
      </Zoom>
    </section>
  )
}

export default AppLaunchComponent
