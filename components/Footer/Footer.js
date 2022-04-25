import PropTypes from 'prop-types'

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
  buttonText: 'Get Started',
  secondaryBtn: true,
}

const Footer = ({
  footerFeatureData,
  showfooterBackground = true,
  showfooterFeature = true,
}) => {
  if (footerFeatureData && footerFeatureData?.length) {
    defaultfooterFeatureData = footerFeatureData
  }

  return (
    <footer className={styles.footer}>
      {showfooterBackground && <div className={styles.footerBackground}></div>}
      {showfooterFeature && <FooterFeature data={defaultfooterFeatureData} />}
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

Footer.propTypes = {
  footerFeatureData: PropTypes.object,
  showfooterBackground: PropTypes.bool,
  showfooterFeature: PropTypes.bool,
}

export default Footer
