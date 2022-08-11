import PropTypes from 'prop-types'
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
  borderWhite = false,
  color = '',
}) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler()

  return (
    <div className={clsx(styles.container, styles[color])}>
      <TopSection
        removeSocialIcons={removeSocialIcons}
        borderWhite={borderWhite}
      />
      <HeaderImgComponent removeImg={removeImg} />
      <header
        className={clsx(
          styles.header,
          removeImg && styles.borderBottom,
          borderWhite && styles.borderWhite
        )}>
        <ZusLogo removeZusText={removeZusText} />
        <DesktopNav removeDesktopNav={removeDesktopNav} />
        <MobileNav animation={animation} />
        <ToggleBtn toggleNavbar={toggleNavbar} showNavLinks={showNavLinks} />
      </header>
    </div>
  )
}

Header.propTypes = {
  removeImg: PropTypes.bool,
  removeDesktopNav: PropTypes.bool,
  removeSocialIcons: PropTypes.bool,
  removeZusText: PropTypes.bool,
  borderWhite: PropTypes.bool,
  color: PropTypes.string,
}

export default Header
