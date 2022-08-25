import { Fade } from 'react-awesome-reveal'

import MultipleAreaChart from 'components/Chart/MultipleAreaChart'
import PreMainnerInflationarySupply from './PreMainnerInflationarySupply'

import { chartData, labels, ZCNData } from './data'

import { convertNumberToStringRepresentation } from 'util/globalFunctions'

import style from './index.module.scss'

const ZCNSupply = () => {
  return (
    <section>
      <div className={style.rootContainer}>
        <div className={style.chartContainer}>
          <Fade delay={500} duration={800} triggerOnce>
            {chartData && (
              <MultipleAreaChart
                labels={labels}
                chartData={chartData}
                minY={0}
                maxY={375000000}
                formatYLabels={(value) => {
                  return `${convertNumberToStringRepresentation(value)}`
                }}
              />
            )}
          </Fade>
        </div>
        <PreMainnerInflationarySupply data={ZCNData} />
      </div>
    </section>
  )
}

export default ZCNSupply
