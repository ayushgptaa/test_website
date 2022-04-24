import Header from 'components/Header'
import Hero from 'pageComponents/buildpage/Hero'
import Features from 'pageComponents/buildpage/Features'
import Footer from 'components/Footer'
import Founders from 'pageComponents/buildpage/Founders'

import footerFeatureData from 'pageComponents/buildpage/Footer/footerFeatureData'

const Build = () => {
  return (
    <>
      <Header removeImg />
      <Hero />
      <Features />
      <Founders />
      <Footer footerFeatureData={footerFeatureData} />
    </>
  )
}

export default Build
