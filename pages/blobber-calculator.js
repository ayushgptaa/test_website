import CalculatorComponent from 'components/pageComponents/blobber-calculator-page/CalculatorComponent'

const BlobberCalculator = () => {
  return (
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
  )
}

export default BlobberCalculator
