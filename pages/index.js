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
import Showcase from 'components/pageComponents/homepage/ShowCase'

const Home = () => {
  return (
    <PageContainer title="Züs - Go Beyond Cloud">
      <Header />
      <Hero />
      <MainFeature />
      <Features />
      <Showcase />
      <VultInfo />
      <ChimneyInfo />
      <ChalkInfo />
      <BlimpInfo />
      <Testimonials />
      <Footer />
    </PageContainer>
  )
}

export default Home
