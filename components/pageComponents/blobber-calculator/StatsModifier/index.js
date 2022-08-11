import PropTypes from 'prop-types'

import SliderEditor from 'components/Slider'
import Wrapper from 'components/Wrapper'
import Paragraph from 'components/Paragraph'

import { theme } from 'util/globalConsts'

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
    <Wrapper>
      <div>
        <h4 className={styles.statsModifiedTitle}>
          Your Projected Blobber Stats
        </h4>
        <Paragraph className={styles.statsModifierTitleFooter} left>
          Customize your Blobber's stats to calculate your projected share of
          the Blobber block rewards.
        </Paragraph>
      </div>

      <div className={styles.sliders}>
        {/* Active Storage */}
        <div>
          <SliderEditor
            onChange={setActiveStorage}
            currentValue={activeStorage}
            leftTitle="Your Total Active Storage"
            maxValue={3000}
            minValue={1}
            unitSymbol="TB"
            color={theme.defaultTheme.blue}
            secondaryColor={theme.defaultTheme.grayerBlue}
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
            color={theme.defaultTheme.blue}
            secondaryColor={theme.defaultTheme.grayerBlue}
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
            color={theme.defaultTheme.blue}
            secondaryColor={theme.defaultTheme.grayerBlue}
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
            color={theme.defaultTheme.solidBlue}
            secondaryColor={theme.defaultTheme.grayBlue}
            step={1}
          />
        </div>
      </div>
    </Wrapper>
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
