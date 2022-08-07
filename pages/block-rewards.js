import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'pageComponents/block-rewards/Hero'
import Features from 'pageComponents/block-rewards/Features'
import BlobberInfo from 'components/pageComponents/block-rewards/BlobberInfo'
import Footer from 'components/Footer'

const BlockRewards = () => {
  return (
    <PageContainer>
      <Header removeImg />
      <Hero />
      <Features />
      <BlobberInfo />
      <Footer />
    </PageContainer>
  )
}

export default BlockRewards
