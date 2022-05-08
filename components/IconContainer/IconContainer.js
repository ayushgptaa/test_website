import Image from 'next/image'
import PropTypes from 'prop-types'

const IconContainer = ({ img, alt, height, width }) => {
  return (
    <Image src={img} alt={alt} quality={100} height={height} width={width} />
  )
}

IconContainer.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

export default IconContainer
