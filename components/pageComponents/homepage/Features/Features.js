// import { Fade } from 'react-awesome-reveal'
import PropTypes from 'prop-types'

import FeaturesList from './FeaturesList'

// import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './Features.module.scss'

const featurelistData = [
  {
    heading: 'Store',
    text: 'Züs storage provides an intuitive and user-friendly interface for both businesses and well as individuals.',
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
    link: '/provide',
  },
]

const Features = ({ customFeatureData }) => {
  // const isMobile = useGetScreenSize()
  return (
    <div className={styles.featureListWrapper}>
      {/* <Fade
        direction={isMobile ? '' : 'up'}
        duration={600}
        fraction={0.2}
        delay={100}
        cascade
        triggerOnce> */}
      {(customFeatureData || featurelistData).map(
        ({ pattern, heading, text, img, link }) => (
          <FeaturesList
            pattern={pattern}
            heading={heading}
            text={text}
            img={img}
            key={heading}
            link={link}
            buttonText="Learn More"
          />
        )
      )}
      {/* </Fade> */}
    </div>
  )
}

Features.propTypes = {
  customFeatureData: PropTypes.array,
}

export default Features
