import propTypes from 'prop-types'
import clsx from 'clsx'

import DesktopNav from './DesktopNav'
import TopSection from './TopSection'
import { MobileNav, ToggleBtn } from './MobileNav'
import HeaderImgComponent from './HeaderImgComponent'
import ZusLogo from 'components/ZusLogo'

import useAnimatedNavToggler from 'hooks/useAnimatedNavToggler'

import styles from './Header.module.scss'

const Header = ({
  removeImg = false,
  removeDesktopNav,
  removeSocialIcons,
  removeZusText,
}) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler()

  return (
    <div className={styles.container}>
      <TopSection removeSocialIcons={removeSocialIcons} />
      <HeaderImgComponent removeImg={removeImg} />
      <header className={clsx(styles.header, removeImg && styles.borderBottom)}>
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
