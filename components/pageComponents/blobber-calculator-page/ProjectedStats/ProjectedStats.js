import PropTypes from 'prop-types'

import BlueLineWrapper from 'components/SpecialWrappers/BlueLineWrapper'

import { convertToDecimalSeparated } from 'util/globalFunctions'

import { NotificationIcon } from 'components/Icons'

import styles from './ProjectedStats.module.scss'
import statsData from './statsData'

const FocusText = ({ text }) => {
  return <div className={styles.focusText}>{text}</div>
}

FocusText.propTypes = {
  text: PropTypes.node.isRequired,
}

const Stats = () => {
  return (
    <div className={styles.statsContainer}>
      {statsData.map(({ heading, number, bottomText }) => (
        <BlueLineWrapper
          childenParentDivClassName={styles.statsItem}
          key={heading}>
          <h4>{heading}</h4>
          <div className={styles.projectedStatsContainerTitle}>
            <FocusText text={convertToDecimalSeparated(number)} />
          </div>
          <div className={styles.statsItemBottomRow}>{bottomText}</div>
        </BlueLineWrapper>
      ))}
    </div>
  )
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

const ProjectedStats = () => {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.container1}>
        <h2 className={styles.blueText}>Projected Züs Cloud Network Stats</h2>
        <p>
          Customize the stats on the Zus Cloud Network to calculate your
          projected share of the Blobber block rewards
        </p>
      </div>

      <div className={styles.container2}>
        <h2>Total Blobbers on Zus</h2> <FocusText text={300} />
      </div>

      <Stats />
      <Note />
    </div>
  )
}

export default ProjectedStats
