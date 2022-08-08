import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './Heading.module.scss'

const Heading = ({
  text,
  uppercase,
  withoutPeriod,
  periodColor,
  Tag = 'h1',
  className,
}) => {
  return (
    <Tag
      className={clsx(
        styles.heading,
        uppercase && styles.uppercase,
        withoutPeriod && styles.withoutPeriod,
        Tag === 'h3' && styles.h3,
        className && className
      )}>
      {text}
      <span style={periodColor && { color: `${periodColor}` }}>.</span>
    </Tag>
  )
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
  withoutPeriod: PropTypes.bool,
  Tag: PropTypes.string,
  periodColor: PropTypes.string,
  className: PropTypes.string,
}

export default Heading
