import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

import useCountdown from 'hooks/useCountdown'

import styles from './CountdownTimer.module.scss'
import useGetScreenSize from 'hooks/useGetScreenSize'

const DateTimeDisplay = ({ value, type }) => {
  const isMobile = useGetScreenSize()
  return (
    <div className={styles.dateTimeWrapper}>
      <div
        style={{
          overflow: 'hidden',
          position: 'relative',
          width: isMobile ? 52 : 70,
          height: isMobile ? 55 : 74,
        }}>
        <AnimatePresence>
          <motion.span
            key={value}
            transition={{
              ease: 'easeOut',
              duration: 0.5,
            }}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ position: 'absolute', y: -80 }}
            className={styles.timeValue}
            suppressHydrationWarning>
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
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

const CountdownTimer = ({ targetDate, removeHeading = false }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)
  const countdownFinished = days + hours + minutes + seconds <= 0

  return (
    !countdownFinished && (
      <>
        {!removeHeading && <h4 className={styles.heading}>Launching in</h4>}
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
  removeHeading: PropTypes.bool,
}

export default CountdownTimer
