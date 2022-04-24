import Image from 'next/image'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Text from 'components/Text'
import FeaturesList from 'pageComponents/homepage/Features/FeaturesList'

import featurelistData from './featuresListData'

import codeImg from 'public/images/buildPage/Features/codeImg.png'

import styles from './Features.module.scss'

const Features = () => {
  return (
    <section className={styles.container}>
      <div className={styles.codeImgContainer}>
        <Image
          src={codeImg}
          alt="migrate any app"
          quality={100}
          layout="fixed"
        />
      </div>
      <div className={styles.textContainer}>
        <Heading text="Migrate Any App" />
        <Text>
          Züs is designed from the ground-up to simplify the migration process
          from traditional cloud. Tools such as the Zbox CLI allow any
          application to easily migrate to the Züs Cloud Network for
          enterprise-grade storage.
        </Text>
        <Button type="button" text="Get Notified" />
      </div>

      <div className={styles.bgImgContainer}>
        <Heading text="Affordable Pricing, Top Performance" />
        <Text>
          With added file security features only possible on Züs&#39; blockchain
          powered Cloud Network.
        </Text>
      </div>

      <div className={styles.featureList}>
        <Heading text="Building Resources" />
        <Text>
          We’ve brought together the tools and documentation to help get you
          started. Join a growing community of engineers. Build the next
          generation of the public cloud.
        </Text>

        {featurelistData.map(({ pattern, heading, text, img, buttonText }) => (
          <FeaturesList
            pattern={pattern}
            heading={heading}
            text={text}
            img={img}
            key={heading}
            buttonText={buttonText}
          />
        ))}
      </div>
    </section>
  )
}

export default Features
