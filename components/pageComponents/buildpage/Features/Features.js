import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Showcase from 'components/pageComponents/homepage/ShowCase'

import styles from './Features.module.scss'

const Features = () => {
  return (
    <>
      <Showcase />
      <section className={styles.pricingFeatureWrapper}>
        <div className={styles.pricingFeature}>
          <div className={styles.ellipseLeft} />
          <div className={styles.ellipseRight} />
          <Heading text="Affordable Pricing, Top Performance" Tag="h3" />
          <Paragraph>
            With added file security features only possible on Züs' blockchain
            powered Cloud Network.
          </Paragraph>
        </div>
      </section>
    </>
  )
}

export default Features
