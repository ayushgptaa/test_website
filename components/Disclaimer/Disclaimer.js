import styles from './Disclaimer.module.scss'
import PropTypes from 'prop-types'
import Wrapper from 'components/Wrapper'

const Disclaimer = ({ title, description }) => {
  return (
    <Wrapper>
      <div className={styles.disclaimerContent}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Wrapper>
  )
}

Disclaimer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Disclaimer
