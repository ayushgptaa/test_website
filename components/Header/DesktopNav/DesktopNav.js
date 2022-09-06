import Link from 'next/link'

import Button from 'components/Button'

import navData from '../navData'

import styles from './DesktopNav.module.scss'

const DesktopNav = () => {
  return (
    <div className={styles.wrapper}>
      {navData.map(({ name, link, target }) => (
        <span key={name}>
          <Link href={link} passHref>
            <a href={link} target={target}>
              {name}
            </a>
          </Link>
        </span>
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
