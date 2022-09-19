import Image from 'next/image'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'
import useGetScreenSize from 'hooks/useGetScreenSize'

const Hero = () => {
  const isMobile = useGetScreenSize()

  return (
    <main className={styles.rootContainer}>
      <div className={styles.mainTextContent}>
        <Heading text="Blobber Staking" />
        <Paragraph>
          All Service Providers must stake ZCN on their infrastructure in order
          to provide a service on Züs. While the Active Set (Miners and
          Sharders) and Blobbers both have their service commitment
          collateralized by ZCN, the process by which the two groups stake
          collateral has slight differences:
        </Paragraph>
      </div>

      {isMobile && (
        <div className={styles.heroImageMobile}>
          <div className={styles.img1}>
            <Image
              src="/images/stacking/Hero/img1.png"
              alt="I'll offer you 100 ZCN for 1 GB!"
              quality={100}
              layout="fill"
              priority
              sizes="50vw"
            />
          </div>

          <div className={styles.img2}>
            <Image
              src="/images/stacking/Hero/img2.png"
              alt="Client"
              quality={100}
              layout="fill"
              priority
              sizes="50vw"
            />
          </div>

          <div className={styles.img3}>
            <Image
              src="/images/stacking/Hero/img3.png"
              alt="Blobber"
              quality={100}
              layout="fill"
              priority
            />
          </div>
        </div>
      )}

      {!isMobile && (
        <div className={styles.heroDesktop}>
          <Image
            src="/images/stacking/Hero/heroDesktop.png"
            alt="Blobber Staking"
            quality={100}
            width={975}
            height={500}
            layout="responsive"
            priority
            sizes="50vw"
          />
        </div>
      )}
    </main>
  )
}

export default Hero
