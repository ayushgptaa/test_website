import Image from 'next/image'
import PropTypes from 'prop-types'

const IconContainer = ({ img, alt, height, width, layout = '', ...rest }) => {
  return (
    <Image
      src={img}
      alt={alt}
      quality={100}
      height={height}
      width={width}
      layout={layout}
      {...rest}
    />
  )
}

IconContainer.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  layout: PropTypes.string,
}

export default IconContainer
