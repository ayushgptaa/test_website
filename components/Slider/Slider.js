import React from 'react'
import PropTypes from 'prop-types'
import Draggable from 'react-draggable'

import Node from './Node'

import styles from './SliderEditor.module.scss'

const SliderNode = ({ color }) => {
  return (
    <div className={styles.nodeContainer}>
      <Node color={color} />
    </div>
  )
}

SliderNode.propTypes = {
  color: PropTypes.string,
}

/*
  The maths of setting the percentage is tricky
  we first have the width of the component rounded off to integer.
  Then we add the radius of node both sides to get the width available to slide

  Now on each drag. We get position information d.x of node relative to starting point of original width

     width->               ||||||||||
     slidingWidth ->      |||||||||||||

     d.x is relative to starting point of width

     We calculate the percentage,position relative to slidingWidth

*/

const Slider = ({ percentage, setPercentage, color, secondaryColor }) => {
  const nodeRadius = 10
  const [width, setWidth] = React.useState(100)
  const slidingWidth = width + 2 * nodeRadius

  const parentRef = React.useRef()

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      const roundedWidth =
        Math.round(event[0].contentBoxSize[0].inlineSize) - 48

      setWidth(roundedWidth)
      //   setHeight(event[0].contentBoxSize[0].blockSize)
    })

    if (parentRef) {
      resizeObserver.observe(parentRef.current)
    }
  }, [parentRef])

  const nodeRef = React.useRef(null)

  const bounds = {
    top: 0,
    bottom: 0,
    left: 0 - nodeRadius,
    right: width + nodeRadius,
  }
  const position = {
    x: Math.round((percentage * slidingWidth) / 100) - nodeRadius,
    y: 0,
  }

  let background = color

  if (secondaryColor)
    background = `linear-gradient(90deg, ${color} ${percentage}%, ${secondaryColor} ${percentage}%)`

  return (
    <div style={{ padding: '21px 0px 10px' }}>
      <div
        ref={parentRef}
        className={styles.sliderContainer}
        style={{
          // background: `linear-gradient(90deg, black ${percentage}%, blue ${percentage}%);`,
          background,
        }}>
        <Draggable
          position={position}
          nodeRef={nodeRef}
          axix="x"
          bounds={bounds}
          onDrag={(e, d) => {
            const length = d.x + nodeRadius

            setPercentage(Math.round(length * 100) / slidingWidth)
          }}>
          <div ref={nodeRef} style={{ width: 'fit-content' }}>
            <SliderNode color={color} />
          </div>
        </Draggable>
      </div>
    </div>
  )
}

Slider.propTypes = {
  percentage: PropTypes.number, // if not given , its zero
  setPercentage: PropTypes.func.isRequired, // a function that takes in single number(percentage) as parameter, called everytime percentage changes
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
}

export default Slider
