import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import FooterCommunity from './FooterCommunity'
import FooterFeature from './FooterFeature'
import FooterProducts from './FooterProducts'
import FooterSocialIcons from './FooterSocialIcons'

import footerMenu from './footerMenu'

import styles from './Footer.module.scss'
import IconContainer from 'components/IconContainer'

let defaultfooterFeatureData = {
  heading: 'Reclaim control of your data',
  text: 'The Züs Cloud Network is a decentralized data storage network. Enabled by a cutting-edge storage protocol; secured by a novel layer 1 blockchain.',
  buttonText: 'Start building',
  secondaryBtn: true,
}

const roadmapFeatureData = {
  heading: 'The Road Ahead',
  text: "We're just getting started. Read about the key milestones that lie ahead for Züs.",
  buttonText: 'See Roadmap',
  secondaryBtn: false,
}

const FooterMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.leftmenuContainer}>
        <Fade duration={600} cascade fraction={0.4} triggerOnce>
          <IconContainer
            img="/images/Footer/zusLogoWhite.svg"
            alt="Zus"
            width={52}
            height={34}
          />

          <Heading text="Go beyond the cloud" Tag="h3" withoutPeriod />
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut lab.
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
      <Link href="/">Terms & Conditions</Link>
      <Link href="/">Privacy Policy</Link>
      <p>Copyright © 2022 ZÜS All Rights Reserved.</p>
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
