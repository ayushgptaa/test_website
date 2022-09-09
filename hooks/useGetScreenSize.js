import { useEffect, useState } from 'react'

const useGetScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 768) {
      return setIsMobile(true)
    }
    return setIsMobile(false)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}

export default useGetScreenSize
