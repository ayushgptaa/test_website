import React from 'react'

import { ReactComponent as ArrowDown } from 'public/images/util/arrow-down.svg'
import { ReactComponent as ArrowRight } from 'public/images/util/arrow-right.svg'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import styles from './util.module.scss'

const Expandable = ({ title, children }) => {
  const [isExpanded, setExpanded] = React.useState(false)

  return (
    <motion.div className={styles.expandableDivContainer}>
      <div className={styles.justifyContentContainer}>
        {/* Title */}
        <div className={styles.expandableDivTitle}>{title}</div>
        {/* Button */}
        <button
          onClick={() => setExpanded(!isExpanded)}
          style={{ cursor: 'pointer' }}>
          {isExpanded && <ArrowDown />}
          {!isExpanded && <ArrowRight />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.section
            className={styles.expandableDivChildren}
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

Expandable.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any.isRequired,
}

export default Expandable
