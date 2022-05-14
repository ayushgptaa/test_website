import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

import { DownArrow, RightArrow } from 'components/Icons'

import styles from './AccordianContainer.module.scss'

const AccordianContainer = ({ title, children }) => {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <motion.div className={styles.rootContainer}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <button
          onClick={() => setExpanded(!isExpanded)}
          style={{ cursor: 'pointer' }}>
          {isExpanded && <DownArrow />}
          {!isExpanded && <RightArrow />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.section
            className={styles.text}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: 'linear' }}>
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

AccordianContainer.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any.isRequired,
}

export default AccordianContainer
