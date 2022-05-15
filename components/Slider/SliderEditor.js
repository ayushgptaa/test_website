import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Slider from './Slider'

import { convertToDecimalSeparated } from 'util/globalFunctions'

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
  unitSymbol,
  color,
  step,
}) => {
  const [percentage, setPercentage] = React.useState(0)

  React.useEffect(() => {
    const totaldelta = maxValue - minValue
    let currentDelta = currentValue - minValue

    if (currentDelta < 0) currentDelta = 0

    let outputPercentage = (currentDelta * 100) / totaldelta

    if (outputPercentage > 100) outputPercentage = 100
    if (outputPercentage < 0) outputPercentage = 0

    setPercentage(outputPercentage)
  }, [minValue, maxValue])

  React.useEffect(() => {
    const totaldelta = maxValue - minValue
    const outputWithoutStep = minValue + (totaldelta * percentage) / 100

    const output = Math.floor(outputWithoutStep / step) * step

    onChange(output)
  }, [percentage])

  return (
    <div className={clsx(styles.container)}>
      {/* Content Above Slider */}
      <div className={styles.textContainer}>
        {/* Left Title */}
        <div className={styles.leftTitle}>{leftTitle}</div>
        {/* Right Title */}
        <div className={styles.rightTitle}>
          {rightTitle ??
            `${convertToDecimalSeparated(currentValue)} ${unitSymbol}`}
        </div>
      </div>
      {/* Slider */}
      <div>
        <Slider
          percentage={percentage}
          setPercentage={setPercentage}
          color={color}
        />
      </div>
      {/* Labels */}
      <div className={styles.labelContainer}>
        {/* Left Label */}
        <div className={styles.label}>
          {leftLabel ?? `${convertToDecimalSeparated(minValue)} ${unitSymbol}`}
        </div>
        {/* Right Label */}
        <div className={styles.label}>
          {rightLabel ?? `${convertToDecimalSeparated(maxValue)} ${unitSymbol}`}
        </div>
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
  unitSymbol: PropTypes.string, // symbol for unit
  color: PropTypes.string,
  step: PropTypes.number.isRequired,
}

export default SliderEditor
