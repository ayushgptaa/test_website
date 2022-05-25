// import Link from 'next/link'

import styles from './TextContainerBorder.module.scss'

const data = [
  {
    heading: 'Individual',
    para: ' Anyone can move their data over to Züs. Zero headaches. An abundance of storage features.',
  },
  {
    heading: 'Enterprise',
    para: 'Built from the ground-up to accommodate Enterprises. Seamless migration. Better file security.',
  },
]

const TextContainerBorder = () => {
  return data.map(({ heading, para }) => (
    <div className={styles.container} key={heading}>
      <div className={styles.divider}></div>
      <div className={styles.textContainer}>
        <h4 className={styles.heading}>{heading}</h4>
        <p className={styles.para}>{para}</p>
        {/* <Link href="/">Learn more</Link> */}
      </div>
    </div>
  ))
}

export default TextContainerBorder
