import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'components/pageComponents/nft/Hero'
import Features from 'components/pageComponents/nft/Features'
import Footer from 'components/Footer'
import Stats from 'components/pageComponents/nft/Stats'

const Nft = () => {
  return (
    <PageContainer>
      <Header removeImg color="darker-blue" />
      <Hero />
      <Stats />
      <Features />
      <Footer footerSocialLinks={false} />
    </PageContainer>
  )
}

export default Nft
