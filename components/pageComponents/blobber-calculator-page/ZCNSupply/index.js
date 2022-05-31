import clsx from 'clsx'

import Button from 'components/Button'
import MultipleAreaChart from 'components/Chart/MultipleAreaChart'
import PreMainnerInflationarySupply from 'components/PreMainnerInflationarySupply'

import InflationChart from '../InflationGraph'
import ZCNData from './ZCNData'

import { convertNumberToStringRepresentation } from 'util/globalFunctions'

import style from './index.module.scss'

const ZCNSupply = () => {
  const labels = [
    'Launch',
    'Year1',
    'Year2',
    'Year3',
    'Year4',
    'Year5',
    'Year6',
    'Year7',
    'Year8',
    'Year9',
    'Year10',
    'Year11',
  ]

  const multiplier = 1000000

  const values1 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10].map(
    (item) => item * multiplier
  )
  const values2 = [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25].map(
    (item) => item * multiplier
  )
  const values3 = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50].map(
    (item) => item * multiplier
  )

  const value4 = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105].map(
    (item) => item * multiplier
  )
  const value5 = [65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120].map(
    (item) => item * multiplier
  )
  const value6 = [
    80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140,
  ].map((item) => item * multiplier)
  const value7 = [
    100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220,
  ].map((item) => item * multiplier)

  const chartData = [
    {
      values: values1,
      color: '#F44336',
      legend: 'Blobbers',
    },
    {
      values: values2,
      color: '#E91E63',
      legend: 'Miners/Sharders',
    },
    {
      values: values3,
      color: '#9C27B0',
      legend: 'Free Egress',
    },
    {
      values: value4,
      legend: 'Wifi Validators',
    },
    {
      values: value5,
      legend: 'Token Sale',
    },
    {
      values: value6,
      legend: 'Future Incentives',
    },
    {
      values: value7,
      legend: 'Reserve',
    },
  ]

  return (
    <>
      {/* Title */}
      <div className={clsx(style.titleText, style.title)}>
        Hard-coded for lower inflation with every epoch.
      </div>
      {/* Rest of stuff */}
      <div className={style.container}>
        <div className={style.subTitle}>ZCN Supply Schedule</div>
        <MultipleAreaChart
          values={[values1, values2]}
          labels={labels}
          chartData={chartData}
          minY={0}
          maxY={300000000}
          formatYLabels={(value) =>
            `${convertNumberToStringRepresentation(
              value
            )}\t\t\t\t\t\t\t\t\t\t\t`
          }
        />
        <PreMainnerInflationarySupply data={ZCNData} />

        <div className={style.titleText}>ZCN Inflation Rate</div>
        <div className={style.subTitle}>
          Percent of Total Supply Cap Reached Over Time
        </div>
        <div style={{ marginTop: 134 }}>
          <InflationChart />
        </div>
        <div className={style.bottomText}>
          Global data consumption is projected to grow at a rate of over 25% per
          year. Today, virtually all of the world’s data is stored on
          centralized servers, which are controlled by a handful of
          corporations.
        </div>
        <div className={style.bottomButton}>
          <Button type="button" text="Check Our Solutions" transparent black />
        </div>
      </div>
    </>
  )
}

export default ZCNSupply
