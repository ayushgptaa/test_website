import * as React from 'react'
import { motion } from 'framer-motion'

import styles from './Accordion.module.scss'

const ContentPlaceholder = () => (
  <motion.div
    transition={{ duration: 0.5 }}
    className={styles.contentPlaceholder}>
    <p>What Züs can do</p>
    <p>Launch Apps</p>
  </motion.div>
)

export default ContentPlaceholder
