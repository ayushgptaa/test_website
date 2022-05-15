import Image from 'next/image'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import styles from './FeaturesList.module.scss'

const FeaturesList = ({ pattern, heading, text, img, buttonText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.feature}>
        <div className={styles[`pattern${pattern}`]}></div>
        <div className={styles.icon}>
          <Image
            src={`/${img.src}`}
            width={img.width}
            height={img.height}
            quality={100}
            layout="fixed"
            priority={1}
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.heading}>{heading}</h3>
          <p className={styles.para}>{text}</p>
        </div>
        <Button type="button" black text={buttonText} />
      </div>
    </div>
  )
}

FeaturesList.propTypes = {
  pattern: PropTypes.number,
  heading: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  buttonText: PropTypes.string,
}

export default FeaturesList
