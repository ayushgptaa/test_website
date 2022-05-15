import Header from 'components/Header'
import AppLaunchComponent from 'pageComponents/applaunchpage'
import Footer from 'components/Footer'

const LaunchApps = () => {
  return (
    <>
      <Header removeImg />
      <AppLaunchComponent />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </>
  )
}

export default LaunchApps