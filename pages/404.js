import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ErrorComponent from 'pageComponents/404page'

const Custom404 = () => {
  return (
    <PageContainer title="Züs - Page Not Found">
      <Header removeImg />
      <ErrorComponent />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </PageContainer>
  )
}

export default Custom404
