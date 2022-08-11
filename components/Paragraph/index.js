import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './index.module.scss'

const Paragraph = ({ children, left = false }) => {
  return (
    <p className={clsx(styles.paragraph, left && styles.left)}>{children}</p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  left: PropTypes.bool,
}

export default Paragraph
