import Heading from 'components/Heading'
import Slider from './Testimonials-Slider/Slider'

import styles from './Testimonials.module.scss'

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bgPattern}></div>
      <Heading text="Testimonials" />
      <Slider />
    </section>
  )
}

export default Testimonials
