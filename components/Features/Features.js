import MainFeature from './MainFeature'
import FeaturesList from './FeaturesList'
import MobileBg from './Mobilebg'
import LaptopBg from './LaptopBg'

import storeIcon from '/public/images/Features/storeIcon.svg'
import buildIcon from '/public/images/Features/buildIcon.svg'
import earnIcon from '/public/images/Features/earnIcon.svg'

const featurelistData = [
  {
    heading: 'Store',
    text: 'Züs storage is easy to set up for enterprises and individuals alike.',
    img: storeIcon,
  },
  {
    heading: 'Build',
    text: 'Start building on top of the Züs Cloud Network. The future awaits you.',
    img: buildIcon,
  },
  {
    heading: 'Earn',
    text: 'Fueled by a crypto economy that rewards Service Providers and ZCN Delegators.',
    img: earnIcon,
  },
]

const Features = () => {
  return (
    <section>
      <MainFeature />
      {featurelistData.map(({ heading, text, img }) => (
        <FeaturesList heading={heading} text={text} img={img} key={heading} />
      ))}
      <MobileBg />
      <LaptopBg />
    </section>
  )
}

export default Features
