import Header from 'components/Header'
import Hero from 'pageComponents/earn/Hero'
import Features from 'pageComponents/earn/Features'
import Provider from 'pageComponents/earn/Provider'
import Footer from 'components/Footer'
import ScrollSnap, { ScrollSnapSection } from 'components/ScrollSnap'

const Earn = () => {
  return (
    <ScrollSnap>
      <ScrollSnapSection>
        <Header />
      </ScrollSnapSection>
      <Hero />
      <Features />
      <ScrollSnapSection>
        <Provider />
      </ScrollSnapSection>
      <ScrollSnapSection alignMobile="start">
        <Footer />
      </ScrollSnapSection>
    </ScrollSnap>
  )
}

export default Earn
