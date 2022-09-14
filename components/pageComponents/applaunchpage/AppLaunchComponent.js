import Link from 'next/link'
import { useEffect } from 'react'
import Image from 'next/image'
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
    const appContainers = document.querySelectorAll('.appContainer')

    const getBorder = (index) => {
      return `.border-${index}`
    }

    const showBorder = (index) => {
      document.querySelector(getBorder(index)).style.opacity = 1
    }

    const hideBorder = (index) => {
      document.querySelector(getBorder(index)).style.opacity = 0
    }

    appContainers.forEach((appContainer, index) => {
      appContainer.addEventListener('mouseenter', showBorder.bind(null, index))
      appContainer.addEventListener('mouseleave', hideBorder.bind(null, index))
    })

    return () => {
      appContainers.forEach((appContainer) => {
        appContainer.removeEventListener('mouseenter', showBorder)
        appContainer.removeEventListener('mouseleave', hideBorder)
      })
    }
  }, [])

  return (
    <section className={styles.rootContainer}>
      <TopRightEllipse />

      <div className={styles.mainText}>
        <Heading text="The app ecosystem" className={styles.headingDesktop} />
        <Heading
          text="Dive into then app ecosystem"
          className={styles.headingMobile}
        />
        <Paragraph>See what’s possible on the Züs Cloud Network.</Paragraph>
      </div>

      <div className={styles.appLaunchwrapper}>
        <div className={styles.appLaunchContainer}>
          {applaunchData.map(
            (
              { icon, heading, text, btnText, btnTextSecondary, link },
              index
            ) => (
              <Link href={link} passHref key={heading}>
                <a href={link} className="appContainer">
                  <AppContainer>
                    <div
                      className={clsx(styles.whiteBorder, `border-${index}`)}
                    />
                    <div className={styles.containerContent}>
                      <div className={styles.iconContainer}>
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
                    <Button
                      transparent
                      text={btnText}
                      type="button"
                      link={link}
                      blank
                    />
                    {btnTextSecondary && (
                      <Button
                        transparent
                        text={btnTextSecondary}
                        type="button"
                        style={{ top: '4.5rem' }}
                      />
                    )}
                  </AppContainer>
                </a>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default AppLaunchComponent
