import PropTypes from 'prop-types'
import clsx from 'clsx'

import Button from 'components/Button'

import styles from './GetNotified.module.scss'

const GetNotified = ({ showcasePage }) => {
  return (
    <form
      className={clsx(styles.inputForm, showcasePage && styles.showcasePage)}>
      <input
        className={styles.inputBox}
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        autoComplete="off"
      />
      <Button type="submit" text={showcasePage ? 'Submit' : 'Get Notified'} />
    </form>
  )
}

GetNotified.propTypes = {
  showcasePage: PropTypes.bool,
}

export default GetNotified
