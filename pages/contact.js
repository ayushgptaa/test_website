import PageBackground from 'components/PageBackground'
import Header from 'components/Header'
import BlueContainerWithImg from 'components/BlueContainerWithImg'
import Footer from 'components/Footer'

const Contact = () => {
  return (
    <>
      <PageBackground />
      <Header removeImg />
      <BlueContainerWithImg
        heading="Want to reach out? Message us on Twitter"
        subHeading="Contact Züs."
      />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </>
  )
}

export default Contact
