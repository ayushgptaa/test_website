import PreMainnerInflationarySupply from 'components/pageComponents/zcn-supply-schedule/ZCNSupply/PreMainnerInflationarySupply'
import CheckOurSolutions from 'components/CheckOurSolutions'

const DummyPreMainner = [
  {
    id: '1',
    color: '#F44336',
    title: 'Team & Future Development',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
  },
  {
    id: '2',
    color: '#E91E63',
    title: 'Ecosystem',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
  },
  {
    id: '3',
    color: '#9C27B0',
    title: 'Reserve',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
  },
  {
    id: '4',
    color: '#673AB7',
    title: 'Future Incentives',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
  },
  {
    id: '5',
    color: '#3F51B5',
    title: 'Token Sale',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
  },
  {
    id: '6',
    color: '#2090EA',
    title: 'Wifi Validators',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
  },
  {
    id: '7',
    color: '#03A9F4',
    title: 'Free Egress',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
  },
  {
    id: '8',
    color: '#00BCD4',
    title: 'Miners/Sharders',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
  },
  {
    id: '9',
    color: '#009688',
    title: 'Blobbers',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
  },
]

const DisclaimerPage = () => {
  return (
    <>
      <PreMainnerInflationarySupply data={DummyPreMainner} />
      <CheckOurSolutions />
    </>
  )
}

export default DisclaimerPage
