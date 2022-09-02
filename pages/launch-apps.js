import PageContainer from '/components/PageContainer'
import Header from 'components/Header'
import AppLaunchComponent from 'pageComponents/applaunchpage'
import Footer from 'components/Footer'

const LaunchApps = () => {
  return (
    <PageContainer title="Züs - The App Ecosystem">
      <Header removeImg />
      <AppLaunchComponent />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </PageContainer>
  )
}

export default LaunchApps
