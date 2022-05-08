import PropTypes from 'prop-types'

import IconContainer from '/components/IconContainer'

import menuIcon from '/public/images/NavIcons/menuIcon.svg'
import closeIcon from '/public/images/NavIcons/closeIcon.svg'

import styles from './ToggleBtn.module.scss'

const MenuIcon = () => {
  return (
    <IconContainer img={`/${menuIcon.src}`} alt="Menu" height={24} width={24} />
  )
}

const CloseIcon = () => {
  return (
    <IconContainer
      img={`/${closeIcon.src}`}
      alt="Close"
      height={28}
      width={28}
    />
  )
}

const ToggleBtn = ({ toggleNavbar, showNavLinks }) => {
  return (
    <button
      className={styles.toggleBtn}
      type="button"
      onClick={toggleNavbar}
      style={{ zIndex: 20 }}>
      {showNavLinks ? <CloseIcon /> : <MenuIcon />}
    </button>
  )
}

ToggleBtn.propTypes = {
  toggleNavbar: PropTypes.func.isRequired,
  showNavLinks: PropTypes.bool.isRequired,
}

export default ToggleBtn
