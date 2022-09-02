import PageContainer from 'components/PageContainer'
import Header from 'components/Header'
import RoadmapComponent from 'pageComponents/roadmappage'
import Footer from 'components/Footer'

const Contact = () => {
  return (
    <PageContainer title="Züs - The Road Ahead">
      <Header removeImg />
      <RoadmapComponent />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </PageContainer>
  )
}

export default Contact
