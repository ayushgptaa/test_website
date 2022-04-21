import Accordion from 'components/Accordion'
import Button from 'components/Button'
import Heading from 'components/Heading'
import SocialIcons from 'components/SocialIcons'
import ZusLogo from 'components/ZusLogo'
import FooterFeature from './FooterFeature'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBackground}></div>
      <FooterFeature />
      <div className={styles.iconContainer}>
        <ZusLogo />
        <Heading text="Go beyond the cloud" />
        <Button text="Whitepapers" type="button" black transparent />
        <SocialIcons />
        <Accordion />
      </div>
      <p className={styles.bottomText}>
        Copyright © 2022 ZÜS All Rights Reserved. Terms & Conditions
      </p>
    </footer>
  )
}

export default Footer
