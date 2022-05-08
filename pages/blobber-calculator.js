import React from 'react'
import SliderEditor from 'components/Slider'

const BlobberCalculator = () => {
  const [storage, setStorage] = React.useState(3000)

  return (
    <div>
      <div>This is a test page, will be modified later1</div>
      <div>Storage Chosen is {storage}</div>
      <div style={{ width: '500px' }}>
        <SliderEditor
          leftTitle="Your Total Active Storage"
          rightTitle="300 TB"
          currentValue={storage}
          maxValue={6000}
          minValue={1}
          leftLabel="1 TB"
          rightLabel="6,000 TB"
          onChange={setStorage}
        />
      </div>
    </div>
  )
}

export default BlobberCalculator
