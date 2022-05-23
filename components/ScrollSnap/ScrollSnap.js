import PropTypes from 'prop-types'

import styles from './ScrollSnap.module.scss'

const ScrollSnap = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

ScrollSnap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ScrollSnap
