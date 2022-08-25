import PropTypes from 'prop-types'

import IconContainer from '/components/IconContainer'

import styles from './ToggleBtn.module.scss'

const MenuIcon = () => {
  return (
    <IconContainer
      img="/images/NavIcons/menuIcon.svg"
      alt="Menu"
      height={24}
      width={24}
      priority
    />
  )
}

const CloseIcon = () => {
  return (
    <IconContainer
      img="/images/NavIcons/closeIcon.svg"
      alt="Close"
      height={28}
      width={28}
      priority
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
