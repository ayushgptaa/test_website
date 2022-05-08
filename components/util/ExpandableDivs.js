import React from 'react'

import useCollapse from 'react-collapsed'
import { ReactComponent as ArrowDown } from 'public/images/util/arrow-down.svg'
import { ReactComponent as ArrowRight } from 'public/images/util/arrow-right.svg'

import PropTypes from 'prop-types'

import styles from './util.module.scss'

const ExpandableDivs = ({ title, children }) => {
  const [isExpanded, setExpanded] = React.useState(false)

  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div className={styles.expandableDivContainer}>
      <div className={styles.justifyContentContainer}>
        {/* Title */}
        <div className={styles.expandableDivTitle}>{title}</div>
        {/* Button */}
        <button
          style={{ cursor: 'pointer' }}
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}>
          {isExpanded && <ArrowDown />}
          {!isExpanded && <ArrowRight />}
        </button>
      </div>
      <section {...getCollapseProps()} className={styles.expandableDivChildren}>
        {children}
      </section>
    </div>
  )
}

ExpandableDivs.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any.isRequired,
}

export default ExpandableDivs
