import Header from 'components/Header'
import Footer from 'components/Footer'
import { NewsDetailPage } from 'pageComponents/news-page'
import newsPageData from 'pageComponents/news-page/NewsPageData'
import PropTypes from 'prop-types'

const NewsDetail = ({ data }) => {
  return (
    <>
      <Header removeImg />
      <NewsDetailPage data={data} />
      <Footer showfooterBackground={false} showfooterFeature={false} />
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: newsPageData.map((page) => ({ params: { id: page.id } })),
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const data = newsPageData.find((page) => page.id === id)

  return {
    props: {
      data,
    },
  }
}

NewsDetail.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
  }),
}

export default NewsDetail
