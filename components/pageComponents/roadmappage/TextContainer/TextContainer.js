import clsx from 'clsx'

import Heading from 'components/Heading'
import Text from 'components/Text'

import roadmapData from '../roadmapData'

import styles from './TextContainer.module.scss'

const TextContainer = () => {
  return roadmapData.map(({ heading, text, color }) => (
    <div className={styles.container} key={heading}>
      <div className={styles.content}>
        <div className={clsx(styles.lineContainer)}>
          <div className={clsx(styles.circle, styles[`${color}`])} />
          <div className={clsx(styles.line, styles[`${color}`])} />
        </div>
        <div className={styles.textContainer}>
          <Heading text={heading} withoutPeriod />
          <Text>{text}</Text>
        </div>
      </div>
    </div>
  ))
}

export default TextContainer
