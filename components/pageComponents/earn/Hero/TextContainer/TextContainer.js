import Button from 'components/Button'
import styles from './TextContainer.module.scss'

const data = [
  {
    heading: 'Want to learn more about the rewards?',
    text: 'There are many ways you can earn rewards in the Züs ecosystem. Read our Token Economics document to learn more about our sustainable rewards model.',
    buttonText: 'Token Econimcs',
  },
  {
    heading: 'Want to add Servers to the Network?',
    text: 'Getting your Servers connected to our network is straightforward. To help, we’ve assembled a comprehensive Installation Guide.',
    buttonText: 'Installation guide',
  },
]

const TextContainer = () => {
  return data.map(({ heading, text, buttonText }) => (
    <div className={styles.container} key={heading}>
      <div className={styles.bgPattern}></div>
      <div className={styles.ellipseBottom}></div>
      <div className={styles.textContainer}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.text}>{text}</p>
        <Button type="button" text={buttonText} black transparent />
      </div>
    </div>
  ))
}

export default TextContainer
