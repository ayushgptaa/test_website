import PropTypes from 'prop-types'

import style from './BlueLineWrapper.module.scss'

const BlueLineWrapper = ({ children, childenParentDivClassName }) => {
  return (
    <div className={style.container}>
      <div className={style.blueLine}> </div>
      <div className={childenParentDivClassName}>{children}</div>
    </div>
  )
}

BlueLineWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  childenParentDivClassName: PropTypes.string,
}

export default BlueLineWrapper
