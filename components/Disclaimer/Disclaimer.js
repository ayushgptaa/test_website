import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'

import styles from './Disclaimer.module.scss'

const Disclaimer = ({ title, description, className }) => {
  return (
    <Wrapper className={className}>
      <div className={styles.disclaimerContent}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Wrapper>
  )
}

Disclaimer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Disclaimer
