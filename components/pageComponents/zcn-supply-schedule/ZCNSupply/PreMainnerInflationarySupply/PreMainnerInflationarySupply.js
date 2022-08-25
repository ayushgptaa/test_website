import PropTypes from 'prop-types'
import { Fade } from 'react-awesome-reveal'

import PreMainetItem from './PreMainnerInflationarySupplyItem'

import styles from './PreMainnerInflationarySupply.module.scss'

const PreMainnerInflationarySupply = ({ data }) => {
  const PreMainnerItem = data.map((item) => (
    <PreMainetItem mainnerDetails={item} key={item.id} />
  ))
  return (
    <div className={styles.rootContainer}>
      <Fade delay={500} duration={700} triggerOnce>
        <div className={styles.listContent}>
          <h4>Pre-Mainnet Supply</h4>
          <ul>{PreMainnerItem.slice(0, 5)}</ul>
        </div>
      </Fade>
      <Fade delay={500} duration={700} triggerOnce>
        <div className={styles.listContent}>
          <h4>Inflationary Supply (Block Rewards)</h4>
          <ul>{PreMainnerItem.slice(5, 9)}</ul>
        </div>
      </Fade>
    </div>
  )
}
PreMainnerInflationarySupply.propTypes = {
  data: PropTypes.array,
}

export default PreMainnerInflationarySupply
