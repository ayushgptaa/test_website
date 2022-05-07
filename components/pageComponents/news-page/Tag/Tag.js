import PropTypes from 'prop-types'

import styles from './Tag.module.scss'

const Tag = ({ tag }) => {
  return <span className={styles.tag}>{tag}</span>
}

Tag.propTypes = {
  tag: PropTypes.string,
}

export default Tag
