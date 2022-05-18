import PropTypes from 'prop-types'

import useCountdown from '/Hooks/useCountdown'

import styles from './CountdownTimer.module.scss'

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div>
      <p suppressHydrationWarning>{value}</p>
      <span>{type}</span>
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
      <p>:</p>
      <DateTimeDisplay value={hours} type="Hours" />
      <p>:</p>
      <DateTimeDisplay value={minutes} type="Minutes" />
      <p>:</p>
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
