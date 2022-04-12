import Image from 'next/image'

import { MobileNav, ToggleBtn } from './MobileNav'

import useAnimatedNavToggler from 'Hooks/useAnimatedNavToggler'

import HeroImg from 'public/images/Hero/heroImg.png'
import ZusLogo from 'public/images/Header/zus.svg'

import styles from './Header.module.scss'

const LogoLink = () => {
  return (
    <a href="/" className={styles.logoLink}>
      <Image src={ZusLogo} alt="ZusLogo" height={40} width={40} quality={100} />
      <span>züs</span>
    </a>
  )
}

const ImgComponent = () => {
  return (
    <div className={styles.imgContainer}>
      <Image src={HeroImg} alt="HeroImg" quality={100} />
    </div>
  )
}

const Header = () => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler()

  return (
    <header className={styles.header}>
      <ImgComponent />
      <LogoLink />
      <MobileNav animation={animation} />
      <ToggleBtn toggleNavbar={toggleNavbar} showNavLinks={showNavLinks} />
    </header>
  )
}

export default Header
