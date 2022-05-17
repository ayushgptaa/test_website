import Chart from 'chart.js/auto'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

import { theme } from 'util/globalConsts'

Chart.register('category')

export const CustomSplineChart = ({
  labels,
  values,
  legend,
  minY,
  maxY,
  yAxisLegend,
  xAxisLegend,
  chartTitle,
  showLegend,
}) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    const ctx = document.getElementById('chart').getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 500)
    gradient.addColorStop(0, 'rgba(0, 158, 255, 0.01)')
    gradient.addColorStop(0.5, 'rgba(0, 158, 255, 0.05)')
    gradient.addColorStop(1, 'rgba(0, 158, 255, 0.2)')
    const finalData = {
      labels,
      datasets: [
        {
          label: legend,
          lineTension: 0.8,
          fill: 'start',
          backgroundColor: gradient, // Put the gradient here as a fill color
          borderColor: theme.defaultTheme.blue,
          borderWidth: 2,

          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointHoverBackgroundColor: theme.defaultTheme.blue,
          pointHoverBorderColor: theme.defaultTheme.white,
          pointHoverBorderWidth: 4,
          pointHoverRadius: 8,

          data: values,
        },
      ],
    }
    setData(finalData)
  }, [labels, values])

  const options = {
    responsive: true,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    hover: {
      intersect: false,
    },
    scaleLabel: "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>",
    scales: {
      x: {
        ticks: {
          color: theme.defaultTheme.white,
        },
        title: {
          display: xAxisLegend !== undefined,
          text: xAxisLegend,
        },
        font: {
          size: 20,
          fontStyle: 'italic',
        },
        grid: {
          display: true,
          color: 'rgba(217,143,7,0.1)',
        },
      },

      y: {
        ticks: {
          color: theme.defaultTheme.white,
        },
        min: minY,
        max: maxY,
        title: {
          display: yAxisLegend !== undefined,
          text: yAxisLegend,
        },
        grid: {
          display: true,
          color: 'rgba(217,143,7,0.1)',
        },
      },
    },
    plugins: {
      title: {
        display: chartTitle !== undefined,
        text: chartTitle,
      },
      legend: {
        display: showLegend === true,
      },
    },
  }

  return (
    <div>
      <Line data={data} options={options} id="chart" />
    </div>
  )
}

CustomSplineChart.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  legend: PropTypes.string.isRequired,
  minY: PropTypes.number,
  maxY: PropTypes.number,
  xAxisLegend: PropTypes.string,
  yAxisLegend: PropTypes.string,
  chartTitle: PropTypes.string,
  showLegend: PropTypes.bool,
}

export default CustomSplineChart
