import PropTypes from 'prop-types'
import { Fade, Zoom } from 'react-awesome-reveal'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import BlobberInfoImg from './BlobberInfoImg'

import { whitepaperLinks } from 'SocialLinks/links'

import { toLowerCaseRemoveSpaces } from 'util/globalFunctions'

import styles from './index.module.scss'

const blobberFeatrues = [
  {
    heading: 'Free Egress Multiplier',
    text: 'Blobbers will be incentivized to provide Free Egress (also known as Free Reads) in order to facilitate initial adoption of Züs Cloud Network. Blobbers who provide Free Egress will receive the maximum multiplier. Blobbers who don’t provide Free Egress will receive a lower multiplier. Blobbers who provide Free Egress will receive the maximum multiplier.',
  },
  {
    heading: 'Fair Usage Multiplier',
    text: 'Blobbers will be incentivized to provide honest storage performance. In order to prevent malicious Blobbers from exploiting the rewards mechanism, the Fair Useage function audits the bandwidth of a Blobber to detect and penalize any inorganic data usage patterns. The Fair Useage function is a ratio of a Blobber’s Egress Activity relative to their Active Data Storage. The closer a Blobber keeps this ratio to 2, the higher the multiplier.',
  },
  {
    heading: 'ZCN Delegated',
    text: 'Blobbers will be incentivized to stake and collateralize value on their active storage commitments. Since ZCN is the staking asset required for any storage commitment, the weight formula rewards those blobbers with more ZCN delegated (both self-delegated and externally delegated) to active storage commitments.',
  },

  {
    heading: 'Successful Challenges',
    text: 'Blobbers will be incentivized to store a lot of data. When Blobbers store data, they are periodically issued Challenges to prove that they’re storing the files that they claim to be storing. When a Blobber receives a Challenge, it must submit a proof of the file to successfully pass the Challenge - this is referred to as a Successful_Challenge. For every Challenge that a Blobber successfully passes over n blocks, this adds +1 to a Blobber’s Successful_Challenges multiplier. Since Blobbers who store more files have a higher probability of receiving more challenges, the Successful_Challenges multiplier rewards those Blobbers with more active storage on the Züs Cloud Network.',
  },
]

const Features = ({ heading, text }) => {
  return (
    <Fade cascade duration={600} triggerOnce>
      <div
        className={styles.features}
        key={heading}
        id={toLowerCaseRemoveSpaces(heading)}>
        <div className={styles.featuresTextContent}>
          <Heading text={heading} Tag="h4" withoutPeriod />
          <Paragraph>{text}</Paragraph>
        </div>
      </div>
    </Fade>
  )
}

const BlobberInfo = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.topTextContent}>
        <Fade direction="up" cascade duration={600} triggerOnce>
          <Heading text="Blobber Weight Formula" Tag="h3" />
          <Paragraph>
            The proportion of block reward that each blobber receives is
            determined by their contributions to the network relative to the
            average blobber’s contribution on the network. These contributions
            are measured using the Blobber Weight Formula, which is comprised of
            the following: “Goodness Factor”, which is determined by the [free
            egress multiplier] and the [fair usage multiplier]; and “Adjusted
            Stake”, which is determined by [ZCN Delegated] and [Successful
            Challenges]
          </Paragraph>
        </Fade>
      </div>

      <Zoom triggerOnce>
        <div className={styles.blobberInfoImg}>
          <BlobberInfoImg />
          <Button
            type="button"
            text="Read the Economics Whitepaper"
            black
            link={whitepaperLinks.ECONOMIC_PROTOCOL}
            blank
          />
        </div>
      </Zoom>

      <Button
        type="button"
        text="Read the Economics Whitepaper"
        transparent
        black
        link={whitepaperLinks.ECONOMIC_PROTOCOL}
        blank
      />

      <div className={styles.featuresContainer}>
        {blobberFeatrues.map(({ heading, text }) => {
          return <Features key={heading} heading={heading} text={text} />
        })}
      </div>
    </section>
  )
}

Features.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default BlobberInfo
