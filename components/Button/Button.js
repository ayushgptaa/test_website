import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './Button.module.scss'

const Button = ({ type, text, black, transparent, link }) => {
  const router = useRouter()

  const navigate = () => link && router.push(link)

  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        black && styles.black,
        transparent && styles.transparent
      )}
      onClick={navigate}>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  black: PropTypes.bool,
  transparent: PropTypes.bool,
  link: PropTypes.string,
}

export default Button
