import Image from 'next/future/image'

import WorkStep from './WorkStep'
import Paragraph from 'components/Paragraph'

import styles from './Work.module.scss'

const BgElements = () => {
  return (
    <>
      <div className={styles.ellipseLeft} />
      <div className={styles.ellipseRight} />
      <div className={styles.bgTexture} />
    </>
  )
}

const Work = () => {
  return (
    <div className={styles.rootContainer}>
      <BgElements />
      <section className={styles.textContainerwrapper}>
        <div className={styles.blueBgImg}>
          <Image
            src="/images/store/blueBgImg.png"
            alt="blue background"
            quality={80}
            height={375}
            width={565}
            priority
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.heading}>How Does it Work?</h3>
          <Paragraph>
            The process of storing a file on Züs involves four key steps from
            start to finish: uploading a file, splitting up a file, distributing
            a file, and accessing a file.
          </Paragraph>
        </div>
      </section>

      <section className={styles.workStepContainer}>
        <WorkStep />
      </section>
    </div>
  )
}

export default Work
