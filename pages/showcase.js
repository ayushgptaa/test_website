import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Hero from 'components/pageComponents/showcase/Hero'
import Stats from 'components/pageComponents/showcase/Stats'
import Features from 'components/pageComponents/homepage/Features'
import Testimonials from 'components/pageComponents/homepage/Testimonials'
import Footer from 'components/Footer'

const featurelistData = [
  {
    heading: 'Reliable active storage',
    text: 'Züs storage is easy to set up for enterprises and individuals alike.',
    img: '/images/homePage/Features/storeIcon.svg',
    link: '/store',
  },
  {
    heading: 'USP 2',
    text: 'Start building on top of the Züs Cloud Network. The future awaits you.',
    img: '/images/homePage/Features/buildIcon.svg',
    link: '/build',
  },
  {
    heading: 'USP 3',
    text: 'Fueled by a crypto economy that rewards Service Providers and ZCN Delegators.',
    img: '/images/homePage/Features/earnIcon.svg',
    link: '/earn',
  },
]

const Showcase = () => {
  return (
    <PageContainer title="Züs - The Showcase">
      <Header borderWhite removeImg useWhiteLogo />
      <Hero />
      <Stats />
      <Features customFeatureData={featurelistData} />
      <Testimonials />
      <Footer />
    </PageContainer>
  )
}

export default Showcase
