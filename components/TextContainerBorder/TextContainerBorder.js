import styles from './TextContainerBorder.module.scss'

const data = [
  {
    heading: 'Individual',
    para: ' Anyone can move their data over to Züs. Zero headaches. An abundance ofstorage features.',
  },
  {
    heading: 'Enterprise',
    para: 'Built from the ground-up to accommodate Enterprises. Seamless migration. Better file security.',
  },
]

const TextContainerBorder = () => {
  return data.map(({ heading, para }) => (
    <div className={styles.container} key={heading}>
      <h4 className={styles.heading}>{heading}</h4>
      <p className={styles.para}>{para}</p>
      <a href="/" className={styles.learnMore}>
        Learn more
      </a>
    </div>
  ))
}

export default TextContainerBorder
