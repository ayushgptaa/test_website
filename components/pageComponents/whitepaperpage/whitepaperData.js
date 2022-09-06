import economicsIcon from '/public/images/whitepaperpage/Icons/economicsIcon.svg'
import storageIcon from '/public/images/whitepaperpage/Icons/storageIcon.svg'
import architectureIcon from '/public/images/whitepaperpage/Icons/architectureIcon.svg'

import { whitepaperLinks } from 'SocialLinks/links'

const whitepaperData = [
  {
    icon: economicsIcon,
    text: 'Economics',
    link: whitepaperLinks.ECONOMIC_PROTOCOL,
  },
  {
    icon: storageIcon,
    text: 'Storage',
    link: whitepaperLinks.STORAGE_PROTOCOL,
  },
  {
    icon: architectureIcon,
    text: 'Architecture',
    link: whitepaperLinks.ARCHITECTURE_PROTOCOL,
  },
]

export default whitepaperData
