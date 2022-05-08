import Heading from '/components/Heading'
import Text from '/components/Text'
import TextContainer from './TextContainer'

import styles from './Roadmap.module.scss'

const RoadmapComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.topEllipse} />
      <div className={styles.mainText}>
        <Heading text="The road ahead" uppercase />
        <Text center>
          Words that describe the key value pieces/capabilities already in the
          platform and the direction of travel moving forward
        </Text>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.centerEllipse} />
        <TextContainer />
      </div>
    </section>
  )
}

export default RoadmapComponent