import PropTypes from 'prop-types'

import styles from './ScrollSnapSection.module.scss'

const getAlignStyles = (alignDesktop, alignMobile) => {
  const alignStyles = []

  switch (alignDesktop) {
    case 'start':
      alignStyles.push(styles.alignDesktopStart)
      break
    case 'center':
      alignStyles.push(styles.alignDesktopCenter)
      break
    case 'end':
      alignStyles.push(styles.alignDesktopEnd)
      break
    default:
      break
  }

  switch (alignMobile) {
    case 'start':
      alignStyles.push(styles.alignMobileStart)
      break
    case 'center':
      alignStyles.push(styles.alignMobileCenter)
      break
    case 'end':
      alignStyles.push(styles.alignMobileEnd)
      break
    default:
      break
  }

  return alignStyles
}

const getMarginStyles = (marginDesktop, marginMobile) => {
  const marginStyles = []

  switch (marginDesktop) {
    case '1x':
      marginStyles.push(styles.marginDesktop1x)
      break
    case '2x':
      marginStyles.push(styles.marginDesktop2x)
      break
    case '3x':
      marginStyles.push(styles.marginDesktop3x)
      break
    default:
      break
  }

  switch (marginMobile) {
    case '1x':
      marginStyles.push(styles.marginMobile1x)
      break
    case '2x':
      marginStyles.push(styles.marginMobile2x)
      break
    case '3x':
      marginStyles.push(styles.marginMobile3x)
      break
    default:
      break
  }

  return marginStyles
}

const getClassName = (
  alignDesktop,
  alignMobile,
  marginDesktop,
  marginMobile
) => {
  const alignStyles = getAlignStyles(alignDesktop, alignMobile)
  const marginStyles = getMarginStyles(marginDesktop, marginMobile)

  return [...alignStyles, ...marginStyles].join(' ')
}

const ScrollSnapSection = ({
  children,
  style,
  alignDesktop,
  alignMobile,
  marginDesktop,
  marginMobile,
}) => {
  return (
    <section
      className={getClassName(
        alignDesktop,
        alignMobile,
        marginDesktop,
        marginMobile
      )}
      style={style}>
      {children}
    </section>
  )
}

ScrollSnapSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.object,
  alignDesktop: PropTypes.string,
  alignMobile: PropTypes.string,
  marginDesktop: PropTypes.string,
  marginMobile: PropTypes.string,
}

ScrollSnapSection.defaultProps = {
  alignDesktop: 'center',
  alignMobile: 'center',
  marginDesktop: '',
  marginMobile: '',
}

export default ScrollSnapSection
