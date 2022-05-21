import styles from './DesktopNav.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from 'components/Button'

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
      <Button
        type="nav-button"
        text="Launch Apps"
        black
        onClick={() => router.push('/launch-apps')}
      />
    </div>
  )
}

export default DesktopNav
