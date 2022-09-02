import PageContainer from 'components/PageContainer'
import PageBackground from 'components/PageBackground'
import Header from 'components/Header'
import Footer from 'components/Footer'
import WhitepaperComponent from 'pageComponents/whitepaperpage'

const Whitepapers = () => {
  return (
    <PageContainer title="Züs - Whitepapers">
      <PageBackground />
      <Header removeImg />
      <WhitepaperComponent />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </PageContainer>
  )
}

export default Whitepapers
