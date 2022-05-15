import Header from 'components/Header'
import Footer from 'components/Footer'
import ErrorComponent from 'pageComponents/404page'
import PageBackground from 'components/PageBackground'

const Custom404 = () => {
  return (
    <>
      <PageBackground />
      <Header removeImg />
      <ErrorComponent />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </>
  )
}

export default Custom404
