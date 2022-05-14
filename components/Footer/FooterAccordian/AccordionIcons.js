import Image from 'next/image'

import upIcon from '/public/images/Footer/upIcon.svg'
import downIcon from '/public/images/Footer/downIcon.svg'

const UpIcon = () => {
  return (
    <Image
      src={`/${upIcon.src}`}
      alt="up"
      quality={100}
      width={24}
      height={24}
    />
  )
}

const DownIcon = () => {
  return (
    <Image
      src={`/${downIcon.src}`}
      alt="down"
      quality={100}
      width={24}
      height={24}
    />
  )
}

export { UpIcon, DownIcon }
