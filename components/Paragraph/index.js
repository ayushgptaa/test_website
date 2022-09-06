import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './index.module.scss'

const Paragraph = ({ children, className, left = false }) => {
  return (
    <p
      suppressHydrationWarning
      className={clsx(
        styles.paragraph,
        className && className,
        left && styles.left
      )}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.string,
  left: PropTypes.bool,
}

export default Paragraph
