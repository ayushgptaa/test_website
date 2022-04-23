/* eslint-disable react/prop-types */
import 'styles/globals.scss'
import 'styles/fonts.scss'
import Layout from 'components/Layout'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
