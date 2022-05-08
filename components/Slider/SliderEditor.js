import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Slider from './Slider'

import styles from './SliderEditor.module.scss'

const SliderEditor = ({
  leftTitle,
  rightTitle,
  leftLabel,
  rightLabel,
  minValue,
  maxValue,
  currentValue,
  onChange,
}) => {
  const [percentage, setPercentage] = React.useState(0)

  React.useEffect(() => {
    const totaldelta = maxValue - minValue
    let currentDelta = currentValue - minValue

    if (currentDelta < 0) currentDelta = 0

    setPercentage((currentDelta * 100) / totaldelta)
  }, [minValue, maxValue])

  React.useEffect(() => {
    const totaldelta = maxValue - minValue
    const output = minValue + (totaldelta * percentage) / 100

    onChange(output)
  }, [percentage])

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
      <div>
        <Slider percentage={percentage} setPercentage={setPercentage} />
      </div>
      {/* Labels */}
      <div className={styles.labelContainer}>
        {/* Left Label */}
        <div className={styles.label}>{leftLabel ?? ' '}</div>
        {/* Right Label */}
        <div className={styles.label}>{rightLabel ?? ' '}</div>
      </div>
    </div>
  )
}

SliderEditor.propTypes = {
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  currentValue: PropTypes.number.isRequired, // default slider value  [0-100]
  leftTitle: PropTypes.string.isRequired,
  rightTitle: PropTypes.string,
  rightLabel: PropTypes.string,
  leftLabel: PropTypes.string,
  onChange: PropTypes.func.isRequired, // function when value changes
}

export default SliderEditor
