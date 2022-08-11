import { generateCustomArray } from 'util/globalFunctions'

const value1 = generateCustomArray({ from: 60, length: 10 })

const value2 = generateCustomArray({ from: 75, length: 10 })

const value3 = generateCustomArray({ from: 90, length: 10 })

const value4 = generateCustomArray({ from: 120, length: 10 })

const value5 = generateCustomArray({ from: 180, length: 10 })

const value6 = generateCustomArray({ from: 185, step: 5, length: 10 })

const value7 = generateCustomArray({ from: 190, step: 8, length: 10 })

const value8 = generateCustomArray({ from: 195, step: 11, length: 10 })

const value9 = generateCustomArray({ from: 200, step: 14, length: 10 })

const labels = [
  'Launch',
  'Year1',
  'Year2',
  'Year3',
  'Year4',
  'Year5',
  'Year6',
  'Year7',
  'Year8',
  'Year9',
]

const chartData = [
  {
    values: value1,
    color: '#F44336',
    legend: 'Team & Future Development',
    border: '#F38078',
  },
  {
    values: value2,
    color: '#E91E63',
    legend: 'Ecosystem',
    border: '#ED759E',
  },
  {
    values: value3,
    color: '#9C27B0',
    legend: 'Reserve',
    border: '#AE71B8',
  },
  {
    values: value4,
    color: '#673AB7',
    legend: 'Future Incentives',
    border: '#9076BE',
  },
  {
    values: value5,
    color: '#3F51B5',
    legend: 'Token Sale',
    border: '#929BD2',
  },
  {
    values: value6,
    color: '#2196F3',
    legend: 'Wifi Validators',
    border: '#6DB8F3',
  },
  {
    values: value7,
    color: '#03A9F4',
    legend: 'Free Egress',
    border: '#6CC5ED',
  },
  {
    values: value8,
    color: '#00BCD4',
    legend: 'Miners/Sharders',
    border: '#70D2DE',
  },
  {
    values: value9,
    color: '#009688',
    legend: 'Blobbers',
    border: '#71AEA9',
  },
]

const ZCNData = [
  {
    id: '1',
    color: '#F44336',
    title: 'Team & Future Development',
    description:
      'Team allocation and future development of core Züs protocols and network infrastructure.',
  },
  {
    id: '2',
    color: '#E91E63',
    title: 'Ecosystem',
    description:
      'For immediate use to grow the Züs ecosystem and other community growth initiatives.',
  },
  {
    id: '3',
    color: '#9C27B0',
    title: 'Reserve',
    description:
      'Reserve with vesting provisions, retained by team for strategic investments and other Züs ecosystem growth initiatives.',
  },
  {
    id: '4',
    color: '#673AB7',
    title: 'Future Incentives',
    description:
      'Retained by team for future incentives, such as Service Provider initiatives and other ',
  },
  {
    id: '5',
    color: '#3F51B5',
    title: 'Token Sale',
    description: 'Token Sale allocation (Q1 2018).',
  },
  {
    id: '6',
    color: '#2090EA',
    title: 'Wifi Validators',
    description: 'Magma/WiFi validation block reward incentive.',
  },
  {
    id: '7',
    color: '#03A9F4',
    title: 'Free Egress',
    description: 'Free read block reward incentive (Cloud Growth initiative).',
  },
  {
    id: '8',
    color: '#00BCD4',
    title: 'Miners/Sharders',
    description: 'Active Set validation block reward incentive.',
  },
  {
    id: '9',
    color: '#009688',
    title: 'Blobbers',
    description: 'Storage Provider block reward incentive.',
  },
]

export { labels, chartData, ZCNData }
