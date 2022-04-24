import Footer from 'components/Footer'
import Header from 'components/Header'
import Features from 'pageComponents/store/Features'
import Hero from 'pageComponents/store/Hero'
import Work from 'pageComponents/store/Work'

const Store = () => {
  return (
    <>
      <Header removeImg />
      <Hero />
      <Work />
      <Features />
      <Footer />
    </>
  )
}

export default Store
