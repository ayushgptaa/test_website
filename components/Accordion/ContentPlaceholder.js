import Link from 'next/link'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import styles from './Accordion.module.scss'

const ContentPlaceholder = ({ subLinks }) => {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      className={styles.contentPlaceholder}>
      {subLinks.map(({ name, link }) => (
        <Link href={link ? `/${link}` : '/'} key={name}>
          {name}
        </Link>
      ))}
    </motion.div>
  )
}

ContentPlaceholder.propTypes = {
  subLinks: PropTypes.array,
}

export default ContentPlaceholder
