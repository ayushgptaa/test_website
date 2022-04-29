import Header from 'components/Header'
import RoadmapComponent from 'pageComponents/roadmappage'
import Footer from 'components/Footer'

const Contact = () => {
  return (
    <>
      <Header removeImg />
      <RoadmapComponent />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </>
  )
}

export default Contact
