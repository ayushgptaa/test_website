import FeaturesList from '/components/pageComponents/homepage/Features/FeaturesList'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import FeatureWithImg from './FeatureWithImg'

import styles from './index.module.scss'

const featurelistData = [
  {
    heading: 'USP1',
    text: 'Züs storage is easy to set up for enterprises and individuals alike.',
    img: '/images/homePage/Features/storeIcon.svg',
    link: '/store',
  },
  {
    heading: 'USP2',
    text: 'Start building on top of the Züs Cloud Network. The future awaits you.',
    img: '/images/homePage/Features/buildIcon.svg',
    link: '/build',
  },
  {
    heading: 'USP3',
    text: 'Fueled by a crypto economy that rewards Service Providers and ZCN Delegators.',
    img: '/images/homePage/Features/earnIcon.svg',
    link: '/earn',
  },
]

const Features = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.sectionTextContent}>
        <Heading
          text="Infinite Mutations & other UVPs"
          Tag="h3"
          withoutPeriod
        />
        <Paragraph>
          Cloud Storage on Züs is enabled by a reliable decentralized cloud
          network and a lightning-fast Layer 1 blockchain protocol. This makes
          the process of getting started swift and intuitive.
        </Paragraph>
      </div>

      <div className={styles.featureListWrapper}>
        {featurelistData.map(({ pattern, heading, text, img, link }) => (
          <FeaturesList
            pattern={pattern}
            heading={heading}
            text={text}
            img={img}
            key={heading}
            link={link}
            buttonText="Learn More"
          />
        ))}
      </div>

      <div className={styles.featureWithImg}>
        <FeatureWithImg />
      </div>
    </section>
  )
}

export default Features
