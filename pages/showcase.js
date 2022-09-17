import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'components/pageComponents/showcase/Hero'
import Features from 'components/pageComponents/showcase/Features'
import Footer from 'components/Footer'
import CustomShowcase from 'components/pageComponents/showcase/CustomShowcase'

const Showcase = () => {
  return (
    <PageContainer title="Züs - The Showcase">
      <Header borderWhite removeImg useWhiteLogo />
      <Hero />
      <CustomShowcase />
      <Features />
      <Footer />
    </PageContainer>
  )
}

export default Showcase
