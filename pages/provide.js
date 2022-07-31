import Header from 'components/Header'
import Hero from 'pageComponents/provide/Hero'
import Features from 'pageComponents/provide/Features'
import Provider from 'pageComponents/provide/Provider'
import Footer from 'components/Footer'
import PageContainer from 'components/PageContainer'

const Earn = () => {
  return (
    <PageContainer>
      <Header removeImg />
      <Hero />
      <Features />
      <Provider />
      <Footer footerSocialLinks={false} />
    </PageContainer>
    // <ScrollSnap>
    //   <ScrollSnapSection>
    //     <Header />
    //   </ScrollSnapSection>
    //   <Hero />
    //   <Features />
    //   <ScrollSnapSection>
    //     <Provider />
    //   </ScrollSnapSection>
    //   <ScrollSnapSection alignMobile="start">
    //     <Footer />
    //   </ScrollSnapSection>
    // </ScrollSnap>
  )
}

export default Earn
