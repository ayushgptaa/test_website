import { forwardRef } from 'react'

import styles from './Button.module.scss'

const NextBtn = forwardRef((_, ref) => {
  return (
    <button className={styles.nextBtn} ref={ref} type="next-btn">
      Next
    </button>
  )
})

const PrevBtn = forwardRef((_, ref) => {
  return (
    <button className={styles.prevBtn} ref={ref} type="prev-btn">
      Prev
    </button>
  )
})

export { PrevBtn, NextBtn }
