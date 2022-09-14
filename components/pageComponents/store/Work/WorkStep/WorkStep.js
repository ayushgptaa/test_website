import Image from 'next/image'

import Paragraph from 'components/Paragraph'

import workStepData from './workStepData'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './WorkStep.module.scss'

const WorkStep = () => {
  const isMobile = useGetScreenSize()
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
          <Image
            src={img}
            alt={primaryHeading}
            quality={100}
            width={isMobile ? 240 : 340}
            height={isMobile ? 237 : 337}
            layout="fixed"
            priority
          />
        </div>

        <div className={styles.textContainer}>
          <span className={styles.serial}>{serialNo}</span>
          <h4 className={styles.heading}>{primaryHeading}</h4>
          <Paragraph>{primaryText}</Paragraph>
          {primaryText2 && (
            <Paragraph className={styles.primaryText2}>
              {primaryText2}
            </Paragraph>
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
