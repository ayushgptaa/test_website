import Image from 'next/image'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './index.module.scss'

const featureListData = [
  {
    number: 1,
    heading: 'Blobbers assigned to partitions',
    text: 'To enter a blobber into the lottery, the network will randomly assign a blobber to a “partition” - a fancy word for a group of blobbers. There are numerous partitions and the members within each partition are constantly shuffled. Thus, the partition that a blobber is in today may differ from the partition that they are entered into tomorrow.',
  },
  {
    number: 2,
    heading: 'Lottery mechanism to select a partition winner',
    text: 'For every block, a randomized selection is made to choose a winning partition. This selection process can be best understood metaphorically as the “lottery drawing” process.',
  },
  {
    number: 3,
    heading: 'Partition winner is randomly selected',
    text: 'To choose a winning partition, the network uses VRF (verifiable random function), which ensures randomness in the selection of each winner.',
  },
  {
    number: 4,
    heading: 'Blobbers assigned to partitions',
    text: 'To enter a blobber into the lottery, the network will randomly assign a blobber to a “partition” - a fancy word for a group of blobbers. There are numerous partitions and the members within each partition are constantly shuffled. Thus, the partition that a blobber is in today may differ from the partition that they are entered into tomorrow. ',
  },
]

const FeatureList = ({ number, heading, text }) => {
  return (
    <div className={styles.featureList}>
      <div className={styles.heading}>
        <span className={clsx(styles.number, styles[`number${number}`])}>
          {number}
        </span>
        <Heading text={heading} withoutPeriod Tag="h4" />
      </div>
      <Paragraph>{text}</Paragraph>
      <div className={styles.line} />
    </div>
  )
}

const Features = () => {
  const isMobile = useGetScreenSize()

  return (
    <section className={styles.rootContainer}>
      <div className={styles.topTextContent}>
        <Heading text="The Blobber Block Reward Process" Tag="h3" />
        <Paragraph>
          Blobbers are given rewards based on a lottery mechanism that favors
          the most productive and honest blobbers on the network. Any blobber
          who passes a challenge within the given time period is entered into
          the lottery..
        </Paragraph>
      </div>

      <div className={styles.rewardsContainer}>
        <div className={styles.rewardsImg}>
          <Image
            src={
              isMobile
                ? '/images/block-rewards/Features/rewardsMobile.png'
                : '/images/block-rewards/Features/rewardsDesktop.png'
            }
            alt="Zcn Rewards"
            quality={100}
            layout="fill"
            priority
            sizes="(max-width: 768px) 150vw,
            50vw"
          />
        </div>

        <div className={styles.featureListContainer}>
          {featureListData.map(({ number, heading, text }) => {
            return (
              <FeatureList
                heading={heading}
                text={text}
                number={number}
                key={number}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

FeatureList.propTypes = {
  number: PropTypes.number,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Features
