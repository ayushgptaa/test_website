import WorkStep from './WorkStep'
import { Fade } from 'react-awesome-reveal'
import { ScrollSnapSection } from 'components/ScrollSnap'

import styles from './Work.module.scss'
import Button from 'components/Button'

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
        <ScrollSnapSection
          alignDesktop="end"
          marginDesktop="1x"
          style={{ margin: '2rem 0 ' }}>
          <Button
            link="https://drive.google.com/file/d/1tNjb_OvX93s47QQ2gFrfeUBdmP0PcL9k/view"
            text="Read more"
          />
        </ScrollSnapSection>
      </section>
    </>
  )
}

export default Work
