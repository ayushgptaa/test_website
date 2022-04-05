import Image from 'next/image'

import MobileNav from './MobileNav/MobileNav'
import ToggleBtn from './MobileNav/ToggleBtn'
import ZusLogo from 'public/images/Header/zus.svg'

import useAnimatedNavToggler from 'Hooks/useAnimatedNavToggler'

import styles from './Header.module.scss'

const LogoLink = () => {
  return (
    <a href="/" className={styles.logoLink}>
      <Image src={ZusLogo} alt="ZusLogo" height={40} width={40} />
      <span>züs</span>
    </a>
  )
}

const Header = () => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler()

  return (
    <header className={styles.header}>
      <LogoLink />
      <MobileNav animation={animation} />
      <ToggleBtn toggleNavbar={toggleNavbar} showNavLinks={showNavLinks} />
    </header>
  )
}

export default Header
