import Image from 'next/future/image'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './index.module.scss'

const AppMigration = () => {
  const isMobile = useGetScreenSize()
  return (
    <section className={styles.mainFeatureWrapper}>
      <div className={styles.mainFeature}>
        <div className={styles.laptopImgContainer}>
          <Image
            src={
              isMobile
                ? `/images/buildPage/Features/laptopImgMobile.png`
                : `/images/buildPage/Features/laptopImg.png`
            }
            alt="migrate any app"
            quality={100}
            fill
            priority
          />
        </div>

        <div className={styles.textContainer}>
          <Heading text="Migrate Any App" Tag="h3" />
          <Paragraph>
            Züs is designed from the ground-up to simplify the migration process
            from traditional cloud. Tools such as the Zbox CLI allow any
            application to easily migrate to the Züs Cloud Network for
            enterprise-grade storage.
          </Paragraph>
          <div className={styles.btnContainer}>
            <Button
              type="button"
              black
              transparent
              text="CLI Migration"
              link="https://github.com/0chain/zs3server"
              blank
            />
            <Button
              type="button"
              text="Blimp Migration"
              link="https://github.com/0chain/s3-migration"
              blank
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppMigration
