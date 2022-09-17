import Image from 'next/future/image'

import IconContainer from 'components/IconContainer'
import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'

const featuresData = [
  {
    img: '/images/Showcase/Features/privacy.png',
    heading: 'Limitless Availability',
    text: 'Global reach with CDN-like scale and unparalleled uptime.',
  },
  {
    img: '/images/Showcase/Features/cost.png',
    heading: 'Limitless Performance',
    text: 'Maximize engagement by adding rich media files on your website',
  },
  {
    img: '/images/Showcase/Features/security.png',
    heading: 'Limitless Resiliency',
    text: 'Eliminate attack threats by fragmenting data. No single point of attack.',
  },
]

const Features = () => {
  return (
    <>
      <section className={styles.rootContainer}>
        <h3 className={styles.mainHeading}>
          Power your customer engagement, reach, and site uptime with
          decentralized storage
        </h3>

        <div className={styles.featuresList}>
          {featuresData.map(({ img, heading, text }) => (
            <div className={styles.features} key={heading}>
              <IconContainer
                img={img}
                alt={heading}
                height={100}
                width={100}
                layout="fixed"
              />
              <h4>{heading}</h4>
              <Paragraph>{text}</Paragraph>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.elaborateFeatureContainer}>
        <div className={styles.elaborateFeature}>
          <div className={styles.elaborateFeatureImg}>
            <Image
              src="/images/Showcase/Features/resiliency.jpg"
              alt="Limitless Resiliency"
              quality={100}
              fill
            />
          </div>
          <div className={styles.elaborateFeatureTextContent}>
            <h4>Limitless Resiliency</h4>
            <p className="paragraph">
              Your data is broken up into fragments and stored with different
              storage providers, meaning your data does not exist on one
              distinct node, so there is no single point of failure or attack
              from hackers, and no business threat from censorship.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
