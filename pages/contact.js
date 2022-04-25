import Footer from 'components/Footer'
import Header from 'components/Header'
import ContactComponent from 'pageComponents/contactpage'

const Contact = () => {
  return (
    <>
      <Header removeImg />
      <ContactComponent />
      <Footer removefooterBackground={false} removefooterFeature={false} />
    </>
  )
}

export default Contact
