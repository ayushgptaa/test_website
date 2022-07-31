import { useEffect, useState } from 'react'

const useGetScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    // eslint-disable-next-line no-restricted-globals
    if (screen.width < 768) {
      setIsMobile(true)
    }
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
