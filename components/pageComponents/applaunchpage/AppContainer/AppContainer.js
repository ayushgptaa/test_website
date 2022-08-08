import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './AppContainer.module.scss'

const AppContainer = ({ children, textContainer }) => {
  return (
    <div
      className={clsx(styles.container, textContainer && styles.textContainer)}>
      <div className={styles.bgPattern} />
      {children}
    </div>
  )
}

AppContainer.propTypes = {
  children: PropTypes.any,
  textContainer: PropTypes.bool,
}
export default AppContainer
