import Image from 'next/image'
import PropTypes from 'prop-types'
import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Paragraph from 'components/Paragraph'

import styles from './FooterFeature.module.scss'

const FooterFeature = ({ data }) => {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.bgPattern}></div>
      <Fade direction="up" cascade triggerOnce duration={600}>
        <div className={styles.zusLogoWhite}>
          <Image
            src="/images/Footer/zusLogoWhite.svg"
            layout="fill"
            alt="züs"
            quality={100}
          />
        </div>

        <Heading text={data.heading} withoutPeriod Tag="h4" />
        <Paragraph>{data.text}</Paragraph>
        <div className={styles.buttons}>
          <Button text={data.buttonText} type="button" link={data.link} />
          {data.secondaryBtn && (
            <Button
              text="Launch Apps"
              type="button"
              black
              transparent
              link="/launch-apps"
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
