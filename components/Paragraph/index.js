import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Paragraph = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

export default Paragraph
