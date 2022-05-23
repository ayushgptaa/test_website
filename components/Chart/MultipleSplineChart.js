import ReactChart from 'chart.js/auto'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

import { theme } from 'util/globalConsts'

ReactChart.register('category')

export const MultipleSplineChart = ({
  chartData,
  labels,
  minY,
  maxY,
  yAxisLegend,
  xAxisLegend,
  chartTitle,
  showLegend,
  formatYLabels,
  hidePoints,
}) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  })

  // Example taken from https://codepen.io/kurkle/pen/zYYPagB

  useEffect(() => {
    const ctx = document.getElementById('chart').getContext('2d')

    const dataSetsToUse = chartData.map((item) => {
      let colorToUse = theme.defaultTheme.blue
      let backgroundColor

      if (item.color) {
        if (typeof item.color === 'string') colorToUse = item.color
        else {
          const gradient = ctx.createLinearGradient(0, 0, 0, 500)
          gradient.addColorStop(
            0,
            `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, ${0.01})`
          )
          gradient.addColorStop(
            0.5,
            `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, ${0.05})`
          )
          gradient.addColorStop(
            1,
            `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, ${0.2})`
          )

          backgroundColor = gradient
          colorToUse = `rgb(${item.color.r},${item.color.g},${item.color.b})`
        }
      }

      return {
        label: item.legend,
        fill: backgroundColor && 'start',
        backgroundColor,
        borderColor: colorToUse,
        pointBorderColor: 'rgba(0, 0, 0, 0)',
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        pointHoverBackgroundColor: item.pointColor ?? colorToUse,
        pointHoverBorderColor: theme.defaultTheme.white,
        pointHoverBorderWidth: hidePoints ? 0 : 4,
        pointHoverRadius: hidePoints ? 0 : 8,
        data: item.values,
        borderDash: item.dotted,
        opacity: 0,
      }
    })

    const finalData = {
      labels,
      datasets: dataSetsToUse,
    }
    setData(finalData)
  }, [labels, chartData])

  const options = {
    responsive: true,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    hover: {
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.5,
        borderCapStyle: 'round',
      },
    },
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
          color: 'rgba(255,255,255,0.1)',
        },
      },

      y: {
        ticks: {
          color: theme.defaultTheme.white,
          callback: formatYLabels || undefined,
        },
        min: minY,
        max: maxY,
        title: {
          display: yAxisLegend !== undefined,
          text: yAxisLegend,
        },
        grid: {
          display: true,
          color: 'rgba(255,255,255,0.1)',
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
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: 60,
            yMax: 60,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
          },
        },
      },
    },
  }

  return <Line data={data} options={options} id="chart" />
}

MultipleSplineChart.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      values: PropTypes.arrayOf(PropTypes.number).isRequired,
      dotted: PropTypes.arrayOf(PropTypes.number), // array of two numbers [dash width, dash gap]
      color: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          // use r,g,b method if you want to fill in the space below the line with the color
          r: PropTypes.number.isRequired,
          g: PropTypes.number.isRequired,
          b: PropTypes.number.isRequired,
        }),
      ]),
      pointColor: PropTypes.string,
      legend: PropTypes.string.isRequired,
    })
  ).isRequired,

  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  minY: PropTypes.number,
  maxY: PropTypes.number,
  xAxisLegend: PropTypes.string,
  yAxisLegend: PropTypes.string,
  chartTitle: PropTypes.string,
  showLegend: PropTypes.bool,
  formatYLabels: PropTypes.func,
  // a function that takes in y parameter value and returns text    refer https://www.chartjs.org/docs/latest/axes/labelling.html
  hidePoints: PropTypes.bool,
}

export default MultipleSplineChart
