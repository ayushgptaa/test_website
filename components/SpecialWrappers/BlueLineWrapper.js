import PropTypes from 'prop-types'
import clsx from 'clsx'

import style from './BlueLineWrapper.module.scss'

const BlueLineWrapper = ({ children, className }) => {
  return <div className={clsx(style.container, className)}>{children}</div>
}

BlueLineWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default BlueLineWrapper
