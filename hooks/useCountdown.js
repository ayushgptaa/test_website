import { useEffect, useState } from 'react'

const getReturnValues = (countDown) => {
  const MILLISECONDS_SECOND = 1000
  const MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND
  const MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE
  const MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR

  const days = Math.floor(countDown / MILLISECONDS_DAY)
  const hours = Math.floor((countDown % MILLISECONDS_DAY) / MILLISECONDS_HOUR)
  const minutes = Math.floor(
    (countDown % MILLISECONDS_HOUR) / MILLISECONDS_MINUTE
  )
  const seconds = Math.floor(
    (countDown % MILLISECONDS_MINUTE) / MILLISECONDS_SECOND
  )

  return [days, hours, minutes, seconds]
}

const useCountdown = (targetDate) => {
  const [countDown, setCountDown] = useState(targetDate - new Date().getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(targetDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return getReturnValues(countDown)
}

export default useCountdown
