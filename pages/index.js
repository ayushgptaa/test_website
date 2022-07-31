import Header from 'components/Header'
import Hero from 'pageComponents/homepage/Hero'
import MainFeature from 'pageComponents/homepage/Features/MainFeature'
import Features from 'pageComponents/homepage/Features'
import Testimonials from 'pageComponents/homepage/Testimonials'
import Footer from 'components/Footer'
import PageContainer from 'components/PageContainer'
import ChimneyInfo from 'components/pageComponents/homepage/ChimneyInfo'
import ChalkInfo from 'components/pageComponents/homepage/ChalkInfo'
import VultInfo from 'components/pageComponents/homepage/VultInfo'
import BlimpInfo from 'components/pageComponents/homepage/BlimpInfo'

const Home = () => {
  return (
    <PageContainer>
      <Header />
      <Hero />
      <MainFeature />
      <Features />
      <ChimneyInfo />
      <ChalkInfo />
      <VultInfo />
      <BlimpInfo />
      <Testimonials />
      <Footer />
    </PageContainer>
  )
}

export default Home
