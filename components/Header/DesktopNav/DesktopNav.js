import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from 'components/Button'

import navData from '../navData'

import styles from './DesktopNav.module.scss'

const DesktopNav = () => {
  const router = useRouter()

  return (
    <div className={styles.wrapper}>
      {navData.map(({ name, link, target }) => (
        <Link href={link} passHref key={name}>
          <a
            href={link}
            target={target}
            className={router.pathname === link ? styles.active : ''}>
            {name}
          </a>
        </Link>
      ))}

      <Button
        type="button"
        text="Launch Apps"
        black
        transparent
        link="/launch-apps"
      />
    </div>
  )
}

export default DesktopNav
