import Image from 'next/image'

import mainHeading from '/public/images/Features/mainHeading.png'

import styles from './MainFeature.module.scss'

const MainFeature = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bgPattern}></div>
      <div className={styles.heading}>
        <Image src={mainHeading} quality={100} />
      </div>
      <p className={styles.para}>
        The Züs Cloud Network is a hyper-speed data storage network. Enabled by
        a cutting-edge storage protocol; secured by a novel layer 1 blockchain.
      </p>
    </div>
  )
}

export default MainFeature
