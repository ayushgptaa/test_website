import Button from 'components/Button'

import styles from './GetNotified.module.scss'

const GetNotified = () => {
  return (
    <form className={styles.inputForm}>
      <input
        className={styles.inputBox}
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
      />
      <Button type="submit" text="Get notified" />
    </form>
  )
}

export default GetNotified
