/* eslint-disable no-multi-assign */
import { Fade } from 'react-awesome-reveal'
import PropTypes from 'prop-types'

const MobileArtAnimation = ({ children }) => {
  return (
    <Fade direction="up" triggerOnce fraction={0.2} duration={800}>
      {children}
    </Fade>
  )
}

const DesktopArtAnimation = ({ children }) => {
  return (
    <Fade direction="up" triggerOnce fraction={0.5} duration={800}>
      {children}
    </Fade>
  )
}

const TextContainerAnimation = ({ children }) => {
  return (
    <Fade direction="up" triggerOnce fraction={0.5} duration={1000} cascade>
      {children}
    </Fade>
  )
}

MobileArtAnimation.propTypes =
  DesktopArtAnimation.propTypes =
  TextContainerAnimation.propTypes =
    {
      children: PropTypes.node,
    }

export { MobileArtAnimation, DesktopArtAnimation, TextContainerAnimation }
