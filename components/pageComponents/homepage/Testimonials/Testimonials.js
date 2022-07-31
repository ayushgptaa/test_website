import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Slider from './Testimonials-Slider/Slider'

import styles from './Testimonials.module.scss'

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <Fade duration={800} fraction={0.2} cascade triggerOnce>
        <div className={styles.bgPattern}></div>
        <Heading text="Testimonials" />
        <Slider />
      </Fade>
    </section>
  )
}

export default Testimonials
