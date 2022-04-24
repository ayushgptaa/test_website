import Image from 'next/image'

import Heading from 'components/Heading'
import Button from 'components/Button'

import featuresData from './featuresData'

import styles from './Features.module.scss'

const Features = () => {
  return featuresData.map(({ img, heading, text }) => (
    <section className={styles.container} key={heading}>
      <div className={styles.imgContainer}>
        <Image src={img} alt={heading} layout="responsive" />
      </div>
      <div className={styles.textContent}>
        <Heading text={heading} />
        <p className={styles.text}>{text}</p>
        <Button text="Get Notified" type="button" />
      </div>
    </section>
  ))
}

export default Features
