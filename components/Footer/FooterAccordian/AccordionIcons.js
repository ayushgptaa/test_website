import Image from 'next/image'

const UpIcon = () => {
  return (
    <Image
      src="/images/Footer/upIcon.svg"
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
      src="/images/Footer/downIcon.svg"
      alt="down"
      quality={100}
      width={24}
      height={24}
    />
  )
}

export { UpIcon, DownIcon }
