import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'pageComponents/about/Hero'
import Footer from 'components/Footer'
import Idealogy from 'components/pageComponents/about/Ideology'

const About = () => {
  return (
    <PageContainer title="Züs - Learn more about Züs">
      <Header removeImg />
      <Hero />
      <Idealogy />
      <Footer />
    </PageContainer>
  )
}

export default About
