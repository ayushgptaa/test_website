import PropTypes from 'prop-types'

import Layout from 'components/Layout'

import styles from './index.module.scss'

const PageContainer = ({ title, children }) => {
  return (
    <>
      <Layout title={title} />
      <div className={styles.container}>{children}</div>
    </>
  )
}

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
}

export default PageContainer
