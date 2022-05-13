import PropTypes from 'prop-types'

import clsx from 'clsx'
import style from './index.module.scss'
import BlueLineWrapper from 'components/SpecialWrappers/BlueLineWrapper'
import { NotificationIcon } from 'components/Icons'

import { convertToDecimalSeparated } from 'util/utilFunctions'

const FocusText = ({ text }) => {
  return <div className={style.focusText}>{text}</div>
}

FocusText.propTypes = {
  text: PropTypes.node.isRequired,
}

const Stats = ({ avgActiveStorage, avgZCNStake, avgZCNDelegation }) => {
  return (
    <div className={style.statsContainer}>
      {/* Average Active Storage  */}
      <BlueLineWrapper childenParentDivClassName={style.statsItem}>
        <div>Average Active Storage</div>
        <div className={style.projectedStatsContainerTitle}>
          <FocusText text={avgActiveStorage ?? '300'} />
        </div>
        <div className={style.statsItemBottomRow}>Per Blobber</div>
      </BlueLineWrapper>
      {/* Average ZCN Stake  */}
      <BlueLineWrapper childenParentDivClassName={style.statsItem}>
        <div>Average ZCN Stake</div>
        <div className={style.projectedStatsContainerTitle}>
          <FocusText
            text={`${convertToDecimalSeparated(avgZCNStake ?? 40000)} ZCN`}
          />
        </div>
        <div className={style.statsItemBottomRow}>
          Per Blobber(Self-Delegation)
        </div>
      </BlueLineWrapper>
      {/* Average ZCN Delegations */}
      <BlueLineWrapper childenParentDivClassName={style.statsItem}>
        <div>Average ZCN Delegations</div>
        <div className={style.projectedStatsContainerTitle}>
          <FocusText
            text={`${convertToDecimalSeparated(avgZCNDelegation ?? 30000)} ZCN`}
          />
        </div>
        <div className={style.statsItemBottomRow}>Per Blobber</div>
      </BlueLineWrapper>
    </div>
  )
}

Stats.propTypes = {
  avgActiveStorage: PropTypes.number.isRequired,
  avgZCNStake: PropTypes.number.isRequired,
  avgZCNDelegation: PropTypes.number.isRequired,
}

const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <NotificationIcon />
      </div>
      <div>
        The Network Averages that you select above will affect your projected
        block rewards. If your stats are below the average, you'll receive less
        block rewards. If your stats are above the average, you'll receive more
        rewards.
      </div>
    </div>
  )
}

const ProjectedStats = ({
  avgActiveStorage,
  avgZCNStake,
  avgZCNDelegation,
  totalBlobber,
}) => {
  return (
    <div className={style.projectedStatsContainer}>
      {/* Title */}
      <div>
        <div
          className={clsx(style.projectedStatsContainerTitle, style.blueText)}>
          Projected Züs Cloud Network Stats
        </div>
        <div>
          Customize the stats on the Zus Cloud Network to calculate your
          projected share of the Blobber block rewards
        </div>
      </div>
      {/* Total Blobber */}
      <div className={clsx(style.projectedStatsContainerTitle, style.gap)}>
        <div>Total Blobbers on Zus</div>{' '}
        <FocusText text={totalBlobber ?? 300} />
      </div>
      {/* Scores */}
      <Stats
        avgActiveStorage={avgActiveStorage}
        avgZCNStake={avgZCNStake}
        avgZCNDelegation={avgZCNDelegation}
      />
      {/* Footer */}
      <Footer />
    </div>
  )
}
ProjectedStats.propTypes = {
  avgActiveStorage: PropTypes.number.isRequired,
  avgZCNStake: PropTypes.number.isRequired,
  avgZCNDelegation: PropTypes.number.isRequired,
  totalBlobber: PropTypes.number.isRequired,
}

export default ProjectedStats
