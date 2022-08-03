import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import PropTypes from 'prop-types'

import FooterSocialLinks from './FooterSocialLinks'
import FooterFeature from './FooterFeature'
import footerMenu from './footerMenu'
import Heading from 'components/Heading'
import IconContainer from 'components/IconContainer'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './Footer.module.scss'

let defaultfooterFeatureData = {
  heading: 'Reclaim control of your data',
  text: 'The Züs Cloud Network is a decentralized data storage network. Enabled by a cutting-edge storage protocol; secured by a novel layer 1 blockchain.',
  buttonText: 'Start building',
  secondaryBtn: true,
}

const FooterMenu = () => {
  const isMobile = useGetScreenSize()

  return (
    <div className={styles.menuContainer}>
      <Fade
        direction="up"
        duration={600}
        cascade={isMobile}
        fraction={0.4}
        triggerOnce>
        <Heading text="Go beyond the cloud" Tag="h3" />
      </Fade>

      <div className={styles.menuLinksContainer}>
        {footerMenu.map((menu) => {
          return (
            <Fade
              direction="up"
              duration={600}
              cascade={isMobile}
              fraction={0.5}
              triggerOnce
              key={menu.id}>
              <div className={styles.footerMenuItem}>
                <h5 className={styles.titleMenu}>{menu.name}</h5>
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
            </Fade>
          )
        })}
      </div>
    </div>
  )
}

const FooterBottomContainer = () => {
  return (
    <div className={styles.bottomContainer}>
      <IconContainer
        img="/images/Footer/zusLogoWhiteWithText.svg"
        alt="Züs"
        height={30}
        width={100}
      />
      <p suppressHydrationWarning>
        Copyright © 2022 ZÜS All Rights Reserved. Terms & Conditions
      </p>
    </div>
  )
}

const Footer = ({
  footerSocialLinks = true,
  footerFeature = true,
  footerFeatureData = {},
}) => {
  // Improve this logic
  if (Object.keys(footerFeatureData).length !== 0) {
    defaultfooterFeatureData = footerFeatureData
  }
  return (
    <footer className={styles.footer}>
      {footerFeature && <FooterFeature data={defaultfooterFeatureData} />}
      {footerSocialLinks && <FooterSocialLinks />}
      <FooterMenu />
      <FooterBottomContainer />
    </footer>
  )
}

Footer.propTypes = {
  footerSocialLinks: PropTypes.bool,
  footerFeature: PropTypes.bool,
  footerFeatureData: PropTypes.object,
}

export default Footer
