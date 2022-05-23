import CalculatorComponent from 'components/pageComponents/blobber-calculator-page/CalculatorComponent'
import MultipleAreaChart from 'components/Chart/MultipleAreaChart'

const BlobberCalculator = () => {
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
    <div>
      <div>
        <MultipleAreaChart
          values={[values1, values2]}
          labels={labels}
          chartData={chartData}
          showLegend
          minY={0}
          maxY={300000000}
        />
      </div>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <div>Top Part</div>
        <CalculatorComponent />
      </div>
    </div>
  )
}

export default BlobberCalculator
