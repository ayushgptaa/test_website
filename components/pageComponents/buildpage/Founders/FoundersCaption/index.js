import styles from './index.module.scss'

const data = [
  {
    heading: 'TOM AUSTIN',
    text: 'Founder. Security, language expert. Prof in CS @ SJSU. Prior @Mozilla,ESIEA Cryptology/Virology lab, CloudFlare. PhD in CS from UC Santa Cruz',
  },

  {
    heading: 'SASWATA BASU ',
    text: 'Founder. 20 years in Blockchain, AI, IoT, Cloud, Wireless @ Intel, Harris, Nortel, Aviat, and Energous. MS and PhD in EE from UCLA Cruz',
  },
]

const FoundersCaption = () => (
  <div className={styles.foundersCaption}>
    {data.map(({ heading, text }) => (
      <div key={heading}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    ))}
  </div>
)

export default FoundersCaption
