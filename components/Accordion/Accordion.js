import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

import ContentPlaceholder from './ContentPlaceholder'
import { DownIcon, UpIcon } from './AccordionIcons'

import styles from './Accordion.module.scss'

const SingleAccordion = ({ id, expanded, setExpanded, name, subLinks }) => {
  const isOpen = id === expanded

  return (
    <>
      <motion.div
        style={{
          borderBottom: isOpen ? 'none' : '1px solid rgba(255,255,255,0.1)',
        }}
        onClick={() => setExpanded(isOpen ? false : id)}
        className={styles.container}>
        <p>{name}</p>
        {isOpen ? <UpIcon /> : <DownIcon />}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className={styles.section}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}>
            <ContentPlaceholder subLinks={subLinks} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

SingleAccordion.propTypes = {
  id: PropTypes.number,
  expanded: PropTypes.any,
  setExpanded: PropTypes.func,
  name: PropTypes.string,
  subLinks: PropTypes.array,
}

const accordionData = [
  { id: 0, name: 'Store', subLinks: ['What Züs can do', 'Launch Apps'] },
  {
    id: 1,
    name: 'Build',
    subLinks: [
      'Build for the Future',
      'Join the Community',
      'Documentation',
      'API',
      'GitHub',
      'Roadmap',
      'Zendesk Support',
    ],
  },
  {
    id: 2,
    name: 'Earn',
    subLinks: ['Earn Rewards', 'Register', 'Explore with Atlas'],
  },
  {
    id: 3,
    name: 'About',
    subLinks: ['Meet the Team', 'News', 'Press & Media', 'Contact Züs'],
  },
]

const Accordion = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(false)
  return (
    <div className={styles.accordionContainer}>
      {accordionData.map(({ id, name, subLinks }) => (
        <SingleAccordion
          key={id}
          id={id}
          expanded={expanded}
          setExpanded={setExpanded}
          name={name}
          subLinks={subLinks}
        />
      ))}
    </div>
  )
}

export default Accordion
