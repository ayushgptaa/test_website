import WorkStep from './WorkStep'

import styles from './Work.module.scss'

const Work = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.imgContainer}>
          <div className={styles.ellipseLeft} />
          <div className={styles.bgTexture} />
          <div className={styles.textureLayer} />
          <div className={styles.textureLayer2} />
          <div className={styles.imgText}>
            <h1 className={styles.heading}>How Does it Work?</h1>
            <p className={styles.text}>
              The process of storing a file on Züs involves four key steps from
              start to finish: uploading a file, splitting up a file,
              distributing a file, and accessing a file.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.workStepContainer}>
        <WorkStep />
      </section>
    </>
  )
}

export default Work
