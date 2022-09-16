import Image from 'next/future/image'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'

const featuresData = [
  {
    heading: 'Individual',
    text: 'As an individual, store your most important files and photos on Vult without worrying about data security',
  },
  {
    heading: 'Self employed',
    text: 'As a self employed profession, have one less thing to worry about. We save your data securely so you can work fearlessly',
  },
  {
    heading: 'Enterprise',
    text: 'As an enterprise, lower your storage cost and increase your data security by signing up to Vult for your teams',
  },
]

const Features = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionImage}>
          <Image
            src="/images/About/Features/foldersImg.svg"
            alt="Geographically diversified storage with wide adoption"
            quality={100}
            fill
          />
        </div>

        <div className={styles.textContent}>
          <Heading
            text="Geographically diversified storage with wide adoption"
            withoutPeriod
            Tag="h4"
          />
          <Paragraph>
            The Züs Cloud Network is a hyper-speed data storage network. Enabled
            by a cutting-edge storage protocol; secured by a novel layer 1
            blockchain.
          </Paragraph>

          <Button type="button" text="See detailed pricing" />
        </div>
      </div>

      <div className={styles.featuresContainer}>
        {featuresData.map(({ heading, text }) => (
          <div className={styles.features} key={heading}>
            <Heading text={heading} withoutPeriod Tag="h5" />
            <Paragraph left>{text}</Paragraph>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
