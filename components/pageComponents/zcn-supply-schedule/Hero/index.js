import TopRightEllipse from 'components/TopRightEllipse'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'

const Hero = () => {
  return (
    <main className={styles.rootContainer}>
      <TopRightEllipse />
      <div className={styles.mainTextContent}>
        <Heading text="Hard-coded for lower inflation with every epoch" />
        <Paragraph>ZCN Supply Schedule</Paragraph>
      </div>
    </main>
  )
}

export default Hero
