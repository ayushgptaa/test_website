import clsx from 'clsx'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Wrapper = ({ children, className }) => {
  return <div className={clsx(styles.rootContainer, className)}>{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Wrapper
