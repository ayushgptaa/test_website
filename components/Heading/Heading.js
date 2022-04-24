import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './Heading.module.scss'

const Heading = ({ text, uppercase }) => {
  return (
    <h1 className={clsx(styles.heading, uppercase && styles.uppercase)}>
      {text}<span>.</span>
    </h1>
  )
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
}

export default Heading
