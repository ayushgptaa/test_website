import styles from './CheckOurSolutions.module.scss'

const CheckOurSolutions = () => {
  return (
    <div className={styles.solutionsContainer}>
      <p>
        Global data consumption is projected to grow at a rate of over 25% per
        year. Today, virtually all of the world’s data is stored on centralized
        servers, which are controlled by a handful of corporations.
      </p>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        Check Our Solutions
      </a>
    </div>
  )
}

export default CheckOurSolutions
