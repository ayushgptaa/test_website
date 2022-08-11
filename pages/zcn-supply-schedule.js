import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from '/components/pagecomponents/zcn-supply-schedule/Hero'
import ZCNSupply from 'components/pageComponents/zcn-supply-schedule/ZCNSupply'
import Footer from 'components/Footer'

const ZcnSupplySchedule = () => {
  return (
    <PageContainer>
      <Header removeImg />
      <Hero />
      <ZCNSupply />
      <Footer />
    </PageContainer>
  )
}

export default ZcnSupplySchedule
