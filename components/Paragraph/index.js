import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Paragraph = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>
}

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Paragraph
