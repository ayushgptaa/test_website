import Image from 'next/image'
import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import Text from 'components/Text'
import Button from 'components/Button'

import ZusLogoWhite from '/public/images/Footer/zusLogoWhite.svg'

import styles from './FooterFeature.module.scss'

const FooterFeature = ({ data }) => {
  return (
    <div className={styles.container}>
      <Image
        src={`/${ZusLogoWhite.src}`}
        width={ZusLogoWhite.width}
        height={ZusLogoWhite.height}
        alt="züs"
        quality={100}
      />
      <Heading text={data.heading} />
      <Text>{data.text}</Text>
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
