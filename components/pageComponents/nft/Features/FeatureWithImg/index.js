import Image from 'next/image'
import clsx from 'clsx'

import styles from './index.module.scss'
import BulletText from 'components/BulletText'

const data = [
  {
    heading1: 'Something Mutations',
    heading2:
      'Chalk offers permanent high-performance NFT storage with no upfront costs.',
    featureList: [
      'Store your NFTs permanently and securely',
      'No upfront costs',
      'High performance guaranteed',
    ],
    img: '/images/nft/Features/img1.png',
    id: 1,
  },
  {
    heading1: 'Easy Codeless Minting',
    heading2:
      'Chalk is the only platform to provide randomized public minting of NFTs and Packs for Ethereum and Polygon.',
    featureList: [
      'Codeless creation of NFTs and Packs for Ethereum and Polygon',
      'Randomized public minting of NFT and packs',
      'Mutation of data to create unique experiences',
    ],
    img: '/images/nft/Features/img2.png',
    id: 2,
  },
]

const FeatureWithImg = () => {
  return data.map(({ heading1, heading2, featureList, img, id }) => {
    return (
      <div className={styles.container} key={id}>
        <div className={clsx(styles.image, styles[`image${id}`])}>
          <Image src={img} alt={heading1} quality={100} layout="fill" />
        </div>

        <div className={styles.textContent}>
          <h4>{heading1}</h4>
          <h5>{heading2}</h5>
          <div className={styles.featuresList}>
            {featureList.map((feature) => (
              <BulletText key={feature}>{feature}</BulletText>
            ))}
          </div>
        </div>
      </div>
    )
  })
}
export default FeatureWithImg
