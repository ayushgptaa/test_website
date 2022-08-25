/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import PropTypes from 'prop-types'

import {
  getRandomColor,
  getTextDisplayWidth,
  padToIncreaseWidth,
} from 'util/globalFunctions'

import useGetScreenSize from 'hooks/useGetScreenSize'

Chart.register('category')

const MultipleAreaChart = ({
  labels,
  minY,
  maxY,
  yAxisLegend,
  xAxisLegend,
  chartTitle,
  showLegend,
  chartData,
  formatYLabels,
}) => {
  const isMobile = useGetScreenSize()

  const [data, setData] = useState({
    labels: [],
    datasets: [],
  })
  const [options, setOptions] = useState()

  useEffect(() => {
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
        borderColor: item?.border || '#6db8ff',
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
            font: {
              size: isMobile ? 9 : 12,
            },
          },
          padding: isMobile ? 9 : 16,

          title: {
            display: xAxisLegend !== undefined,
            text: xAxisLegend,
          },

          grid: {
            display: true,
            color: 'rgba(255,255,255,0.1)',
          },
        },

        y: {
          ticks: {
            color: '#FFFFFF',
            stepSize: 75000000,
            callback: formatYLabels || undefined,
            padding: isMobile ? 9 : 20,
            font: {
              size: isMobile ? 9 : 12,
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
            color: 'rgba(255,255,255,0.1)',
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
          background: 'rgba(4, 12, 29, 0.4)',
          padding: 22,
          borderColor: 'rgba(139, 139, 139, 0.3)',
          borderWidth: 1,
          bodyFont: {
            size: 12,
            family: 'Averta Std',
            weight: 600,
            lineHeight: '16px',
          },
          bodyAlign: 'left',
          callbacks: {
            title() {},
            label(context) {
              let label = context.dataset.label || ''
              label = padToIncreaseWidth(label, displayWidth)

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
  }, [isMobile])

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
    <Line
      data={data}
      options={options}
      id="chart"
      plugins={[drawDottedLinePlugin]}
    />
  )
}

MultipleAreaChart.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      values: PropTypes.arrayOf(PropTypes.number).isRequired,
      color: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          r: PropTypes.string.isRequired,
          g: PropTypes.string.isRequired,
          b: PropTypes.string.isRequired,
        }),
      ]),
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
}

export default MultipleAreaChart
