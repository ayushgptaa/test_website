import Image from 'next/image'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import styles from './FeaturesList.module.scss'
import Paragraph from 'components/Paragraph'

const FeaturesList = ({ heading, text, img, buttonText, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image src={img} quality={100} layout="fill" />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.heading}>{heading}</h3>
        <Paragraph>{text}</Paragraph>
      </div>
      <Button type="button" black text={buttonText} link={link} />
    </div>
  )
}

FeaturesList.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  buttonText: PropTypes.string,
  link: PropTypes.string,
}

export default FeaturesList
