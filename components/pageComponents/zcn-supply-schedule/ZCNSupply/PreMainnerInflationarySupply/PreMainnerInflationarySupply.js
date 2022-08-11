import PropTypes from 'prop-types'

import PreMainetItem from './PreMainnerInflationarySupplyItem'

import styles from './PreMainnerInflationarySupply.module.scss'

const PreMainnerInflationarySupply = ({ data }) => {
  const PreMainnerItem = data.map((item) => (
    <PreMainetItem mainnerDetails={item} key={item.id} />
  ))
  return (
    <div className={styles.rootContainer}>
      <div className={styles.listContent}>
        <h4>Pre-Mainnet Supply</h4>
        <ul>{PreMainnerItem.slice(0, 5)}</ul>
      </div>
      <div className={styles.listContent}>
        <h4>Inflationary Supply (Block Rewards)</h4>
        <ul>{PreMainnerItem.slice(5, 9)}</ul>
      </div>
    </div>
  )
}
PreMainnerInflationarySupply.propTypes = {
  data: PropTypes.array,
}

export default PreMainnerInflationarySupply
