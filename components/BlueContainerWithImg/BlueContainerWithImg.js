import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Text from 'components/Text'
import Button from 'components/Button'

import styles from './BlueContainerWithImg.module.scss'

// Main content for Contact and Press page
const BlueContainerWithImg = ({ heading, subHeading }) => {
  return (
    <Fade triggerOnce>
      <div className={styles.primaryContainer}>
        <div className={styles.bgImage} />
        <Fade direction="up" triggerOnce>
          <p>{subHeading}</p>
          <Heading text={heading} />
          <div className={styles.iconContainer}>
            <Image
              src="/images/BlueContainerWithImg/twitterIcon.svg"
              alt="twitter"
              quality={100}
              layout="fixed"
              height={24}
              width={24}
              priority
            />
            <p>@ZusCloud</p>
          </div>
          <div>
            <Button type="button" text="DM us on Twitter" />
          </div>
        </Fade>
      </div>
      <div className={styles.secondaryContainer}>
        <Text>
          If you need our brand media is available for you to use&nbsp;
          <Link href="/">here</Link>. For any support or help requests,
          our&nbsp;
          <Link href="/">forum</Link>. is a great place to start.
        </Text>
      </div>
    </Fade>
  )
}

BlueContainerWithImg.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
}

export default BlueContainerWithImg
