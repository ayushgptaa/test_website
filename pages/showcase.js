import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from '/components/pageComponents/showcase/Hero'
import Stats from '/components/pageComponents/showcase/Stats'
import Features from '/components/pageComponents/homepage/Features'
import Footer from 'components/Footer'
import Testimonials from 'components/pageComponents/homepage/Testimonials'

const Build = () => {
  return (
    <PageContainer>
      <Header borderWhite removeImg />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <Footer />
    </PageContainer>
  )
}

export default Build
