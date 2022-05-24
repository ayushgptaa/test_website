import PropTypes from 'prop-types'

import useCountdown from 'hooks/useCountdown'

import styles from './CountdownTimer.module.scss'

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className={styles.dateTimeWrapper}>
      <span className={styles.timeValue} suppressHydrationWarning>
        {value}
      </span>
      <span className={styles.timeType}>{type}</span>
    </div>
  )
}

DateTimeDisplay.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.showCounter}>
      <DateTimeDisplay value={days} type="Days" />
      <span className={styles.divider}>:</span>
      <DateTimeDisplay value={hours} type="Hours" />
      <span className={styles.divider}>:</span>
      <DateTimeDisplay value={minutes} type="Minutes" />
      <span className={styles.divider}>:</span>
      <DateTimeDisplay value={seconds} type="Seconds" />
    </div>
  )
}

ShowCounter.propTypes = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
}

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)
  const countdownFinished = days + hours + minutes + seconds <= 0

  return (
    !countdownFinished && (
      <>
        <h4 className={styles.heading}>Launching in</h4>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </>
    )
  )
}

CountdownTimer.propTypes = {
  targetDate: PropTypes.number.isRequired,
}

export default CountdownTimer
