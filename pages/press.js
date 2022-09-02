import PageContainer from 'components/PageContainer'
import PageBackground from 'components/PageBackground'
import Header from 'components/Header'
import BlueContainerWithImg from 'components/BlueContainerWithImg'
import Footer from 'components/Footer'

const Press = () => {
  return (
    <PageContainer title="Züs - Press & Media">
      <PageBackground />
      <Header removeImg />
      <BlueContainerWithImg
        heading="For press and other media inquiries please message us on Twitter"
        subHeading="Press & Media."
      />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </PageContainer>
  )
}

export default Press
