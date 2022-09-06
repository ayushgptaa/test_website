import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './Button.module.scss'

const Button = ({
  type,
  text,
  black,
  transparent,
  link,
  blank = false,
  ...rest
}) => {
  const router = useRouter()

  // eslint-disable-next-line consistent-return
  const navigate = () => {
    if (link) {
      if (blank) {
        return window.open(link, '_blank')
      }
      router.push(link)
    }
  }

  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        black && styles.black,
        transparent && styles.transparent
      )}
      onClick={navigate}
      {...rest}>
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
  blank: PropTypes.bool,
}

export default Button
