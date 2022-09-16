import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'pageComponents/about/Hero'
import Footer from 'components/Footer'
import Idealogy from 'components/pageComponents/about/Ideology'
import Messages from 'components/pageComponents/about/Messages'
import Features from 'components/pageComponents/about/Features'
import Products from 'components/pageComponents/about/Products'
import Testimonials from 'components/pageComponents/homepage/Testimonials'
import Provider from 'components/pageComponents/provide/Provider'
import Founders from 'components/pageComponents/buildpage/Founders'

const About = () => {
  return (
    <PageContainer title="Züs - Learn more about Züs">
      <Header removeImg />
      <Hero />
      <Idealogy />
      <Messages />
      <Products />
      <Features />
      <Testimonials />
      <Provider />
      <Founders />
      <Footer />
    </PageContainer>
  )
}

export default About
