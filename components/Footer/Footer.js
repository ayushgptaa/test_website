import PropTypes from 'prop-types'
import Link from 'next/link'

import Accordion from 'components/Accordion'
import Button from 'components/Button'
import Heading from 'components/Heading'
import SocialIcons from 'components/SocialIcons'
import ZusLogo from 'components/ZusLogo'
import FooterFeature from './FooterFeature'

import styles from './Footer.module.scss'

let defaultfooterFeatureData = {
  heading: 'Reclaim control of your data',
  text: ' The Züs Cloud Network is a decentralized data storage network. Enabled by a cutting-edge storage protocol; secured by a novel layer 1 blockchain.',
  buttonText: 'Launch Apps',
  secondaryBtn: true,
}

const footerMenu = [
  { id: 0, name: 'Store', subLinks: ['What Züs can do', 'Launch Apps'] },
  {
    id: 1,
    name: 'Build',
    subLinks: [
      'Build for the Future',
      'Join the Community',
      'Documentation',
      'API',
      'GitHub',
      'Roadmap',
      'Zendesk Support',
    ],
  },
  {
    id: 2,
    name: 'Earn',
    subLinks: ['Earn Rewards', 'Register', 'Explore with Atlas'],
  },
  {
    id: 3,
    name: 'About',
    subLinks: ['Meet the Team', 'News', 'Press & Media', 'Contact Züs'],
  },
]

const Footer = ({
  footerFeatureData,
  showfooterBackground = true,
  showfooterFeature = true,
}) => {
  if (footerFeatureData && footerFeatureData?.length) {
    defaultfooterFeatureData = footerFeatureData
  }

  const renderMobile = () => {
    return (
      <div className={styles.mobileContainer}>
        <ZusLogo />
        <Heading text="Go beyond the cloud" />
        <Button text="Whitepapers" type="button" black transparent />
        <SocialIcons />
        <Accordion data={footerMenu} />
        <p className={styles.bottomText}>
          Copyright © 2022 ZÜS All Rights Reserved. Terms & Conditions
        </p>
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
                    {menu.subLinks.map((subLink) => {
                      return (
                        <li key={subLink}>
                          <Link href="/">{subLink}</Link>
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
          <span>
            Copyright © 2022 ZÜS All Rights Reserved. Terms & Conditions
          </span>
        </p>
      </div>
    )
  }

  return (
    <footer className={styles.footer}>
      {showfooterBackground && <div className={styles.footerBackground}></div>}
      {showfooterFeature && <FooterFeature data={defaultfooterFeatureData} />}
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
