import FeaturesList from './FeaturesList'
import { Fade } from 'react-awesome-reveal'

import styles from './Features.module.scss'

const featurelistData = [
  {
    pattern: 1,
    heading: 'Store',
    text: 'Züs storage is easy to set up for enterprises and individuals alike.',
    img: '/images/homePage/Features/storeIcon.svg',
  },
  {
    pattern: 2,
    heading: 'Build',
    text: 'Start building on top of the Züs Cloud Network. The future awaits you.',
    img: '/images/homePage/Features/buildIcon.svg',
  },
  {
    pattern: 3,
    heading: 'Earn',
    text: 'Fueled by a crypto economy that rewards Service Providers and ZCN Delegators.',
    img: '/images/homePage/Features/earnIcon.svg',
  },
]

const Features = () => {
  return (
    <div className={styles.featureListWrapper}>
      <Fade direction="up" duration={600}>
        {featurelistData.map(({ pattern, heading, text, img }) => (
          <FeaturesList
            pattern={pattern}
            heading={heading}
            text={text}
            img={img}
            key={heading}
            buttonText="Learn More"
          />
        ))}
      </Fade>
    </div>
  )
}

export default Features
