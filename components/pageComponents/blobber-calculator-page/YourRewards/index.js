import Wrapper from 'components/Wrapper'
import PropTypes from 'prop-types'
import CustomSplineChart from 'components/Chart/CustomSplineChart'
import BlueLineWrapper from 'components/SpecialWrappers/BlueLineWrapper'
import { convertToDecimalSeparated } from 'util/globalFunctions'

import styles from './index.module.scss'

const SingleHeader = ({ headerText, bottomText }) => {
  return (
    <div className={styles.singleHeaderContainer}>
      <div className={styles.singleHeaderHeaderText}>{headerText}</div>
      <div className={styles.singleHeaderLine}> </div>
      <div className={styles.singleHeaderBottomText}>{bottomText}</div>
    </div>
  )
}

SingleHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
}

const YourRewards = ({ graphLabels, graphValues, activeStorage, zcnDel }) => {
  return (
    <Wrapper>
      <div className={styles.yourRewardsContainer}>
        {/* Part1 */}
        <div className={styles.part1Container}>
          <SingleHeader bottomText="720%" headerText="Your Projected APR" />
          <SingleHeader
            bottomText="1.34m ZCN"
            headerText="Your Projected Earnings"
          />
        </div>
        {/* Part2 */}
        <div className={styles.part2Container}>
          Your Projected Blobber Rewards
        </div>
        {/* Part3 */}
        <div>
          <CustomSplineChart
            labels={graphLabels}
            values={graphValues}
            legend="Accumulated ZCN"
            minY={0}
            maxY={100}
            xAxisLegend="Time"
            yAxisLegend="ZCN"
          />
        </div>
        {/* Part4 */}
        <div className={styles.part1Container}>
          <BlueLineWrapper>
            <div className={styles.part4UpperText}>
              Projected Total Active Storage on Züs
            </div>
            <div className={styles.part4BottomText}>
              {convertToDecimalSeparated(activeStorage)} TB
            </div>
          </BlueLineWrapper>
          <BlueLineWrapper>
            <div className={styles.part4UpperText}>
              Projected Total ZCN Delegated to Blobbers
            </div>
            <div className={styles.part4BottomText}>
              {convertToDecimalSeparated(zcnDel)} TB
            </div>
          </BlueLineWrapper>
        </div>
        {/* Part5 */}
        <div className={styles.part5Container}>
          For more info on the Blobber Economics{' '}
          <a href="https://google.com" target="_blank" rel="noreferrer">
            CLICK HERE
          </a>{' '}
          to read the Blobber Economics Paper.
        </div>
      </div>
    </Wrapper>
  )
}

YourRewards.propTypes = {
  graphLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  graphValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeStorage: PropTypes.number.isRequired, // in TB
  zcnDel: PropTypes.number.isRequired, // in TB
}

export default YourRewards
