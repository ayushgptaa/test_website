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
          <p className={styles.serial}>{serialNo}</p>
          <h4 className={styles.heading}>{primaryHeading}</h4>
          <p className={styles.primaryText}>{primaryText}</p>
          {primaryText2 && (
            <p className={styles.primaryText2}>{primaryText2}</p>
          )}
          <div className={styles.secondaryText}>
            <h5>Technical Note</h5>
            <p>{secondaryText.text}</p>
          </div>
        </div>
      </div>
    )
  )
}

export default WorkStep
