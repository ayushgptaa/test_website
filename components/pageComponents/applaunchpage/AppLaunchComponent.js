import { useEffect } from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import clsx from 'clsx'

import TopRightEllipse from 'components/TopRightEllipse'
import AppContainer from './AppContainer'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
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
      <TopRightEllipse />

      <div className={styles.mainText}>
        <Fade direction="up" cascade triggerOnce duration={1000}>
          <Heading text="The app ecosystem" className={styles.headingDesktop} />
          <Heading
            text="Dive into then app ecosystem"
            className={styles.headingMobile}
          />
          <Paragraph>See what’s possible on the Züs Cloud Network.</Paragraph>
        </Fade>
      </div>

      <div className={styles.appLaunchContainer}>
        <Fade direction="up" cascade triggerOnce duration={600} fraction={0.2}>
          {applaunchData.map(
            ({ icon, heading, text, btnText, btnTextSecondary }, index) => (
              <AppContainer key={heading}>
                <div className={clsx(styles.whiteBorder, `border-${index}`)} />
                <div className={styles.containerContent}>
                  <div className={clsx(styles.iconContainer, 'IconContainer')}>
                    <Image
                      src={icon}
                      width={90}
                      height={90}
                      alt={heading}
                      layout="fixed"
                      priority="false"
                    />
                  </div>
                  <Heading text={heading} />
                  <Paragraph>{text}</Paragraph>
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
        </Fade>
      </div>
    </section>
  )
}

export default AppLaunchComponent
