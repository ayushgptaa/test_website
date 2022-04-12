import PropTypes from 'prop-types'

import styles from './Button.module.scss'

const Button = ({ type, text }) => {
  return (
    <button type={type} className={styles.buttonForm}>
      {text}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
