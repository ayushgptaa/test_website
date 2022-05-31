import CalculatorComponent from 'components/pageComponents/blobber-calculator-page/CalculatorComponent'
import ZCNSupply from 'components/pageComponents/blobber-calculator-page/ZCNSupply'

const BlobberCalculator = () => {
  return (
    <div>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <ZCNSupply />

        <CalculatorComponent />
      </div>
    </div>
  )
}

export default BlobberCalculator
