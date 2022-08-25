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
  removeZusText,
  borderWhite = false,
  borderNone = false,
  color = '',
}) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler()

  return (
    <div className={clsx(styles.container, styles[color])}>
      <MobileNav animation={animation} />
      <TopSection borderWhite={borderWhite} />
      {!removeImg && <HeaderImgComponent />}
      <header
        className={clsx(
          styles.header,
          removeImg && styles.borderBottom,
          borderWhite && styles.borderWhite,
          borderNone && styles.borderNone
        )}>
        <ZusLogo removeZusText={removeZusText} />
        <DesktopNav />
        <ToggleBtn toggleNavbar={toggleNavbar} showNavLinks={showNavLinks} />
      </header>
    </div>
  )
}

Header.propTypes = {
  removeImg: PropTypes.bool,
  removeZusText: PropTypes.bool,
  borderWhite: PropTypes.bool,
  borderNone: PropTypes.bool,
  color: PropTypes.string,
}

export default Header
