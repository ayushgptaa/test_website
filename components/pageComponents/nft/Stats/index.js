import Image from 'next/image'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Table from 'components/Table'

import styles from './index.module.scss'

const productColors = [' #F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D']

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

const ProductSerial = () => {
  return (
    <div className={styles.serialContainer}>
      {productColors.map((backgroundColor, index) => {
        return (
          <div className={styles.productSerial} key={backgroundColor}>
            <span style={{ backgroundColor }} />
            <p>{`Product ${index + 1}`}</p>
          </div>
        )
      })}
    </div>
  )
}

const Stats = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.sectionTextContent}>
        <Heading text="Some sort of NFT Stat" withoutPeriod Tag="h3" />
        <Paragraph>
          Anyone can move their data over to Züs. Zero headaches. An abundance
          of storage features.
        </Paragraph>
      </div>

      <div className={styles.chartContainer}>
        <ProductSerial />

        <div className={styles.chartImg}>
          <Image
            src="/images/nft/Stats/gaugeChart.png"
            alt="gauge chart"
            quality={100}
            layout="fill"
          />
        </div>

        <div className={styles.imageText}>
          <h5>Some sort of inforgraphic showing the number or value of NFTs</h5>
          <Paragraph>
            Anyone can move their data over to Züs. Zero headaches. An abundance
            of storage features.
          </Paragraph>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <Table data={tableData} />
      </div>
    </section>
  )
}

export default Stats
