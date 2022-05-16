import PropTypes from 'prop-types'

import PreMainetItem from './PreMainnerInflationarySupplyItem'

import styles from './PreMainnerInflationarySupply.module.scss'

const PreMainnerInflationarySupply = ({ data }) => {
  const PreMainnerItem = data.map((item) => (
    <PreMainetItem mainnerDetails={item} key={item.id} />
  ))
  return (
    <div className={styles.supplyContainer}>
      <div className={styles.listContent}>
        <h1>Pre-Mainnet Supply</h1>
        <ul style={{ borderRight: `1px solid rgba(255, 255, 255, 0.1)` }}>
          {PreMainnerItem.slice(0, 5)}
        </ul>
      </div>
      <div className={styles.listContent}>
        <h1>Inflationary Supply (Block Rewards)</h1>
        <ul>{PreMainnerItem.slice(5, 9)}</ul>
      </div>
    </div>
  )
}
PreMainnerInflationarySupply.propTypes = {
  data: PropTypes.array,
}

export default PreMainnerInflationarySupply
