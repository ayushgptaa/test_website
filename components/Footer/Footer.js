import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Accordion from 'components/Footer/FooterAccordian'
import Button from 'components/Button'
import Heading from 'components/Heading'
import SocialIcons from 'components/SocialIcons'
import ZusLogo from 'components/ZusLogo'
import FooterFeature from './FooterFeature'

import footerMenu from './footerMenu'

import styles from './Footer.module.scss'

const defaultfooterFeatureData = {
  heading: 'Reclaim control of your data',
  text: 'The Züs Cloud Network is a decentralized data storage network that delivers data ownership to the user. Become part of the movement.',
  buttonText: 'Launch Apps',
  secondaryBtn: true,
}

const Footer = ({
  footerFeatureData,
  showfooterBackground = true,
  showfooterFeature = true,
}) => {
  const [featureData, setFeatureData] = useState(defaultfooterFeatureData)
  const router = useRouter()

  useEffect(() => {
    if (footerFeatureData) {
      setFeatureData(footerFeatureData)
    } else {
      setFeatureData(defaultfooterFeatureData)
    }
  }, [footerFeatureData])

  const renderMobile = () => {
    return (
      <div className={styles.mobileContainer}>
        <ZusLogo />
        <Heading text="Go beyond the cloud" />
        <Button
          text="Whitepapers"
          type="button"
          black
          transparent
          onClick={() => router.push('/whitepapers')}
        />
        <SocialIcons />
        <Accordion data={footerMenu} />
        <span suppressHydrationWarning className={styles.bottomText}>
          Copyright © 2022 ZÜS All Rights Reserved. Terms & Conditions
        </span>
      </div>
    )
  }

  const renderDesktop = () => {
    return (
      <div className={styles.desktopContainer}>
        <div className={styles.menuContainer}>
          <Heading text="Go beyond the cloud" />
          <div className={styles.footerMenu}>
            {footerMenu.map((menu) => {
              return (
                <div key={menu.id} className={styles.footerMenuItem}>
                  <span className={styles.titleMenu}>{menu.name}</span>
                  <ul className={styles.subMenu}>
                    {menu.subLinks.map(({ name, link }) => {
                      return (
                        <li key={name}>
                          <Link href={link ? `/${link}` : '/'}>{name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <p className={styles.bottomContainer}>
          <ZusLogo />
          <span suppressHydrationWarning>
            Copyright © 2022 ZÜS All Rights Reserved. Terms & Conditions
          </span>
        </p>
      </div>
    )
  }

  return (
    <footer className={styles.footer}>
      {showfooterBackground && <div className={styles.footerBackground}></div>}
      {showfooterFeature && <FooterFeature data={featureData} />}
      {renderMobile()}
      {renderDesktop()}
    </footer>
  )
}

Footer.propTypes = {
  footerFeatureData: PropTypes.object,
  showfooterBackground: PropTypes.bool,
  showfooterFeature: PropTypes.bool,
}

export default Footer
