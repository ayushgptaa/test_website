import Image from 'next/image'
import clsx from 'clsx'
import { Fade } from 'react-awesome-reveal'

import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'

const data = [
  {
    heading1: 'Something Mutations',
    heading2:
      'Lorem ipsum dolor sit amet, consectetur ut labore et dolore magna aliqua.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: '/images/nft/Features/img1.png',
    id: 1,
  },
  {
    heading1: 'Something Mutations',
    heading2:
      'Lorem ipsum dolor sit amet, consectetur ut labore et dolore magna aliqua.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    img: '/images/nft/Features/img2.png',
    id: 2,
  },
]

const FeatureWithImg = () => {
  return data.map(({ heading1, heading2, text, img, id }) => {
    return (
      <div className={styles.container} key={id}>
        <Fade delay={200} duration={600} cascade triggerOnce>
          <div className={clsx(styles.image, styles[`image${id}`])}>
            <Image src={img} alt={heading1} quality={100} layout="fill" />
          </div>
        </Fade>

        <div className={styles.textContent}>
          <h4>{heading1}</h4>
          <h5>{heading2}</h5>
          <Paragraph>{text}</Paragraph>
        </div>
      </div>
    )
  })
}
export default FeatureWithImg
