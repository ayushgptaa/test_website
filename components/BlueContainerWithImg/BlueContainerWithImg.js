import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import Text from 'components/Text'
import Button from 'components/Button'

import twitterIcon from '/public/images/BlueContainerWithImg/twitterIcon.svg'

import styles from './BlueContainerWithImg.module.scss'

// Main content for Contact and Press page
const BlueContainerWithImg = ({ heading, subHeading }) => {
  return (
    <>
      <div className={styles.primaryContainer}>
        <div className={styles.bgImage}></div>
        <p>{subHeading}</p>
        <Heading text={heading} />
        <div className={styles.iconContainer}>
          <Image
            src={`/${twitterIcon.src}`}
            alt="twitter"
            quality={100}
            layout="fixed"
            height={24}
            width={24}
          />
          <p>@ZusCloud</p>
        </div>
        <Button type="button" text="DM us on Twitter" />
      </div>
      <div className={styles.secondaryContainer}>
        <Text>
          If you need our brand media is available for you to use&nbsp;
          <Link href="/">here</Link>. For any support or help requests,
          our&nbsp;
          <Link href="/">forum</Link>. is a great place to start.
        </Text>
      </div>
    </>
  )
}

BlueContainerWithImg.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
}

export default BlueContainerWithImg
