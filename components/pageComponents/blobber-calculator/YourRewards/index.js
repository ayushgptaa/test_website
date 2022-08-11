import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import Paragraph from 'components/Paragraph'
import Heading from 'components/Heading'
import BlueLineWrapper from 'components/SpecialWrappers/BlueLineWrapper'
import MultipleSplineChart from 'components/Chart/MultipleSplineChart'

import { convertToDecimalSeparated } from 'util/globalFunctions'

import styles from './index.module.scss'

const BlueContainerData = [
  {
    heading: 'Projected Total Active Storage on Züs',
    number: '12000',
  },
  {
    heading: 'Projected Total ZCN Delegated to Blobbers',
    number: '72000000',
  },
]

const singleHeaderData = [
  { topText: 'Your Projected APR', bottomText: '720%' },
  { topText: 'Your Projected Annual Earnings', bottomText: '1.34m ZCN' },
]

const SingleHeader = ({ topText, bottomText }) => {
  return (
    <div className={styles.singleHeaderContainer}>
      <Paragraph className={styles.singleHeaderHeaderText}>{topText}</Paragraph>
      <Heading text={bottomText} Tag="h4" withoutPeriod />
    </div>
  )
}

const YourRewards = ({ graphLabels, graphValues }) => {
  return (
    <Wrapper className={styles.rootContainer}>
      <div className={styles.container1}>
        {singleHeaderData.map(({ topText, bottomText }) => {
          return (
            <SingleHeader
              topText={topText}
              bottomText={bottomText}
              key={topText}
            />
          )
        })}
      </div>

      <div className={styles.container2}>
        <Heading text="Your Projected Blobber Rewards" withoutPeriod Tag="h4" />
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
          xAxisLegend=""
          yAxisLegend="ZCN"
        />
      </div>

      <div className={styles.container3}>
        {BlueContainerData.map(({ heading, number }) => {
          return (
            <BlueLineWrapper key={heading} className={styles.blueContainer}>
              <Heading text={heading} withoutPeriod Tag="h5" />
              <p>{convertToDecimalSeparated(number)} TB</p>
            </BlueLineWrapper>
          )
        })}
      </div>

      <div className={styles.container4}>
        For more info on the Blobber Economics{' '}
        <a href="https://google.com" target="_blank" rel="noreferrer">
          CLICK HERE [LINK TO ECONOMIC PAPER]{' '}
        </a>
        to read the Blobber Economics Paper.
      </div>
    </Wrapper>
  )
}

SingleHeader.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
}

YourRewards.propTypes = {
  graphLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  graphValues: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default YourRewards
