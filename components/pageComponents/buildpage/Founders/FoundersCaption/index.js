import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import styles from './index.module.scss'

const data = [
  {
    name: 'Tom Austin',
    role: 'Founder',
    description: 'Security & Language expert',
    work: 'Prof in CS @ SJSU. Prior @Mozilla,ESIEA Cryptology/Virology lab, CloudFlare. PhD in CS from UC Santa Cruz',
    signature: '/images/buildPage/Founders/sig1.svg',
    height: 49,
    width: 87,
  },

  {
    name: 'Saswata Basu',
    role: 'Founder',
    description: '20 years in Blockchain, AI, IoT, Cloud',
    work: 'Wireless @ Intel, Harris, Nortel, Aviat, and Energous. MS and PhD in EE from UCLA',
    signature: '/images/buildPage/Founders/sig2.svg',
    height: 33,
    width: 211,
  },
]

const FoundersCaption = () => (
  <div className={styles.container}>
    {data.map(({ name, role, description, work, signature, height, width }) => (
      <Fade direction="up" cascade triggerOnce duration={600} key={name}>
        <div className={styles.details}>
          <div>
            <h4 className={styles.name}>{name}</h4>
            <p className={styles.role}>{role}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.work}>{work}</p>
          </div>

          <Image
            src={signature}
            alt={name}
            layout="fixed"
            height={height}
            width={width}
            quality={100}
          />
        </div>
      </Fade>
    ))}
  </div>
)

export default FoundersCaption
