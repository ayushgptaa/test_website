import { useState } from 'react'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Paragraph from 'components/Paragraph'
import RangeSlider from '../../Earnings/RewardsCalculator/RangeSlider'

import styles from './index.module.scss'
import Image from 'next/image'

const ModifiedRangeSlider = () => {
  const [stakePercentage, setStakePercentage] = useState(20)

  const onChange = (e) => {
    setStakePercentage(e.target.valueAsNumber)
  }

  return (
    <RangeSlider
      topTitle="Self Stake"
      minVal={1}
      maxVal={100}
      step={1}
      value={stakePercentage}
      icon={false}
      unit="%"
      className={styles.rangeSlider}
      primaryColor="#270E1E"
      secondaryColor="#7DD0FF"
      showDelegation
      handleChange={onChange}
    />
  )
}

const Component1 = () => {
  return (
    <>
      <ModifiedRangeSlider />
      <div className={styles.component1}>
        <input type="checkbox" className={styles.checkbox} defaultChecked />
        <div className={styles.component1Text}>
          <h4>Do you wish to delegate?</h4>
          <p>
            This will allow other users to provide the stake needed for your
            server to be utilized on the Züs network.
          </p>
        </div>
      </div>
    </>
  )
}

const ServerSpecifications = () => {
  return (
    <div className={styles.serverSpecifications}>
      <h4>Server Specifications:</h4>
      <div className={styles.table}>
        <Image
          src="/images/provide/Features/activityTable.png"
          quality={100}
          layout="fill"
          priority
        />
      </div>
    </div>
  )
}

const mainFeature = [
  {
    mainHeading: 'Want to learn more about the rewards?',
    mainText:
      'There are many ways you can earn rewards in the Züs ecosystem. Read our Token Economics document to learn more about our sustainable rewards model.',
    btnText: 'Token Economics',
    serial: '1',
    background: '#321A33',
    Component: <Component1 />,
    bottomText: 'This explains the staking mechanics',
  },

  {
    mainHeading: 'Want to add Servers to the Network?',
    mainText:
      'Getting your Servers connected to our network is straightforward. To help, weve assembled a comprehensive Installation Guide.',
    btnText: 'Installation guide',
    serial: '2',
    background: '#061C3E',
    Component: <ServerSpecifications />,
    bottomText: 'This explains the rig requirements',
  },
]

const MainFeature = () => {
  return (
    <section className={styles.mainFeatures}>
      {mainFeature.map(
        ({
          mainHeading,
          mainText,
          btnText,
          serial,
          background,
          Component,
          bottomText,
        }) => (
          <div
            className={styles.mainFeature}
            key={serial}
            style={{ background }}>
            <Heading text={mainHeading} Tag="h3" withoutPeriod />
            <Paragraph left>{mainText}</Paragraph>
            {Component}

            <div className={styles.bottomContent}>
              <p>{bottomText}</p>
              <Button type="button" text={btnText} transparent black />
            </div>
          </div>
        )
      )}
    </section>
  )
}

export default MainFeature
