import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'components/pageComponents/zcn/Hero'
import About from 'components/pageComponents/zcn/About'
import Footer from 'components/Footer'
import footerFeatureData from 'pageComponents/buildpage/Footer/footerFeatureData'
import Features from 'components/pageComponents/zcn/Features'

const Build = () => {
  return (
    <PageContainer>
      <Header removeImg />
      <Hero />
      <About />
      <Features />
      <Footer footerFeatureData={footerFeatureData} />
    </PageContainer>
  )
}

export default Build
