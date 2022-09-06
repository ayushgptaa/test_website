import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './Features.module.scss'

const Features = () => {
  const isMobile = useGetScreenSize()
  return (
    <>
      <section className={styles.mainFeatureWrapper}>
        <div className={styles.mainFeature}>
          <Fade duration={600} triggerOnce>
            <div className={styles.laptopImgContainer}>
              <Image
                src={
                  isMobile
                    ? `/images/buildPage/Features/laptopImgMobile.png`
                    : `/images/buildPage/Features/laptopImgDesktop.png`
                }
                alt="migrate any app"
                quality={100}
                layout="fill"
                priority
              />
            </div>
          </Fade>

          <div className={styles.textContainer}>
            <Fade direction="up" triggerOnce cascade>
              <Heading text="Migrate Any App" Tag="h3" />
              <Paragraph>
                Züs is designed from the ground-up to simplify the migration
                process from traditional cloud. Tools such as the Zbox CLI allow
                any application to easily migrate to the Züs Cloud Network for
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
            </Fade>
          </div>
        </div>
      </section>

      <section className={styles.pricingFeatureWrapper}>
        <div className={styles.pricingFeature}>
          <div className={styles.ellipseLeft} />
          <div className={styles.ellipseRight} />
          <Fade direction="up" cascade triggerOnce duration={600}>
            <Heading text="Affordable Pricing, Top Performance" Tag="h3" />
            <Paragraph>
              With added file security features only possible on Züs' blockchain
              powered Cloud Network.
            </Paragraph>
          </Fade>
        </div>
      </section>
    </>
  )
}

export default Features
