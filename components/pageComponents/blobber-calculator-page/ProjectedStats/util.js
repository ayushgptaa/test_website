/* eslint-disable import/prefer-default-export */
import { convertToDecimalSeparated } from 'util/globalFunctions'

export const getStatsData = ({ avgStorage, avgZCNStake, avgZCNDel }) => {
  return [
    {
      heading: 'Average Active Storage',
      number: `${convertToDecimalSeparated(avgStorage)}`,
      bottomText: 'Per Blobber',
    },
    {
      heading: 'Average ZCN Stake',
      number: `${convertToDecimalSeparated(avgZCNStake)} ZCN`,
      bottomText: 'Per Blobber (Self-Delegation)',
    },
    {
      heading: 'Average ZCN Delegations',
      number: `${convertToDecimalSeparated(avgZCNDel)} ZCN`,
      bottomText: 'Per Blobber',
    },
  ]
}
