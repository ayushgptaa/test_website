import CalculatorComponent from 'components/pageComponents/blobber-calculator-page/CalculatorComponent'
import InflationChart from 'components/pageComponents/blobber-calculator-page/InflationGraph'

const BlobberCalculator = () => {
  return (
    <div>
      <InflationChart />
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <div>Top Part</div>
        <CalculatorComponent />
      </div>
    </div>
  )
}

export default BlobberCalculator
