import Header from 'components/Header'
import Hero from 'pageComponents/buildpage/Hero'
import Features from 'pageComponents/buildpage/Features'
import Footer from 'components/Footer'
import Founders from 'pageComponents/buildpage/Founders'

import footerFeatureData from 'pageComponents/buildpage/Footer/footerFeatureData'
import ScrollSnap, { ScrollSnapSection } from 'components/ScrollSnap'

const Build = () => {
  return (
    <ScrollSnap>
      <ScrollSnapSection style={{ position: 'relative' }}>
        <Header removeImg />
        <Hero />
      </ScrollSnapSection>
      <Features />
      <Founders />
      <ScrollSnapSection alignMobile="start">
        <Footer footerFeatureData={footerFeatureData} />
      </ScrollSnapSection>
    </ScrollSnap>
  )
}

export default Build
