import PropTypes from 'prop-types'

import BlueLineWrapper from 'components/SpecialWrappers/BlueLineWrapper'
import Wrapper from 'components/Wrapper'
import Paragraph from 'components/Paragraph'
import { NotificationIcon } from 'components/IconsComponents'

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
        <BlueLineWrapper className={styles.statsItem} key={heading}>
          <h4>{heading}</h4>
          <div className={styles.projectedStatsContainerTitle}>
            <FocusText text={number} />
          </div>
          {bottomText && <Paragraph left>{bottomText}</Paragraph>}
        </BlueLineWrapper>
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
      <Paragraph left>
        The Network Averages that you select above will affect your projected
        block rewards. If your stats are below the average, you'll receive less
        block rewards. If your stats are above the average, you'll receive more
        rewards.
      </Paragraph>
    </div>
  )
}

const ProjectedStats = ({ avgStorage, avgZCNStake, avgZCNDel }) => {
  return (
    <Wrapper className={styles.rootContainer}>
      <div className={styles.container1}>
        <h4 className={styles.blueText}>Projected Züs Cloud Network Stats</h4>
        <Paragraph left>
          Customize the stats on the Züs Cloud Network to calculate your
          projected share of the Blobber block rewards
        </Paragraph>
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
  avgStorage: PropTypes.number.isRequired,
  avgZCNStake: PropTypes.number.isRequired,
  avgZCNDel: PropTypes.number.isRequired,
}

export default ProjectedStats
