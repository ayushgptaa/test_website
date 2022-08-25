import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import CountdownTimer from 'components/pageComponents/homepage/Hero/CountdownTimer'
import Button from 'components/Button'
import Table from 'components/Table'
import MultipleSplineChart from 'components/Chart/MultipleSplineChart'

import styles from './index.module.scss'

const tableData = [
  {
    heading: 'Comp 1 / Use Case',
    text: 'Anyone can move their data over to Züs. Zero headaches. An abundance of storage features.',
    dataSet: [
      {
        amazon: '$ 1.11 / GB',
        vult: '$ 1.11 / GB',
        id: 1,
      },
      {
        amazon: '$ 1.11 / GB',
        vult: '$ 1.11 / GB',
        id: 2,
      },
    ],
  },
  {
    heading: 'Comp 2 / Use Case',
    text: 'Anyone can move their data over to Züs. Zero headaches. An abundance of storage features.',
    dataSet: [
      {
        amazon: '$ 1.11 / GB',
        vult: '$ 1.11 / GB',
        id: 1,
      },
      {
        amazon: '$ 1.11 / GB',
        vult: '$ 1.11 / GB',
        id: 2,
      },
    ],
  },
  {
    heading: 'Comp 3 / Use Case',
    text: 'Anyone can move their data over to Züs. Zero headaches. An abundance of storage features.',
    dataSet: [
      {
        amazon: '$ 1.11 / GB',
        vult: '$ 1.11 / GB',
        id: 1,
      },
      {
        amazon: '$ 1.11 / GB',
        vult: '$ 1.11 / GB',
        id: 2,
      },
    ],
  },
]

const chartData = [
  1.8, 1.6, 1.85, 1.75, 1.95, 0.6, 0.55, 0.4, 1, 1, 1.2, 1.4, 1.3, 1.5, 1.45,
  1.6, 1.65, 1.68, 1.6, 1.8, 1.9, 1.85,
]

const labels = [
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
]

const targetDate = new Date('5 September, 2022').getTime()

const Stats = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.textContent}>
        <Fade direction="up" cascade duration={600} triggerOnce>
          <Heading text="Reliable Data." withoutPeriod Tag="h3" />
          <Heading text="Consistent Uptime." withoutPeriod Tag="h3" />
          <CountdownTimer targetDate={targetDate} removeHeading />
          <Paragraph>
            Global data consumption is projected to grow at a rate of over 25%
            per year. Today, virtually all of the world’s data is stored on
            centralized servers.
          </Paragraph>
          <div>
            <Button
              type="button"
              text="Check Our Solutions"
              transparent
              black
            />
          </div>
        </Fade>
      </div>

      <Fade delay={1000} duration={600} triggerOnce>
        <div className={styles.chart}>
          <MultipleSplineChart
            chartData={[
              {
                legend:
                  'This is our data stream showing x data per day, and uptime',
                values: chartData,
                color: {
                  r: 0,
                  g: 120,
                  b: 255,
                },
              },
            ]}
            labels={labels}
            minY={0}
            maxY={4}
            borderColor="#82D0E9"
            formatYLabels={(value) => {
              return `${value}  GB`
            }}
            stepSize={1}
            showLegend
          />
          <div className={styles.dot}></div>
        </div>
      </Fade>

      <Table data={tableData} background="#000" />
    </section>
  )
}

export default Stats
