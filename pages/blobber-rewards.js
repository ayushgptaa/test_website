import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'components/pageComponents/blobber-calculator/Hero'
import CalculatorComponent from 'components/pageComponents/blobber-calculator/CalculatorComponent'
import Footer from 'components/Footer'

const BlobberCalculator = () => {
  return (
    <PageContainer title="Züs - Blobber Rewards Calculator">
      <Header removeImg />
      <Hero />
      <CalculatorComponent />
      <Footer />
    </PageContainer>
  )
}

export default BlobberCalculator
