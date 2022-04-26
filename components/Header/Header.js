import Image from 'next/image'
import propTypes from 'prop-types'
import clsx from 'clsx'

import ZusLogo from 'components/ZusLogo'
import { MobileNav, ToggleBtn } from './MobileNav'

import useAnimatedNavToggler from 'Hooks/useAnimatedNavToggler'

import HeroImg from 'public/images/homePage/Hero/heroImg.png'

import styles from './Header.module.scss'
import DesktopNav from './DesktopNav'
import TopSection from './TopSection'

const ImgComponent = ({ removeImg }) => {
  return (
    <div className={clsx(styles.imgContainer, removeImg && styles.removeImg)}>
      <Image src={HeroImg} alt="HeroImg" quality={100} />
    </div>
  )
}

ImgComponent.propTypes = {
  removeImg: propTypes.bool,
}

const Header = ({ removeImg }) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler()

  return (
    <>
      <TopSection />
      <header className={styles.header}>
        <ImgComponent removeImg={removeImg} />
        <ZusLogo />
        <DesktopNav />
        <MobileNav animation={animation} />
        <ToggleBtn toggleNavbar={toggleNavbar} showNavLinks={showNavLinks} />
      </header>
    </>
  )
}

Header.propTypes = {
  removeImg: propTypes.bool,
}

export default Header
