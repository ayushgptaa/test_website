import SliderEditor from 'components/Slider'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const StatsModifier = ({
  activeStorage,
  setActiveStorage,
  zcnStake,
  setZcnStake,
  zcnDel,
  setZcnDel,
  commision,
  setComission,
}) => {
  return (
    <div className={styles.statsModifiedContainer}>
      {/* Title */}
      <div>
        <div className={styles.statsModifiedTitle}>
          Your Projected Blobber Stats
        </div>
        <div className={styles.statsModifierTitleFooter}>
          Customize your Blobber's stats to calculate your projected share of
          the Blobber block rewards.
        </div>
      </div>
      {/* Active Storage */}
      <div>
        <SliderEditor
          onChange={setActiveStorage}
          currentValue={activeStorage}
          leftTitle="Your Total Active Storage"
          maxValue={6000}
          minValue={1}
          unitSymbol="TB"
          color="#009EFF"
          step={1}
        />
      </div>
      {/* ZCN Stake */}
      <div>
        <SliderEditor
          onChange={setZcnStake}
          currentValue={zcnStake}
          leftTitle="Your ZCN Stake (Self-Delegation)"
          maxValue={10000000}
          minValue={1000}
          unitSymbol="ZCN"
          color="#009EFF"
          step={1000}
        />
      </div>
      {/* ZCN Delegation */}
      <div>
        <SliderEditor
          onChange={setZcnDel}
          currentValue={zcnDel}
          leftTitle="Your ZCN Delegations"
          maxValue={10000000}
          minValue={0}
          unitSymbol="ZCN"
          color="#009EFF"
          step={1000}
        />
      </div>
      {/* Comission */}
      <div>
        <SliderEditor
          onChange={setComission}
          currentValue={commision}
          leftTitle="Your Commission Rate"
          maxValue={50}
          minValue={0}
          unitSymbol="%"
          step={1}
        />
      </div>
    </div>
  )
}

StatsModifier.propTypes = {
  activeStorage: PropTypes.number.isRequired,
  setActiveStorage: PropTypes.func.isRequired,
  zcnStake: PropTypes.number.isRequired,
  setZcnStake: PropTypes.func.isRequired,
  zcnDel: PropTypes.number.isRequired,
  setZcnDel: PropTypes.func.isRequired,
  commision: PropTypes.number.isRequired,
  setComission: PropTypes.func.isRequired,
}

export default StatsModifier
