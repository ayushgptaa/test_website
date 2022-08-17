import vultIcon from '/public/images/applaunchpage/Icons/vultIcon.svg'
import boltIcon from '/public/images/applaunchpage/Icons/boltIcon.svg'
import atlusIcon from '/public/images/applaunchpage/Icons/atlusIcon.svg'
import blimpIcon from '/public/images/applaunchpage/Icons/blimpIcon.svg'
import chimneyIcon from '/public/images/applaunchpage/Icons/chimneyIcon.svg'
import chalkIcon from '/public/images/applaunchpage/Icons/chalkIcon.svg'

const applaunchData = [
  {
    icon: vultIcon,
    heading: 'Vult',
    text: 'A Züs crypto app. Securely upload, download, and share files',
    btnText: 'Storage',
    link: '/store',
  },
  {
    icon: chalkIcon,
    heading: 'Chalk',
    text: 'Create and manage your NFTs and NFT packs on Züs.',
    btnText: 'NFT',
    link: '/nft',
  },
  {
    icon: boltIcon,
    heading: 'Bolt',
    text: 'A Züs crypto wallet. Securely sent, receive, stake and earn $ZCN.',
    btnText: 'Wallet',
    link: '/stacking',
  },
  {
    icon: blimpIcon,
    heading: 'Blimp',
    text: 'A Züs storage app for the Enterprise, optimized for simple cloud migration & integration.',
    btnText: 'Storage',
    link: '/showcase',
  },
  {
    icon: atlusIcon,
    heading: 'Atlus',
    text: 'An explorer optimised to search and querly the Züs Cloud Network',
    btnText: 'Explore',
    link: '/',
  },

  {
    icon: chimneyIcon,
    heading: 'Chimney',
    text: 'A Züs storage provider app that enables Züs blobbers to easily plug-in and earn.',
    btnText: 'Storage',
    link: '/provide',
  },
]

export default applaunchData
