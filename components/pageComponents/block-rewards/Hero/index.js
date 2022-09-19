import Image from 'next/image'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './index.module.scss'

const data = [
  {
    title: 'Blobbers',
    text: 'In the first year of mainnet, the Blobber network as a whole will receive a total of ~7,500,000 ZCN in block rewards designated for all active Blobbers on the Züs Cloud Network. The proportion of block reward that each blobber receives is determined by their contributions to the network relative to the average blobber’s contribution on the network. These contributions are measured using the Blobber Weight Formula, which is explained more thoroughly below.',
    icon: '/images/block-rewards/Hero/blobber.png',
  },
  {
    title: 'Miners & Sharders',
    text: 'In the first year of mainnet, the Active Set as a whole will be paid a total of ~8,500,000 ZCN in block rewards. The rewards will be spread out equally to its 141 Miners and Sharders.*',
    text2:
      '*After the first year of mainnet, future network upgrades will modify the Active Set selection process, and thus the annual block reward breakdown per Miner and Sharder may also see modifications.',
    icon: '/images/block-rewards/Hero/miner.png',
  },
]

const Hero = () => {
  const isMobile = useGetScreenSize()
  return (
    <main className={styles.rootContainer}>
      <div className={styles.mainTextContent}>
        <Heading text="Block Rewards" />
        <Paragraph>
          A ZCN block reward is minted with each new block and paid out to
          Miners, Sharders, and Blobbers to incentivize the growth of the Züs
          Cloud Network expansion.
        </Paragraph>
      </div>

      <div className={styles.heroImg}>
        <Image
          src={
            isMobile
              ? '/images/block-rewards/Hero/heroImg.png'
              : '/images/block-rewards/Hero/heroImgDesktop.png'
          }
          alt="Block Rewards"
          layout="fill"
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw,
          50vw"
        />
      </div>

      <div className={styles.blueContainers}>
        {data.map(({ title, text, text2, icon }) => {
          return (
            <div className={styles.blueContainer} key={title}>
              <Heading text={title} Tag="h3" />
              <Paragraph>
                {text}
                {text2 && <span>{text2}</span>}
              </Paragraph>
              <div className={styles.icon}>
                <Image
                  src={icon}
                  alt={title}
                  layout="fixed"
                  width={278}
                  height={210}
                  quality={100}
                />
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Hero
