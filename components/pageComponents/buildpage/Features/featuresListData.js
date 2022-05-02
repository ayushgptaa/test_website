import gosdk from '/public/images/buildPage/Features/featuresListIcons/gosdk.svg'
import blobber from '/public/images/buildPage/Features/featuresListIcons/blobber.svg'
import zboxcli from '/public/images/buildPage/Features/featuresListIcons/zboxcli.svg'
import zwalletcli from '/public/images/buildPage/Features/featuresListIcons/zwalletcli.svg'

const featurelistData = [
  {
    pattern: 1,
    heading: 'GoSDK',
    text: 'A client SDK in Go to interface the blockchain and storage platform, and other smart contacts.',
    img: gosdk,
    buttonText: 'Learn More',
  },
  {
    pattern: 2,
    heading: 'Blobber',
    text: 'A storage provider (blobber) interface to the blockchain and consumers of storage.',
    img: blobber,
    buttonText: 'View',
  },
  {
    pattern: 3,
    heading: 'ZboxCLI',
    text: 'A client CLI using GoSDK to interface the blockchain, storage platform, and blobbers (storage providers).',
    img: zboxcli,
    buttonText: 'Discover',
  },
  {
    pattern: 1,
    heading: 'ZwalletCLI',
    text: 'A client CLI using GoSDK to interface the blockchain, and smart contracts for interest, lock, stake, and vesting.',
    img: zwalletcli,
    buttonText: 'Learn More',
  },
]

export default featurelistData
