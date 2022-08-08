import PageContainer from '/components/PageContainer'
import Header from 'components/Header'
import AppLaunchComponent from 'pageComponents/applaunchpage'
import Footer from 'components/Footer'

const LaunchApps = () => {
  return (
    <PageContainer>
      <Header removeImg />
      <AppLaunchComponent />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </PageContainer>
  )
}

export default LaunchApps
