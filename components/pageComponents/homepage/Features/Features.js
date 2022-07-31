import { Fade } from 'react-awesome-reveal'

import FeaturesList from './FeaturesList'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './Features.module.scss'

const featurelistData = [
  {
    heading: 'Store',
    text: 'Züs storage is easy to set up for enterprises and individuals alike.',
    img: '/images/homePage/Features/storeIcon.svg',
    link: '/store',
  },
  {
    heading: 'Build',
    text: 'Start building on top of the Züs Cloud Network. The future awaits you.',
    img: '/images/homePage/Features/buildIcon.svg',
    link: '/build',
  },
  {
    heading: 'Earn',
    text: 'Fueled by a crypto economy that rewards Service Providers and ZCN Delegators.',
    img: '/images/homePage/Features/earnIcon.svg',
    link: '/earn',
  },
]

const Features = () => {
  const isMobile = useGetScreenSize()

  return (
    <div className={styles.featureListWrapper}>
      <Fade
        direction="up"
        duration={700}
        fraction={isMobile ? 0.4 : 0.9}
        cascade
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
  )
}

export default Features
