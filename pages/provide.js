import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'pageComponents/provide/Hero'
import Earnings from 'components/pageComponents/provide/Earnings'
import Features from 'pageComponents/provide/Features'
import Provider from 'pageComponents/provide/Provider'
import Footer from 'components/Footer'

const Earn = () => {
  return (
    <PageContainer>
      <Header removeImg />
      <Hero />
      <Earnings />
      <Features />
      <Provider />
      <Footer footerCommunity={false} />
    </PageContainer>
  )
}

export default Earn
