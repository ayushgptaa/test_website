import Link from 'next/link'

import Button from 'components/Button'

import styles from './DesktopNav.module.scss'

const DesktopNav = () => {
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
      <Button type="nav-button" text="Launch Apps" black link="/launch-apps" />
    </div>
  )
}

export default DesktopNav
