import Image from 'next/image'

import workStepData from './workStepData'

import styles from './WorkStep.module.scss'

const WorkStep = () => {
  return workStepData.map(
    ({
      img,
      serialNo,
      primaryHeading,
      primaryText,
      primaryText2,
      secondaryText,
    }) => (
      <div className={styles.container} key={serialNo}>
        <div className={styles.imgContainer}>
          <Image src={img} alt={primaryHeading} />
        </div>
        <div className={styles.textContainer}>
          <span className={styles.serial}>{serialNo}</span>
          <h4 className={styles.heading}>{primaryHeading}</h4>
          <span className={styles.primaryText}>{primaryText}</span>
          {primaryText2 && (
            <span className={styles.primaryText2}>{primaryText2}</span>
          )}
          <div className={styles.secondaryText}>
            <h5>Technical Note</h5>
            <span>{secondaryText.text}</span>
          </div>
        </div>
      </div>
    )
  )
}

export default WorkStep
