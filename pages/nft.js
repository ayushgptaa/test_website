import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'components/pageComponents/nft/Hero'
import Features from 'components/pageComponents/nft/Features'
import NftCreations from 'components/pageComponents/nft/NftCreations'
import Stats from 'components/pageComponents/nft/Stats'
import Footer from 'components/Footer'

const Nft = () => {
  return (
    <PageContainer title="Züs - Permanent Storage for NFTs ">
      <Header removeImg color="darker-blue" />
      <Hero />
      <NftCreations />
      <Stats />
      <Features />
      <Footer footerCommunity={false} />
    </PageContainer>
  )
}

export default Nft
