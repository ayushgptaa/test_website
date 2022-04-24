import Image from 'next/image'
import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import Button from 'components/Button'

import ZusLogoWhite from '/public/images/Footer/zusLogoWhite.svg'

import styles from './FooterFeature.module.scss'

const FooterFeature = ({ data }) => {
  return (
    <div className={styles.container}>
      <Image src={ZusLogoWhite} alt="züs" quality={100} />
      <Heading text={data.heading} />
      <p className={styles.text}>{data.text}</p>
      <div className={styles.buttons}>
        <Button text={data.buttonText} type="button" />
        {data.secondaryBtn && (
          <Button text="Start Building" type="button" black transparent />
        )}
      </div>
    </div>
  )
}

FooterFeature.propTypes = {
  data: PropTypes.object,
}

export default FooterFeature
