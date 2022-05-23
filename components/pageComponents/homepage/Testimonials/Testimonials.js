import { Fade } from 'react-awesome-reveal'
import Heading from 'components/Heading'
import Slider from './Testimonials-Slider/Slider'

import styles from './Testimonials.module.scss'

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <Fade>
        <Heading text="Testimonials" />
        <Slider />
      </Fade>
    </section>
  )
}

export default Testimonials
