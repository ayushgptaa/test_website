import React from 'react'
import PropTypes from 'prop-types'
import Draggable from 'react-draggable'

import styles from './SliderEditor.module.scss'
import Node from './Node'

const SliderNode = () => {
  return (
    <div className={styles.nodeContainer}>
      <Node />
    </div>
  )
}

const Slider = ({ percentage, setPercentage }) => {
  // const [percentage, setPercentage] = React.useState(defaultPercentage ?? 0) // value only integer between [0-100]
  const [width, setWidth] = React.useState(100)

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

  const bounds = { top: 0, bottom: 0, left: 0, right: width }
  const position = { x: Math.round((percentage * width) / 100), y: 0 }

  return (
    <div style={{ padding: 16 }}>
      <div ref={parentRef} className={styles.sliderContainer}>
        <Draggable
          position={position}
          nodeRef={nodeRef}
          axix="x"
          bounds={bounds}
          onDrag={(e, d) => {
            setPercentage(Math.round(d.x * 100) / width)
          }}>
          <div ref={nodeRef} style={{ width: 'fit-content' }}>
            <SliderNode />
          </div>
        </Draggable>
      </div>
    </div>
  )
}

Slider.propTypes = {
  percentage: PropTypes.number, // if not given , its zero
  setPercentage: PropTypes.func.isRequired, // a function that takes in single number(percentage) as parameter, called everytime percentage changes
}

export default Slider
