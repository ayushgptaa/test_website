import Button from 'components/Button'
import styles from './WorkWithUs.module.scss'

const WorkWithUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Interested in working with us?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
          consequat turpis fermentum et ut a vitae.
        </p>
        <Button type="button" text="Let's start talking" />
      </div>
    </div>
  )
}

export default WorkWithUs
