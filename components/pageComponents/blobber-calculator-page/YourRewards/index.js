import Wrapper from 'components/Wrapper'
import PropTypes from 'prop-types'

import BlueLineWrapper from 'components/SpecialWrappers/BlueLineWrapper'
import { convertToDecimalSeparated } from 'util/globalFunctions'

import styles from './index.module.scss'
import MultipleSplineChart from 'components/Chart/MultipleSplineChart'

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

const YourRewards = ({
  graphLabels,
  graphValues,
  activeStorage,
  zcnDel,
  projectedAPRText,
  projectedEarningsText,
}) => {
  return (
    <Wrapper>
      <div className={styles.yourRewardsContainer}>
        {/* Part1 */}
        <div className={styles.part1Container}>
          <SingleHeader
            bottomText={projectedAPRText}
            headerText="Your Projected APR"
          />
          <SingleHeader
            bottomText={projectedEarningsText}
            headerText="Your Projected Earnings"
          />
        </div>
        {/* Part2 */}
        <div className={styles.part2Container}>
          Your Projected Blobber Rewards
        </div>
        {/* Part3 */}
        <div>
          <MultipleSplineChart
            labels={graphLabels}
            chartData={[
              {
                legend: 'Accumulated ZCN',
                values: graphValues,
                color: {
                  r: 0,
                  g: 158,
                  b: 255,
                },
              },
            ]}
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
  projectedAPRText: PropTypes.string.isRequired,
  projectedEarningsText: PropTypes.string.isRequired,
}

export default YourRewards
