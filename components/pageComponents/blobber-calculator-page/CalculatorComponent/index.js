import { useState } from 'react'

import AccordianContainer from 'components/AccordianContainer'
import Disclaimer from 'components/Disclaimer'
import YourRewards from 'pageComponents/blobber-calculator-page/YourRewards'
import StatsModifier from 'pageComponents/blobber-calculator-page/StatsModifier'
import ProjectedStats from 'pageComponents/blobber-calculator-page/ProjectedStats'
import CalculatorIcon from 'components/IconsComponents/calculator'
import BulletText from 'components/BulletText'

import styles from './index.module.scss'

const CalculatorComponent = () => {
  const [activeStorage, setActiveStorage] = useState(3000)
  const [zcnStake, setZcnStake] = useState(40000)
  const [zcnDel, setZcnDel] = useState(30000)
  const [commision, setComission] = useState(6)

  const labels = [
    '11/2021',
    '12/2021',
    '01/2022',
    '02/2022',
    '03/2022',
    '04/2022',
    '05/2022',
    '06/2022',
    '07/2022',
    '08/2022',
    '09/2022',
    '10/2022',
  ]

  const values = [19, 20, 30, 20, 40, 55, 65, 55, 60, 78, 70, 75]

  const modiifiedValues = values.map((item) => {
    if (activeStorage % 2 === 0)
      return (item * (activeStorage * zcnStake * commision)) / (zcnDel * 100)

    return -(item * (activeStorage * zcnStake * commision)) / (zcnDel * 100)
  })

  return (
    <div className={styles.container}>
      <CalculatorIcon />
      <div className={styles.title}>Blobber Revenue Calculator</div>

      <StatsModifier
        activeStorage={activeStorage}
        setActiveStorage={setActiveStorage}
        zcnStake={zcnStake}
        setZcnStake={setZcnStake}
        zcnDel={zcnDel}
        setZcnDel={setZcnDel}
        commision={commision}
        setComission={setComission}
      />
      <ProjectedStats
        avgStorage={300}
        avgZCNDel={40000}
        avgZCNStake={30000}
        totalBlobbers={300}
      />
      <YourRewards
        activeStorage={activeStorage}
        graphLabels={labels}
        graphValues={modiifiedValues}
        zcnDel={zcnDel}
        projectedAPRText="720%"
        projectedEarningsText="1.34m ZCN"
      />

      <AccordianContainer title="Read About the Network Assumptions">
        <BulletText>
          All Blobbers have 100% Passed Challenges (doesnt account for slashed
          income due to failed challenges)
        </BulletText>
        <BulletText>
          All Blobbers have a perfect Power Factor (maximum Free Egress and Fair
          Usage multipliers). In reality, the entire network will have an
          average Power Factor that is less than perfect.
        </BulletText>
        <BulletText>
          Your ZCN delegations are unchanged regardless of commission rate (in
          reality a high commission rate may lead to less delegations)
        </BulletText>
        <BulletText>
          All Blobbers have a perfect correlation between successful challenges
          and Active Storage. While it is true that as a Blobber increases their
          Active Storage on the network, the probability of passing more
          challenges will also increase, however the correlation may not be
          perfect on a 7 day basis. This is similar to how a coin flipped 10
          times may not land on tails 5 out of 10 times, but over time the
          probability trends closer and closer to 50% with more intervals.
        </BulletText>
        <BulletText>
          Your “Blobber Weight”, which dictates your share of blobber block
          rewards, is unchanged over time relative to the entire Zus Cloud
          Network. For instance, if more blobbers plug into the network, you
          will have to increase your Blobber stats (increase your ZCN stake,
          increase your Total Allocated Storage, etc) in order to maintain your
          Blobber Weight and thus your Blobber’s APR.
        </BulletText>
        <BulletText>
          All Blobbers have 100% Uptime (any downtime may result in)
        </BulletText>
      </AccordianContainer>
      <Disclaimer
        className={styles.disclaimer}
        title="Disclaimer"
        description={
          <>
            These projected rewards are based on the existing Züs economic
            formulas. These formulas may be subject to change, which would
            significantly alter this calculator’s displayed projections. These
            projections make several assumptions that may not translate to
            reality. These projections are in no way a promise or guarantee of
            ZCN block rewards. This calculator is merely a tool to be used to
            understand how the Züs economic protocol operates and how it issues
            block rewards according to the various mathematical formulas
            outlined in this{' '}
            <a href="https://google.com" target="_blank" rel="noreferrer">
              Economic paper
            </a>
            .
          </>
        }
      />
    </div>
  )
}

export default CalculatorComponent
