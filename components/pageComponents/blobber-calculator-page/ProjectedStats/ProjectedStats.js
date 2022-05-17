import PropTypes from 'prop-types'

import BlueLineWrapper from 'components/SpecialWrappers/BlueLineWrapper'
import Wrapper from 'components/Wrapper'
import { NotificationIcon } from 'components/IconsComponents'

import { convertToDecimalSeparated } from 'util/globalFunctions'
import { getStatsData } from './util'

import styles from './ProjectedStats.module.scss'

const FocusText = ({ text }) => {
  return <div className={styles.focusText}>{text}</div>
}

FocusText.propTypes = {
  text: PropTypes.node.isRequired,
}

const Stats = ({ avgStorage, avgZCNStake, avgZCNDel }) => {
  const statsData = getStatsData({ avgStorage, avgZCNStake, avgZCNDel })

  return (
    <div className={styles.statsContainer}>
      {statsData.map(({ heading, number, bottomText }) => (
        <div className={styles.singleStats} key={heading}>
          <BlueLineWrapper childenParentDivClassName={styles.statsItem}>
            <h4>{heading}</h4>
            <div className={styles.projectedStatsContainerTitle}>
              <FocusText text={number} />
            </div>
            <div className={styles.statsItemBottomRow}>{bottomText}</div>
          </BlueLineWrapper>
        </div>
      ))}
    </div>
  )
}

Stats.propTypes = {
  avgStorage: PropTypes.number.isRequired,
  avgZCNStake: PropTypes.number.isRequired,
  avgZCNDel: PropTypes.number.isRequired,
}

const Note = () => {
  return (
    <div className={styles.note}>
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
  totalBlobbers,
  avgStorage,
  avgZCNStake,
  avgZCNDel,
}) => {
  return (
    <Wrapper className={styles.rootContainer}>
      <div className={styles.container1}>
        <h2 className={styles.blueText}>Projected Züs Cloud Network Stats</h2>
        <p>
          Customize the stats on the Züs Cloud Network to calculate your
          projected share of the Blobber block rewards
        </p>
      </div>
      <div className={styles.container2}>
        <h2>Total Blobbers on Züs</h2>{' '}
        <FocusText text={`${convertToDecimalSeparated(totalBlobbers)}`} />
      </div>
      <Stats
        avgStorage={avgStorage}
        avgZCNDel={avgZCNDel}
        avgZCNStake={avgZCNStake}
      />
      <Note />
    </Wrapper>
  )
}

ProjectedStats.propTypes = {
  totalBlobbers: PropTypes.number.isRequired,
  avgStorage: PropTypes.number.isRequired,
  avgZCNStake: PropTypes.number.isRequired,
  avgZCNDel: PropTypes.number.isRequired,
}

export default ProjectedStats
