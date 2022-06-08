import Image from 'next/image'
import propTypes from 'prop-types'
import clsx from 'clsx'

import ZusLogo from 'components/ZusLogo'
import DesktopNav from './DesktopNav'
import TopSection from './TopSection'
import { MobileNav, ToggleBtn } from './MobileNav'

import useAnimatedNavToggler from 'hooks/useAnimatedNavToggler'

import styles from './Header.module.scss'

const ImgComponent = ({ removeImg }) => {
  return (
    <div className={clsx(styles.imgContainer, removeImg && styles.removeImg)}>
      <Image
        src="/images/homePage/Hero/hero-img.png"
        width={876}
        height={527}
        priority
      />
    </div>
  )
}

ImgComponent.propTypes = {
  removeImg: propTypes.bool,
}

const Header = ({
  removeImg,
  removeDesktopNav,
  removeSocialIcons,
  removeZusText,
}) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler()

  return (
    <div className={styles.container}>
      <TopSection removeSocialIcons={removeSocialIcons} />
      <ImgComponent removeImg={removeImg} />
      <header className={styles.header}>
        <ZusLogo removeZusText={removeZusText} />
        <DesktopNav removeDesktopNav={removeDesktopNav} />
        <MobileNav animation={animation} />
        <ToggleBtn toggleNavbar={toggleNavbar} showNavLinks={showNavLinks} />
      </header>
    </div>
  )
}

Header.propTypes = {
  removeImg: propTypes.bool,
  removeDesktopNav: propTypes.bool,
  removeSocialIcons: propTypes.bool,
  removeZusText: propTypes.bool,
}

export default Header
