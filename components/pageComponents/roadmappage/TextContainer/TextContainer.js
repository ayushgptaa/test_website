import clsx from 'clsx'
import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Text from 'components/Text'

import roadmapData from '../roadmapData'

import styles from './TextContainer.module.scss'

const TextContainer = () => {
  return roadmapData.map(({ heading, subHeading, text, color }) => (
    <div className={styles.container} key={subHeading}>
      <Fade key={heading}>
        <div className={styles.content}>
          <div className={clsx(styles.lineContainer)}>
            <div className={clsx(styles.circle, styles[`${color}`])} />
            <div className={clsx(styles.line, styles[`${color}`])} />
          </div>
          <div className={styles.textContainer}>
            <Heading text={heading} withoutPeriod />
            <h2 className={styles.subHeading}>{subHeading}</h2>
            <Text>{text}</Text>
          </div>
        </div>
      </Fade>
    </div>
  ))
}

export default TextContainer
