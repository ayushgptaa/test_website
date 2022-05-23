import { Fade } from 'react-awesome-reveal'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './Container.module.scss'

const Container = ({ children, textContainer }) => {
  return (
    <Fade>
      <div
        className={clsx(
          styles.container,
          textContainer && styles.textContainer
        )}>
        <div className={styles.bgPattern} />
        {children}
      </div>
    </Fade>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  textContainer: PropTypes.bool,
}
export default Container
