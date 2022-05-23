import Footer from 'components/Footer'
import Header from 'components/Header'
import ScrollSnap, { ScrollSnapSection } from 'components/ScrollSnap'
import Features from 'pageComponents/store/Features'
import Hero from 'pageComponents/store/Hero'
import Work from 'pageComponents/store/Work'

const Store = () => {
  return (
    <ScrollSnap>
      <ScrollSnapSection>
        <Header removeImg />
      </ScrollSnapSection>
      <ScrollSnapSection alignDesktop="center">
        <Hero />
      </ScrollSnapSection>
      <Work />
      <Features />
      <ScrollSnapSection alignMobile="start">
        <Footer />
      </ScrollSnapSection>
    </ScrollSnap>
  )
}

export default Store
