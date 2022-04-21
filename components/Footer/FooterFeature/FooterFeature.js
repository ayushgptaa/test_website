import Image from 'next/image'

import Heading from 'components/Heading'
import Button from 'components/Button'

import ZusLogoWhite from '/public/images/Footer/zusLogoWhite.svg'

import styles from './FooterFeature.module.scss'

const FooterFeature = () => {
  return (
    <div className={styles.container}>
      <Image src={ZusLogoWhite} alt="züs" quality={100} />
      <Heading text="Reclaim control of your data" />
      <p className={styles.text}>
        The Züs Cloud Network is a decentralized data storage network. Enabled
        by a cutting-edge storage protocol; secured by a novel layer 1
        blockchain.
      </p>
      <div className={styles.buttons}>
        <Button text="Launch Apps" type="button" />
        <Button text="Start Building" type="button" black transparent />
      </div>
    </div>
  )
}

export default FooterFeature
