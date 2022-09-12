import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ErrorComponent from 'pageComponents/404page'
// import PageBackground from 'components/PageBackground'

const Custom404 = () => {
  return (
    <PageContainer title="Züs - Page Not Found">
      {/* <PageBackground /> */}
      <Header removeImg />
      <ErrorComponent />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </PageContainer>
  )
}

export default Custom404
