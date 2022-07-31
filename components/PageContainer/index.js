import styles from './index.module.scss'
import PropTypes from 'prop-types'

const PageContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default PageContainer
