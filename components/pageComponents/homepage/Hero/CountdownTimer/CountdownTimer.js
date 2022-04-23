import PropTypes from 'prop-types'

import styles from './CountdownTimer.module.scss'

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  )
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

const CountdownTimer = () => {
  return <ShowCounter days="3" hours="12" minutes="31" seconds="59" />
}

DateTimeDisplay.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

ShowCounter.propTypes = {
  days: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
}

export default CountdownTimer
