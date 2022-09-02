import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'components/pageComponents/stacking/Hero'
import Features from 'components/pageComponents/stacking/Features'
import Footer from 'components/Footer'

const Build = () => {
  return (
    <PageContainer title="Züs - Blobber Stacking">
      <Header removeImg />
      <Hero />
      <Features />
      <Footer footerCommunity={false} footerFeature={false} />
    </PageContainer>
  )
}

export default Build
