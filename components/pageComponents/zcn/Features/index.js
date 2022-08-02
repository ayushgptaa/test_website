import Image from 'next/image'
import clsx from 'clsx'
import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'

import featureListData from './featrueListData'

import styles from './index.module.scss'
import useGetScreenSize from 'hooks/useGetScreenSize'

const FeatureList = () => {
  return (
    <Fade cascade direction="up" duration={600} triggerOnce>
      {featureListData.map(({ icon, buttonText, pattern2 }) => (
        <div className={styles.feature} key={buttonText}>
          <div className={clsx(styles.pattern1, pattern2 && styles.pattern2)} />
          <div className={styles.icon}>
            <Image
              src={icon}
              alt={buttonText}
              layout="fixed"
              height={48}
              width={48}
              quality={100}
            />
          </div>
          <Button type="button" text={buttonText} transparent black />
        </div>
      ))}
    </Fade>
  )
}

const Features = () => {
  const isMobile = useGetScreenSize()

  return (
    <section className={styles.container}>
      <div className={styles.TextContent1}>
        <Fade direction="up" triggerOnce cascade duration={600}>
          <Heading text="An Incentive to Scale" Tag="h3" />
          <Paragraph>
            ZCN incentivizes quality network performance through three main
            functions:
          </Paragraph>
        </Fade>
      </div>

      <div className={styles.featureList}>
        <FeatureList />
      </div>

      <div className={styles.TextContent2}>
        <Fade direction="up" triggerOnce cascade duration={600}>
          <Heading
            text="Hard-coded for lower inflation with every epoch"
            Tag="h3"
          />
          <Paragraph>Percent of Total Supply Cap Reached Over Time</Paragraph>
        </Fade>

        <Fade direction="up" triggerOnce duration={600} fraction={0.4}>
          <div className={styles.chartImg}>
            <Image
              src={
                isMobile
                  ? '/images/zus/Features/chart.png'
                  : '/images/zus/Features/chartDesktop.png'
              }
              alt="zcn-cap-graph"
              layout="fill"
              quality={100}
            />
          </div>
        </Fade>

        <div className={styles.chartText}>
          <Fade direction="up" triggerOnce cascade duration={600}>
            <Paragraph>
              With every year a new epoch begins. With every new epoch, the
              block reward issuance rate is reduced by 10% that of the previous
              year -- an ongoing deflationary mechanism until the maximum ZCN
              supply cap of 400,000,000 ZCN is reached.
            </Paragraph>
            <div>
              <Button
                type="button"
                text="ZCN Supply & Distribution"
                transparent
                black
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Features
