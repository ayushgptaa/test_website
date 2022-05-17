import PropTypes from 'prop-types'

import styles from './index.module.scss'

const BulletText = ({ children }) => {
  return (
    <div className={styles.bulletTextContainer}>
      <div>
        <ul>
          <li />
        </ul>
      </div>
      {children}
    </div>
  )
}

BulletText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BulletText
