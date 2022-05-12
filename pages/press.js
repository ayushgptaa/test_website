import PageBackground from 'components/PageBackground'
import Header from 'components/Header'
import BlueContainerWithImg from 'components/BlueContainerWithImg'
import Footer from 'components/Footer'

const Press = () => {
  return (
    <>
      <PageBackground />
      <Header removeImg />
      <BlueContainerWithImg
        heading="For press and other media inquiries please message us on Twitter"
        subHeading="Press & Media."
      />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </>
  )
}

export default Press
