import PageBackground from 'components/PageBackground'
import Header from 'components/Header'
import Footer from 'components/Footer'
import WhitepaperComponent from 'pageComponents/whitepaperpage'

const Whitepapers = () => {
  return (
    <>
      <PageBackground />
      <Header removeImg />
      <WhitepaperComponent />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </>
  )
}

export default Whitepapers
