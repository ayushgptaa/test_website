import Image from 'next/image'
import PropTypes from 'prop-types'

import styles from './ButtonWithIcon.module.scss'

const ButtonWithIcon = ({ icon, text }) => {
  return (
    <div as="button" type="button-icon" className={styles.buttonContainer}>
      <div className={styles.icon}>
        <Image src={icon} alt={text} layout="fixed" height={40} width={40} />
      </div>
      <p className={styles.buttonText}>{text}</p>
    </div>
  )
}

ButtonWithIcon.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
}
export default ButtonWithIcon
