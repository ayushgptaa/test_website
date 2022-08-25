import Link from 'next/link'

import styles from './TextContainerBorder.module.scss'

const data = [
  {
    heading: 'Individual',
    para: 'Move your data with ease.  Zus offers an abundance of storage features you will love!',
  },
  {
    heading: 'Enterprise',
    para: 'Zus is enterprise level software that was built for the ground-up with your needs in mind.  With its intuitive interface, seamless migrations and security features, Zus has you covered!',
  },
]

const TextContainerBorder = () => {
  return data.map(({ heading, para }) => (
    <div className={styles.container} key={heading}>
      <div className={styles.divider}></div>
      <div className={styles.textContainer}>
        <h4 className={styles.heading}>{heading}</h4>
        <p className={styles.para}>{para}</p>
        <Link href="/">Learn more</Link>
      </div>
    </div>
  ))
}

export default TextContainerBorder
