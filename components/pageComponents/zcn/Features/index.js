import Image from 'next/image'
import clsx from 'clsx'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'

import featureListData from './featrueListData'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './index.module.scss'

const FeatureList = () => {
  return featureListData.map(({ icon, buttonText, pattern2, link }) => (
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
      <Button type="button" text={buttonText} transparent black link={link} />
    </div>
  ))
}

const Features = () => {
  const isMobile = useGetScreenSize()

  return (
    <section className={styles.container}>
      <div className={styles.TextContent1}>
        <Heading text="An Incentive to Scale" Tag="h3" />
        <Paragraph>
          ZCN incentivizes quality network performance through three main
          functions:
        </Paragraph>
      </div>

      <div className={styles.featureList}>
        <FeatureList />
      </div>

      <div className={styles.TextContent2}>
        <Heading
          text="Hard-coded for lower inflation with every epoch"
          Tag="h3"
        />
        <Paragraph>Percent of Total Supply Cap Reached Over Time</Paragraph>

        <div className={styles.chartImg}>
          <Image
            src={
              isMobile
                ? '/images/zcn/Features/chart.png'
                : '/images/zcn/Features/chartDesktop.png'
            }
            alt="zcn-cap-graph"
            layout="fill"
            quality={100}
          />
        </div>

        <div className={styles.chartText}>
          <Paragraph>
            With every year a new epoch begins. With every new epoch, the block
            reward issuance rate is reduced by 10% that of the previous year --
            an ongoing deflationary mechanism until the maximum ZCN supply cap
            of 400,000,000 ZCN is reached.
          </Paragraph>
          <div>
            <Button
              type="button"
              text="ZCN Supply & Distribution"
              transparent
              black
              link="/zcn-supply-schedule"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
