import Disclaimer from 'components/Disclaimer'

const DisclaimerPage = () => {
  const description =
    'These projected rewards are based on the existing Züs economic formulas. These formulas may be subject to change, which would significantly alter this calculator’s displayed projections. These projections make several assumptions that may not translate to reality. These projections are in no way a promise or guarantee of ZCN block rewards. This calculator is merely a tool to be used to understand how the Züs economic protocol operates and how it issues block rewards according to the various mathematical formulas outlined in this [Economic paper] [LINK TO ECONOMIC PAPER].'

  return <Disclaimer title="Disclaimer" description={description} />
}

export default DisclaimerPage
