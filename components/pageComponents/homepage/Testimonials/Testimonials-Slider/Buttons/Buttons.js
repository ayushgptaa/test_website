import clsx from 'clsx'

import styles from './Button.module.scss'

const NextBtn = () => {
  return (
    <button className={clsx(styles.nextBtn, 'next-btn')} type="next-btn">
      Next
    </button>
  )
}

const PrevBtn = () => {
  return (
    <button className={clsx(styles.prevBtn, 'prev-btn')} type="prev-btn">
      Prev
    </button>
  )
}

export { PrevBtn, NextBtn }
