import FeaturesList from 'components/pageComponents/homepage/Features/FeaturesList'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import FeatureWithImg from './FeatureWithImg'

import styles from './index.module.scss'

const featurelistData = [
  {
    heading: 'Limitless NFT Scalable Storage',
    text: 'Chalk’s scalable storage (with no upfront cost) is the perfect solution for users that need to store a lot of video and high-resolution NFTs.',
    img: '/images/homePage/Features/storeIcon.svg',
    link: '/store',
  },
  {
    heading: 'Limitless Simple Codeless NFT Minting',
    text: 'Minting with Chalk is simple, reliable, and secure- perfect for anyone looking to create a high quality NFT portfolio.',
    img: '/images/homePage/Features/buildIcon.svg',
    link: '/build',
  },
  {
    heading: 'Limitless Mutation of NFT Data',
    text: 'Speed up development time for your NFT projects with simple and fast mutation of your NFT data, without sacrificing security or quality.',
    img: '/images/homePage/Features/earnIcon.svg',
    link: '/earn',
  },
]

const Features = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.sectionTextContent}>
        <Heading
          text="Infinite Mutations & other UVPs"
          Tag="h3"
          withoutPeriod
        />
        <Paragraph>
          Cloud Storage on Züs is enabled by a reliable decentralized cloud
          network and a lightning-fast Layer 1 blockchain protocol. This makes
          the process of getting started swift and intuitive.
        </Paragraph>
      </div>

      <div className={styles.featureListWrapper}>
        {featurelistData.map(({ pattern, heading, text, img, link }) => (
          <FeaturesList
            pattern={pattern}
            heading={heading}
            text={text}
            img={img}
            key={heading}
            link={link}
            buttonText="Learn More"
          />
        ))}
      </div>

      <div className={styles.featureWithImg}>
        <FeatureWithImg />
      </div>
    </section>
  )
}

export default Features
