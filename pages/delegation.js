import Header from 'components/Header'
import Hero from '/components/pageComponents/Delegation/Hero'
import Info from 'components/pageComponents/Delegation/Info'
import Footer from 'components/Footer'
import PageContainer from 'components/PageContainer'

const Delegation = () => {
  return (
    <PageContainer>
      <Header removeImg />
      <Hero />
      <Info />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </PageContainer>
  )
}

export default Delegation
