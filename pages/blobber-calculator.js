import React from 'react'
import StatsModifier from 'pageComponents/blobber-calculator-page/StatsModifier'

import AccordianContainer from 'components/pageComponents/blobber-calculator-page/AccordianContainer'
import ProjectedStats from 'components/pageComponents/blobber-calculator-page/ProjectedStats'
import YourRewards from 'components/pageComponents/blobber-calculator-page/YourRewards'

const BlobberCalculator = () => {
  const [activeStorage, setActiveStorage] = React.useState(3000)
  const [zcnStake, setZcnStake] = React.useState(40000)
  const [zcnDel, setZcnDel] = React.useState(30000)
  const [commision, setComission] = React.useState(6)

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

  return (
    <div>
      <div>This is a test page, will be modified later1</div>
      <div>activeStorage Chosen is {activeStorage}</div>
      <div>commision Chosen is {commision}</div>
      <div>zcnDel Chosen is {zcnDel}</div>
      <div>zcnStake Chosen is {zcnStake}</div>
      <div>
        <StatsModifier
          activeStorage={activeStorage}
          commision={commision}
          setActiveStorage={setActiveStorage}
          setComission={setComission}
          setZcnDel={setZcnDel}
          setZcnStake={setZcnStake}
          zcnStake={zcnStake}
          zcnDel={zcnDel}
        />
      </div>

      <div>
        <AccordianContainer title="Test Title">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et
          Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
          amet.., comes from a line in section 1.10.32.
        </AccordianContainer>

        <div>
          <ProjectedStats />
        </div>
      </div>

      <YourRewards
        graphLabels={labels}
        graphValues={values}
        activeStorage={activeStorage}
        zcnDel={3231}
      />
    </div>
  )
}

export default BlobberCalculator
