import styles from './DesktopNav.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const DesktopNav = () => {
  const router = useRouter()

  return (
    <div className={styles.wrapper}>
      <span>
        <Link href="/store">Store</Link>
      </span>
      <span>
        <Link href="/build">Build</Link>
      </span>
      <span>
        <Link href="/earn">Earn</Link>
      </span>
      <button onClick={() => router.push('/launch-apps')}>
        <span>Launch Apps</span>
      </button>
    </div>
  )
}

export default DesktopNav
