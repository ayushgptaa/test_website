import { useState } from 'react'
import Heading from 'components/Heading'
import RangeSlider from './RangeSlider'

import styles from './index.module.scss'
import Image from 'next/image'

const RewardsCalculator = () => {
  const [stakePercentage, setStakePercentage] = useState(20)
  const [diskStorage, setDiskStorage] = useState(0)
  const [writePrice, setWritePrice] = useState(0)
  const [monthlyEarningPotential, setMonthlyEarningPotential] = useState(0)

  const convertToGB = (terabyte) => {
    return terabyte * 1000
  }

  const handleStakePercentage = (e) => {
    setStakePercentage(e.target.valueAsNumber)
    setMonthlyEarningPotential(
      (writePrice * convertToGB(diskStorage) * e.target.value) / 100 / 12
    )
  }

  const handleDiskStorage = (e) => {
    setDiskStorage(e.target.valueAsNumber)
    setMonthlyEarningPotential(
      (writePrice * convertToGB(e.target.value) * stakePercentage) / 100 / 12
    )
  }

  const handleWritePrice = (e) => {
    setWritePrice(e.target.valueAsNumber)
    setMonthlyEarningPotential(
      (e.target.value * convertToGB(diskStorage) * stakePercentage) / 100 / 12
    )
  }

  return (
    <section className={styles.rootContainer}>
      <div className={styles.backgroundPattern}>
        <Image
          src="/images/provide/Earnings/RewardsCalculator/backgroundPattern.png"
          quality={100}
          layout="fill"
          alt="Background Pattern"
        />
      </div>
      <Heading text="Calculate your earnings." withoutPeriod Tag="h4" />
      <div className={styles.rangeSlider}>
        <RangeSlider
          topTitle="Stake %"
          minVal={1}
          maxVal={100}
          value={stakePercentage}
          step={1}
          name="stake"
          icon
          unit="%"
          showDelegation
          className={styles.customSlider}
          handleChange={handleStakePercentage}
        />

        <RangeSlider
          topTitle="Disk Storage"
          minVal={0}
          maxVal={100}
          value={diskStorage}
          step={1}
          icon={false}
          unit="TB"
          showDelegation={false}
          handleChange={handleDiskStorage}
        />
        <RangeSlider
          topTitle="Write Price"
          minVal={0}
          maxVal={10}
          step={0.1}
          value={writePrice}
          icon
          unit="$"
          showDelegation={false}
          handleChange={handleWritePrice}
        />
      </div>
      <div className={styles.earning}>
        <h5>Monthly Earning Potential</h5>
        <h4>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(monthlyEarningPotential)}
        </h4>
      </div>
    </section>
  )
}

export default RewardsCalculator
