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
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded && <DownArrow />}
          {!isExpanded && <RightArrow />}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.p
            className={styles.text}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto' },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.1, ease: 'linear' }}>
            {children}
          </motion.p>
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
