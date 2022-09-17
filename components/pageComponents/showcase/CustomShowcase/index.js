import {
  ShowcaseArt,
  ShowcaseBackground,
} from 'components/pageComponents/homepage/ShowCase'

import styles from './index.module.scss'

const CustomShowcase = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.mainContainer}>
        <ShowcaseBackground />
        <ShowcaseArt />
        <h3>Mesmerize your customer with live streamed data</h3>
      </div>
    </section>
  )
}

export default CustomShowcase
