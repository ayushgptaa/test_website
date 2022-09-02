import Header from 'components/Header'
import Hero from 'pageComponents/buildpage/Hero'
import Features from 'pageComponents/buildpage/Features'
import Footer from 'components/Footer'
import Founders from 'pageComponents/buildpage/Founders'
import footerFeatureData from 'pageComponents/buildpage/Footer/footerFeatureData'
import PageContainer from 'components/PageContainer'
import Apps from 'components/pageComponents/buildpage/Apps'

const Build = () => {
  return (
    <PageContainer title="Züs - Build for the future">
      <Header removeImg />
      <Hero />
      <Features />
      <Apps />
      <Founders />
      <Footer footerFeatureData={footerFeatureData} />
    </PageContainer>
  )
}

export default Build
