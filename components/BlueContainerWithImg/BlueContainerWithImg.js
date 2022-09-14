import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import Text from 'components/Text'
import Button from 'components/Button'

import { SocialLinks } from 'SocialLinks/links'

import styles from './BlueContainerWithImg.module.scss'

// Main content for Contact and Press page
const BlueContainerWithImg = ({ heading, subHeading }) => {
  return (
    <>
      <div className={styles.primaryContainer}>
        <div className={styles.bgImage} />

        <p>{subHeading}</p>
        <Heading text={heading} Tag="h3" />
        <a href={SocialLinks.TWITTER} className={styles.iconContainer}>
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
        </a>

        <Button
          type="button"
          text="DM us on Twitter"
          link={SocialLinks.TWITTER}
          blank
        />
      </div>
      <div className={styles.secondaryContainer}>
        <Text>
          If you need our brand media is available for you to use&nbsp;
          <Link
            href="https://drive.google.com/drive/folders/1HYyYdxIuTMz4kfNdXV6xaMSLQ2yaV94C"
            passHref>
            <a
              href="https://drive.google.com/drive/folders/1HYyYdxIuTMz4kfNdXV6xaMSLQ2yaV94C"
              target="_blank"
              rel="noreferrer">
              here
            </a>
          </Link>
          . For any support or help requests, our&nbsp;
          <Link href="/" passHref>
            <a href={SocialLinks.forum} target="_blank" rel="noreferrer">
              forum
            </a>
          </Link>
          . is a great place to start.
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
