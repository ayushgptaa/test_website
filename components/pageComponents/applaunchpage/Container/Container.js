import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './Container.module.scss'

const Container = ({ children, textContainer }) => {
  return (
    <div
      className={clsx(styles.container, textContainer && styles.textContainer)}>
      <div className={styles.bgPattern}></div>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  textContainer: PropTypes.bool,
}
export default Container
