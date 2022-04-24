import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import styles from './Accordion.module.scss'

const ContentPlaceholder = ({ subLinks }) => (
  <motion.div
    transition={{ duration: 0.5 }}
    className={styles.contentPlaceholder}>
    {subLinks.map((subLink) => (
      <p key={subLink}>{subLink}</p>
    ))}
  </motion.div>
)

ContentPlaceholder.propTypes = {
  subLinks: PropTypes.array,
}

export default ContentPlaceholder
