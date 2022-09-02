import Footer from 'components/Footer'
import Header from 'components/Header'
import PageContainer from 'components/PageContainer'
import Features from 'pageComponents/store/Features'
import Hero from 'pageComponents/store/Hero'
import Work from 'pageComponents/store/Work'

const Store = () => {
  return (
    <PageContainer title="Züs - Store and Retrieve your files on Züs">
      <Header removeImg color="darker-blue" />
      <Hero />
      <Work />
      <Features />
      <Footer footerCommunity={false} />
    </PageContainer>
  )
}

export default Store
