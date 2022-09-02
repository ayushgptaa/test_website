import Head from 'next/head'
import PropTypes from 'prop-types'

const Layout = ({ title }) => {
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title}</title>

      {/* Favicons */}
      <link rel="icon" href="favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#030819"
      />

      {/* Chrome, Firefox OS and Opera  */}
      <meta name="theme-color" content="#030819" />

      {/* Windows Phone  */}
      <meta name="msapplication-navbutton-color" content="#030819" />
      <meta name="msapplication-TileColor" content="#030819" />

      {/* iOS Safari  */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </Head>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Layout
