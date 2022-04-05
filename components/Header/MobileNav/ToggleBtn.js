import PropTypes from 'prop-types'
import { FiMenu, FiX } from 'react-icons/fi'
import { IconContext } from 'react-icons'

const value = {
  color: 'white',
  size: '26px',
}

const ToggleBtn = ({ toggleNavbar, showNavLinks }) => {
  return (
    <button type="button" onClick={toggleNavbar} style={{ zIndex: 20 }}>
      <IconContext.Provider value={value}>
        {showNavLinks ? <FiX /> : <FiMenu />}
      </IconContext.Provider>
    </button>
  )
}

ToggleBtn.propTypes = {
  toggleNavbar: PropTypes.func.isRequired,
  showNavLinks: PropTypes.bool.isRequired,
}

export default ToggleBtn
