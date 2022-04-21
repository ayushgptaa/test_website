import Image from 'next/image'

import { MobileNav, ToggleBtn } from './MobileNav'
import ZusLogo from 'components/ZusLogo'

import useAnimatedNavToggler from 'Hooks/useAnimatedNavToggler'

import HeroImg from 'public/images/Hero/heroImg.png'

import styles from './Header.module.scss'

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
      <ZusLogo />
      <MobileNav animation={animation} />
      <ToggleBtn toggleNavbar={toggleNavbar} showNavLinks={showNavLinks} />
    </header>
  )
}

export default Header
