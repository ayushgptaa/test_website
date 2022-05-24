import Header from 'components/Header'
import Hero from 'pageComponents/homepage/Hero'
import MainFeature from 'pageComponents/homepage/Features/MainFeature'
import Features from 'pageComponents/homepage/Features'
import MobileBg from 'pageComponents/homepage/Features/Mobilebg'
import LaptopBg from 'pageComponents/homepage/Features/LaptopBg'
import Testimonials from 'pageComponents/homepage/Testimonials'
import Footer from 'components/Footer'
import ScrollSnap, { ScrollSnapSection } from 'components/ScrollSnap'

const Home = () => {
  return (
    <ScrollSnap>
      <ScrollSnapSection marginMobile="1x">
        <Header />
        <Hero />
      </ScrollSnapSection>
      <ScrollSnapSection marginMobile="1x">
        <MainFeature />
      </ScrollSnapSection>
      <ScrollSnapSection alignMobile="start" marginMobile="3x">
        <Features />
      </ScrollSnapSection>
      <ScrollSnapSection alignDesktop="start" alignMobile="start">
        <MobileBg />
      </ScrollSnapSection>
      <ScrollSnapSection alignMobile="start">
        <LaptopBg />
      </ScrollSnapSection>
      <ScrollSnapSection alignMobile="start">
        <Testimonials />
      </ScrollSnapSection>
      <ScrollSnapSection alignMobile="start">
        <Footer />
      </ScrollSnapSection>
    </ScrollSnap>
  )
}

export default Home
