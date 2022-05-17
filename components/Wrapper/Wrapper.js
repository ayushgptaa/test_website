import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './Wrapper.module.scss'

const Wrapper = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>
}
Wrapper.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}
export default Wrapper
