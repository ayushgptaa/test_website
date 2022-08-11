import PropTypes from 'prop-types'

import styles from './PreMainnerInflationarySupply.module.scss'

const PreMainetItem = ({ mainnerDetails }) => {
  const { color, title, description } = mainnerDetails
  return (
    <li className={styles.supplyList}>
      <div style={{ backgroundColor: color }} className={styles.dot}></div>
      <h5>{title}</h5>
      <p>{description}</p>
    </li>
  )
}

PreMainetItem.propTypes = {
  mainnerDetails: PropTypes.object,
}

export default PreMainetItem
