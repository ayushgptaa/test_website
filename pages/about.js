import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'pageComponents/about/Hero'
import Footer from 'components/Footer'
import Idealogy from 'components/pageComponents/about/Ideology'
import Messages from 'components/pageComponents/about/Messages'
import Products from 'components/pageComponents/about/Products'

const About = () => {
  return (
    <PageContainer title="Züs - Learn more about Züs">
      <Header removeImg />
      <Hero />
      <Idealogy />
      <Messages />
      <Products />
      <Footer />
    </PageContainer>
  )
}

export default About
