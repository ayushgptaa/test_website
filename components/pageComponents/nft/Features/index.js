import { Fade } from 'react-awesome-reveal'

import FeaturesList from '/components/pageComponents/homepage/Features/FeaturesList'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import FeatureWithImg from './FeatureWithImg'

import useGetScreenSize from 'hooks/useGetScreenSize'

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
  const isMobile = useGetScreenSize()

  return (
    <section className={styles.rootContainer}>
      <div className={styles.sectionTextContent}>
        <Fade direction="up" duration={600} cascade triggerOnce>
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
        </Fade>
      </div>

      <div className={styles.featureListWrapper}>
        <Fade
          direction="up"
          duration={600}
          fraction={isMobile ? 0.2 : 0.6}
          cascade
          delay={500}
          triggerOnce>
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
        </Fade>
      </div>

      <div className={styles.featureWithImg}>
        <FeatureWithImg />
      </div>
    </section>
  )
}

export default Features
