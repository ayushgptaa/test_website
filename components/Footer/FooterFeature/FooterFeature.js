import Image from 'next/image'
import PropTypes from 'prop-types'
import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Text from 'components/Text'
import Button from 'components/Button'

import styles from './FooterFeature.module.scss'

const FooterFeature = ({ data }) => {
  return (
    <div className={styles.container}>
      <Fade direction="up">
        <Image
          src="/images/Footer/zusLogoWhite.svg"
          width={65}
          height={70}
          alt="züs"
          quality={100}
        />
        <Heading text={data.heading} />
        <Text>{data.text}</Text>
        <div className={styles.buttons}>
          <Button text={data.buttonText} type="button" link="launch-apps" />
          {data.secondaryBtn && (
            <Button
              text="Start Building"
              type="button"
              black
              transparent
              link="/build"
            />
          )}
        </div>
      </Fade>
    </div>
  )
}

FooterFeature.propTypes = {
  data: PropTypes.object,
}

export default FooterFeature
