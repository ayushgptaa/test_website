import PropTypes from 'prop-types'

import styles from './InputBox.module.scss'

const InputBox = ({ type }) => {
  return (
    <form className={styles.inputForm}>
      <input
        className={styles.inputBox}
        type={type}
        name="email"
        id="email"
        placeholder="Enter your email"
      />
    </form>
  )
}

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
}

export default InputBox
