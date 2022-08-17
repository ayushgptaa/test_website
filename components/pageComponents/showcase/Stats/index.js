// import MultipleSplineChart from 'components/Chart/MultipleSplineChart'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import CountdownTimer from 'components/pageComponents/homepage/Hero/CountdownTimer'
import Button from 'components/Button'
import Table from 'components/Table'

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

const targetDate = new Date('5 September, 2022').getTime()

const Stats = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.textContent}>
        <Heading text="Reliable Data." withoutPeriod Tag="h3" />{' '}
        <Heading text="Consistent Uptime." withoutPeriod Tag="h3" />
        <CountdownTimer targetDate={targetDate} removeHeading />
        <Paragraph>
          Global data consumption is projected to grow at a rate of over 25% per
          year. Today, virtually all of the world’s data is stored on
          centralized servers,.
        </Paragraph>
        <Button type="button" text="Check Our Solutions" transparent black />
      </div>

      <Table data={tableData} background="#000" />
    </section>
  )
}

export default Stats
