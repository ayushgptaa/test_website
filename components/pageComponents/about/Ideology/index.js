import IconContainer from 'components/IconContainer'

import styles from './index.module.scss'

const Idealogy = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.textContent}>
        <p>
          In the pursuit of organizing the world’s information, social
          interactions, and commerce - the internet became centralized. This
          only encouraged (giant) tech companies to monopolize privacy and
          censorship of data
        </p>
        <h4>
          As a result, the internet became more regulated, more surveillanced,
          more censored, and more limited.
        </h4>
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.background}></div>
        <IconContainer
          img="/images/Footer/zusLogoWhite.svg"
          alt="Züs"
          width={55}
          height={35}
        />
      </div>
    </section>
  )
}

export default Idealogy
