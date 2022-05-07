import Header from 'components/Header'
import Footer from 'components/Footer'
import NewsPage from 'pageComponents/news-page'

const News = () => {
  return (
    <>
      <Header removeImg />
      <NewsPage />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </>
  )
}

export default News
