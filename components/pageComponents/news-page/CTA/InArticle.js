import Button from 'components/Button'
import styles from './InArticle.module.scss'

const InArticle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <span className={styles.title}>Interested in what we’re saying?</span>
        <span className={styles.description}>
          Discover why Metrio would be a good fit for your company
        </span>
      </div>

      <Button type="button" text="Learn more" />
    </div>
  )
}

export default InArticle
