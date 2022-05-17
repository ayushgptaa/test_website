import PropTypes from 'prop-types'

import styles from './PreMainnerInflationarySupply.module.scss'

const PreMainetItem = ({ mainnerDetails }) => {
  const { color, title, description } = mainnerDetails
  return (
    <li className={styles.supplyList}>
      <div style={{ backgroundColor: color }} className={styles.dot}></div>
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  )
}

PreMainetItem.propTypes = {
  mainnerDetails: PropTypes.object,
}

export default PreMainetItem
