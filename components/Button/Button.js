import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './Button.module.scss'

const Button = ({ type, text, black }) => {
  return (
    <button type={type} className={clsx(styles.button, black && styles.black)}>
      {text}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  black: PropTypes.bool,
}

export default Button
