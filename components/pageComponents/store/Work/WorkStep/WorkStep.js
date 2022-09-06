import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import workStepData from './workStepData'
import Paragraph from 'components/Paragraph'

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
      <Fade duration={800} fraction={0.4} triggerOnce key={serialNo}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image
              src={img}
              alt={primaryHeading}
              quality={100}
              width={isMobile ? 250 : 400}
              height={isMobile ? 200 : 340}
              layout="fixed"
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
      </Fade>
    )
  )
}

export default WorkStep
