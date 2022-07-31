import Footer from 'components/Footer'
import Header from 'components/Header'
import PageContainer from 'components/PageContainer'
// import ScrollSnap, { ScrollSnapSection } from 'components/ScrollSnap'
import Features from 'pageComponents/store/Features'
import Hero from 'pageComponents/store/Hero'
import Work from 'pageComponents/store/Work'

const Store = () => {
  return (
    <PageContainer>
      <Header removeImg />
      <Hero />
      <Work />
      <Features />
      <Footer footerSocialLinks={false} />
    </PageContainer>
    // <ScrollSnap>
    //   <ScrollSnapSection>
    //     <Header removeImg />
    //   </ScrollSnapSection>
    //   <ScrollSnapSection alignDesktop="center">
    //     <Hero />
    //   </ScrollSnapSection>
    //   <Work />
    //   <Features />
    //   <ScrollSnapSection alignMobile="start">
    //     <Footer />
    //   </ScrollSnapSection>
    // </ScrollSnap>
  )
}

export default Store
