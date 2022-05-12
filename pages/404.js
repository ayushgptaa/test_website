import Header from 'components/Header'
import Footer from 'components/Footer'
import ErrorComponent from 'pageComponents/404page'

const Contact = () => {
  return (
    <>
      <Header removeImg />
      <ErrorComponent />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </>
  )
}

export default Contact
