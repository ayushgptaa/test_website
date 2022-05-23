import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import styles from './MainFeature.module.scss'

const MainFeature = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bgPattern} />
      <Fade direction="up" cascade duration={700}>
        <div className={styles.heading}>
          <Image
            src="/images/homePage/Features/mainHeading.png"
            width={602}
            height={294}
            priority
          />
        </div>
        <p className={styles.para}>
          The Züs Cloud Network is a hyper-speed data storage network. Enabled
          by a cutting-edge storage protocol; secured by a novel layer 1
          blockchain.
        </p>
      </Fade>
    </div>
  )
}

export default MainFeature
