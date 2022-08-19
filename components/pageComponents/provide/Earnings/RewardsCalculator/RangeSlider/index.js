import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import IconContainer from 'components/IconContainer'

import styles from './index.module.scss'

const RangeSlider = ({
  minVal,
  maxVal,
  value,
  step,
  icon,
  unit,
  topTitle,
  showDelegation = false,
  className,
  primaryColor = '#E1E1E1',
  secondaryColor = '#FF92E2',
  handleChange,
}) => {
  let min = ''
  let max = ''

  const input = useRef(null)

  const setPercentage = () => {
    const percentage = ((value - min) / (max - min)) * 100

    input.current.style.background = `linear-gradient(to right, ${primaryColor} 0%, ${secondaryColor} ${percentage}%, rgba(139, 139, 139, 0.3)
      ${percentage}%, rgba(139, 139, 139, 0.3) 100%)`
  }

  useEffect(() => {
    min = input.current.min
    max = input.current.max

    setPercentage()
  }, [value])

  return (
    <div className={clsx(styles.rootContainer, className && className)}>
      <div className={styles.topTitle}>{topTitle}</div>
      <div className={styles.leftTitle}>
        {icon && (
          <div className={styles.zcnIcon}>
            <IconContainer
              img="/images/provide/Earnings/RewardsCalculator/zcnIcon.svg"
              alt="ZCN"
              layout="fill"
            />
          </div>
        )}

        <p className={styles.number}>{value}</p>
        <p className={styles.unit}>{unit}</p>
      </div>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={minVal}
          max={maxVal}
          value={value}
          step={step}
          className={styles.slider}
          onChange={handleChange}
          ref={input}
        />
        {showDelegation && (
          <p className={styles.delegateValue}>60% Delegate Stake</p>
        )}
      </div>
    </div>
  )
}

RangeSlider.propTypes = {
  minVal: PropTypes.number.isRequired,
  maxVal: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  icon: PropTypes.bool,
  unit: PropTypes.string.isRequired,
  topTitle: PropTypes.string.isRequired,
  showDelegation: PropTypes.bool,
  className: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
}

export default RangeSlider
