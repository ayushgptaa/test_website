/* eslint-disable no-underscore-dangle */
import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

import PropTypes from 'prop-types'
import {
  convertNumberToStringRepresentation,
  getRandomColor,
  getTextDisplayWidth,
  padToIncreaseWidth,
} from 'util/globalFunctions'

Chart.register('category')

export const MultipleAreaChart = ({
  labels,
  minY,
  maxY,
  yAxisLegend,
  xAxisLegend,
  chartTitle,
  showLegend,
  chartData,
}) => {
  const [data, setData] = React.useState({
    labels: [],
    datasets: [],
  })

  const [options, setOptions] = React.useState()

  React.useEffect(() => {
    const ctx = document.getElementById('chart').getContext('2d')

    const datasetsToShow = chartData.map((item) => {
      let colorObect = getRandomColor()

      if (typeof item.color === 'string') {
        colorObect = item.color
      } else if (typeof item.color === 'object') {
        const gradient = ctx.createLinearGradient(0, 0, 0, 250)
        if (typeof item.color === 'object') {
          gradient.addColorStop(
            0,
            `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, 0.05)`
          )
          gradient.addColorStop(
            0.5,
            `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, 0.1)`
          )
          gradient.addColorStop(
            1,
            `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, 0.2)`
          )
        }
        colorObect = gradient
      }

      return {
        label: item.legend,
        lineTension: 0.8,
        fill: 'start',
        backgroundColor: colorObect,
        borderWidth: 2,
        borderColor: '#6db8ff',
        data: item.values,
        pointRadius: 0,
        pointHoverRadius: 0,
      }
    })

    const finalData = {
      labels,
      datasets: datasetsToShow,
    }
    setData(finalData)

    // Options Part

    let maxLengthLegend = ''

    chartData.forEach((item) => {
      if (item.legend.length > maxLengthLegend.length)
        maxLengthLegend = item.legend
    })

    const displayWidth = getTextDisplayWidth(maxLengthLegend)

    const displayOptions = {
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
            color: '#FFFFFF',
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
            color: '#FFFFFF',
            callback: (value) => {
              return convertNumberToStringRepresentation(value)
            },
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
      interaction: {
        intersect: false,
        mode: 'index',
      },
      tooltips: {
        titleAlign: 'center',
        bodyAlign: 'center',
      },
      plugins: {
        title: {
          display: true,
          text: chartTitle,
        },
        legend: {
          display: showLegend === true,
        },
        tooltip: {
          enabled: true,
          bodyColor: '#FFFFFF',
          displayColors: false,
          backgroundColor: '#5F657F',
          padding: 16,
          bodyFont: {
            size: 14,
            family: 'Averta Std',
            weight: 700,
            lineHeight: '16px',
          },
          titleFont: {
            size: 18,
            family: 'Averta Std',
          },
          callbacks: {
            label(context) {
              let label = context.dataset.label || ''
              label = padToIncreaseWidth(label, displayWidth)

              if (label) label += ': '
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US').format(context.parsed.y)
              }

              return label
            },
          },
        },
      },
    }

    setOptions(displayOptions)
  }, [])

  const drawDottedLinePlugin = {
    afterDraw: (chart) => {
      if (chart.tooltip?._active?.length) {
        const { x } = chart.tooltip._active[0].element
        const yAxis = chart.scales.y
        const { ctx } = chart
        ctx.save()
        ctx.beginPath()
        ctx.setLineDash([4, 2]) /* dashes are 4px and spaces are 2px */
        ctx.moveTo(x, yAxis.top)
        ctx.lineTo(x, yAxis.bottom)
        ctx.lineWidth = 1
        ctx.strokeStyle = '#FFFFFF'
        ctx.stroke()
        ctx.restore()
      }
    },
  }

  return (
    <div>
      <Line
        data={data}
        options={options}
        id="chart"
        plugins={[drawDottedLinePlugin]}
      />
    </div>
  )
}

MultipleAreaChart.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      values: PropTypes.arrayOf(PropTypes.number).isRequired,
      color: PropTypes.oneOf(
        PropTypes.string,
        PropTypes.shape({
          r: PropTypes.string.isRequired,
          g: PropTypes.string.isRequired,
          b: PropTypes.string.isRequired,
        })
      ),
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
}

export default MultipleAreaChart
