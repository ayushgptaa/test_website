import MultipleSplineChart from 'components/Chart/MultipleSplineChart'

import { theme } from 'util/globalConsts'

const InflationChart = () => {
  const labels = [
    '0',
    'Year 5',
    'Year 10',
    'Year 15',
    'Year 20',
    'Year 25',
    'Year 30',
  ]

  const values1 = [0, 90, 100, 100, 100, 100, 100]
  const values2 = [45, 80, 85, 90, 95, 97, 100]

  const formatYLabels = value => `${value}%`

  return (
    <MultipleSplineChart
      chartData={[
        {
          values: values1,
          color: theme.defaultTheme.blue,
          legend: 'chart1',
        },
        {
          values: values2,
          color: theme.defaultTheme.lightOrange,
          legend: 'chart2',
          dotted: [11, 7],
        },
      ]}
      labels={labels}
      values={values1}
      formatYLabels={formatYLabels}
      showLegend
    />
  )
}

export default InflationChart
