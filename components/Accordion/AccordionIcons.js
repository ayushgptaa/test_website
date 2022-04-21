import Image from 'next/image'

import upIcon from '/public/images/Footer/upIcon.svg'
import downIcon from '/public/images/Footer/downIcon.svg'

const UpIcon = () => {
  return <Image src={upIcon} alt="up" quality={100} />
}

const DownIcon = () => {
  return <Image src={downIcon} alt="down" quality={100} />
}

export { UpIcon, DownIcon }
