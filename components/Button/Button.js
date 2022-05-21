import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './Button.module.scss'

const Button = ({ type, text, black, transparent, onClick }) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        black && styles.black,
        transparent && styles.transparent
      )}
      onClick={onClick}>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  black: PropTypes.bool,
  transparent: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
