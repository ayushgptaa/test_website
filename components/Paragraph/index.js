import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './index.module.scss'

const Paragraph = ({ children, left }) => {
  return <p className={styles.paragraph}>{children}</p>
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

export default Paragraph
