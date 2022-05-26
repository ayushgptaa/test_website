import Image from 'next/image'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Text from 'components/Text'
import FeaturesList from 'pageComponents/homepage/Features/FeaturesList'

import featurelistData from './featuresListData'

import styles from './Features.module.scss'
import { ScrollSnapSection } from 'components/ScrollSnap'
import { Fade } from 'react-awesome-reveal'

const Features = () => {
  return (
    <section className={styles.container}>
      <ScrollSnapSection>
        <div className={styles.header}>
          <Fade direction="up">
            <div className={styles.codeImgContainer}>
              <Image
                src="/images/buildPage/Features/codeImg.png"
                width={460}
                height={570}
                alt="migrate any app"
                quality={100}
              />
            </div>
          </Fade>
          <div className={styles.textContainer}>
            <Fade direction="up">
              <Heading text="Migrate Any App" />
              <Text>
                Züs is designed from the ground-up to simplify the migration
                process from traditional cloud. Tools such as the Zbox CLI allow
                any application to easily migrate to the Züs Cloud Network for
                enterprise-grade storage.
              </Text>
              <Button
                type="button"
                text="Documentation"
                link="https://docs.0chain.net/0chain/0miner"
              />
            </Fade>
          </div>
        </div>
      </ScrollSnapSection>

      <ScrollSnapSection>
        <div className={styles.bgImgContainer}>
          <Fade direction="up" cascade>
            <Heading text="Affordable Pricing, Top Performance" />
            <Text>
              With added file security features only possible on Züs&#39;
              blockchain powered Cloud Network.
            </Text>
          </Fade>
        </div>
      </ScrollSnapSection>

      <ScrollSnapSection alignMobile="start">
        <Fade cascade>
          <div className={styles.featureList}>
            <Heading text="Building Resources" />
            <Text>
              We’ve brought together the tools and documentation to help get you
              started. Join a growing community of engineers. Build the next
              generation of the public cloud.
            </Text>

            <div className={styles.featureListDataContainer}>
              <Fade>
                {featurelistData.map(
                  ({ pattern, heading, text, img, link }) => (
                    <FeaturesList
                      pattern={pattern}
                      heading={heading}
                      text={text}
                      img={img}
                      key={heading}
                      buttonText="View"
                      link={link}
                    />
                  )
                )}
              </Fade>
            </div>
          </div>
        </Fade>
      </ScrollSnapSection>
    </section>
  )
}

export default Features
