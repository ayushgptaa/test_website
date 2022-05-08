import clsx from 'clsx'
import PropTypes from 'prop-types'

import styles from './SliderEditor.module.scss'

const SliderEditor = ({ leftTitle, rightTitle }) => {
  return (
    <div className={clsx(styles.container)}>
      {/* Content Above Slider */}
      <div className={styles.textContainer}>
        {/* Left Title */}
        <div className={styles.leftTitle}>{leftTitle}</div>
        {/* Right Title */}
        <div className={styles.rightTitle}>{rightTitle}</div>
      </div>
      {/* Slider */}
      <div className={styles.sliderContent}>Slider Content</div>
    </div>
  )
}

SliderEditor.propTypes = {
  leftTitle: PropTypes.string.isRequired,
  rightTitle: PropTypes.string,
}

export default SliderEditor
