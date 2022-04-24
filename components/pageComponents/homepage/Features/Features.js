import MainFeature from './MainFeature'
import FeaturesList from './FeaturesList'
import MobileBg from './Mobilebg'
import LaptopBg from './LaptopBg'

import storeIcon from '/public/images/homePage/Features/storeIcon.svg'
import buildIcon from '/public/images/homePage/Features/buildIcon.svg'
import earnIcon from '/public/images/homePage/Features/earnIcon.svg'

const featurelistData = [
  {
    pattern: 1,
    heading: 'Store',
    text: 'Züs storage is easy to set up for enterprises and individuals alike.',
    img: storeIcon,
  },
  {
    pattern: 2,
    heading: 'Build',
    text: 'Start building on top of the Züs Cloud Network. The future awaits you.',
    img: buildIcon,
  },
  {
    pattern: 3,
    heading: 'Earn',
    text: 'Fueled by a crypto economy that rewards Service Providers and ZCN Delegators.',
    img: earnIcon,
  },
]

const Features = () => {
  return (
    <section>
      <MainFeature />
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
      <MobileBg />
      <LaptopBg />
    </section>
  )
}

export default Features
