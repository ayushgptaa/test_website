/* eslint-disable no-multi-assign */
import { Fade } from 'react-awesome-reveal'
import PropTypes from 'prop-types'

const MobileArtAnimation = ({ children, direction }) => {
  return (
    <Fade
      direction={direction === '' ? direction : 'up'}
      triggerOnce
      fraction={0.2}
      duration={800}>
      {children}
    </Fade>
  )
}

const DesktopArtAnimation = ({ children, direction }) => {
  return (
    <Fade
      direction={direction === '' ? direction : 'up'}
      triggerOnce
      fraction={0.5}
      duration={1000}>
      {children}
    </Fade>
  )
}

const TextContainerAnimation = ({ children, direction = 'up' }) => {
  return (
    <Fade
      direction={direction}
      triggerOnce
      fraction={0.5}
      duration={800}
      cascade>
      {children}
    </Fade>
  )
}

MobileArtAnimation.propTypes =
  DesktopArtAnimation.propTypes =
  TextContainerAnimation.propTypes =
    {
      children: PropTypes.node,
      direction: PropTypes.string,
    }

export { MobileArtAnimation, DesktopArtAnimation, TextContainerAnimation }
