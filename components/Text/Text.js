import clsx from 'clsx'
import PropTypes from 'prop-types'

import styles from './Text.module.scss'

const Text = ({ children, center, left }) => {
  return (
    <p
      className={clsx(
        styles.text,
        center && styles.center,
        left && styles.left
      )}>
      {children}
    </p>
  )
}

Text.propTypes = {
  children: PropTypes.any,
  center: PropTypes.bool,
  left: PropTypes.bool,
}

export default Text
