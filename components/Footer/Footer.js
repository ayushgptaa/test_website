import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import IconContainer from 'components/IconContainer'
import FooterCommunity from './FooterCommunity'
import FooterFeature from './FooterFeature'
import FooterProducts from './FooterProducts'
import FooterSocialIcons from './FooterSocialIcons'

import footerMenu from './footerMenu'

import styles from './Footer.module.scss'

let defaultfooterFeatureData = {
  heading: 'Reclaim control of your data',
  text: 'Don’t trust big tech with your data?  Züs gives your absolute privacy and control.',
  buttonText: 'Start building',
  link: '/build',
  secondaryBtn: true,
}

const roadmapFeatureData = {
  heading: 'The Road Ahead',
  text: "We're just getting started. Read about the key milestones that lie ahead for Züs.",
  buttonText: 'See Roadmap',
  link: '/roadmap',
  secondaryBtn: false,
}

const FooterMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.leftmenuContainer}>
        <Fade duration={600} cascade fraction={0.4} triggerOnce>
          <IconContainer
            img="/images/Footer/zusLogoWhite.svg"
            alt="Züs"
            width={55}
            height={35}
          />

          <Heading text="The Züs family of products." Tag="h3" withoutPeriod />
          <Paragraph>
            With Zus’ variety of decentralized product solutions from storage to
            NFTs, you are sure to find the perfect option for your needs. The
            time is now. Let us help you find the perfect solution today!
          </Paragraph>
        </Fade>
      </div>

      <div className={styles.menuLinksContainer}>
        <FooterProducts />
        {footerMenu.map((menu) => {
          return (
            <Fade duration={600} fraction={0.5} triggerOnce key={menu.id}>
              <div className={styles.footerMenuItem}>
                <h5 className={styles.titleMenu}>{menu.name}</h5>
                <ul className={styles.subMenu}>
                  {menu.subLinks.map(({ name, link, ...rest }) => {
                    return (
                      <li key={name}>
                        <Link href={link || '/'} passHref>
                          <a href={link || '/'} {...rest}>
                            {name}
                          </a>
                        </Link>
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
      <Link href="/">Terms & Conditions</Link>
      <Link href="/">Privacy Policy</Link>
      <Paragraph>Copyright © 2022 ZÜS All Rights Reserved.</Paragraph>
    </div>
  )
}

const Footer = ({
  footerCommunity = true,
  footerFeature = true,
  roadmapData = false,
}) => {
  if (roadmapData) {
    defaultfooterFeatureData = roadmapFeatureData
  }

  return (
    <footer className={styles.footer}>
      {footerFeature && <FooterFeature data={defaultfooterFeatureData} />}
      {footerCommunity && <FooterCommunity />}
      <FooterMenu />
      <FooterSocialIcons />
      <FooterBottomContainer />
    </footer>
  )
}

Footer.propTypes = {
  footerCommunity: PropTypes.bool,
  footerFeature: PropTypes.bool,
  roadmapData: PropTypes.bool,
}

export default Footer
