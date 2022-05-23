import WorkStep from './WorkStep'
import { Fade } from 'react-awesome-reveal'
import { ScrollSnapSection } from 'components/ScrollSnap'

import styles from './Work.module.scss'

const Work = () => {
  return (
    <>
      <ScrollSnapSection>
        <section className={styles.container}>
          <div className={styles.imgContainer}>
            <div className={styles.ellipseLeft} />
            <div className={styles.bgTexture} />
            <div className={styles.textureLayer} />
            <div className={styles.textureLayer2} />
            <div className={styles.imgText}>
              <Fade direction="up" cascade>
                <h1 className={styles.heading}>How Does it Work?</h1>
                <p className={styles.text}>
                  The process of storing a file on Züs involves four key steps
                  from start to finish: uploading a file, splitting up a file,
                  distributing a file, and accessing a file.
                </p>
              </Fade>
            </div>
          </div>
        </section>
      </ScrollSnapSection>

      <section className={styles.workStepContainer}>
        <WorkStep />
      </section>
    </>
  )
}

export default Work
