import IconContainer from 'components/IconContainer'

import styles from './index.module.scss'

const data = [
  {
    title: 'Vult',
    icon: '/images/Footer/footerIcons/vult.svg',
    link: 'https://staging-vult.testnet-0chain.net/',
  },
  {
    title: 'Bolt',
    icon: '/images/Footer/footerIcons/bolt.svg',
    link: 'https://staging-bolt.testnet-0chain.net/',
  },
  {
    title: 'Chimney',
    icon: '/images/Footer/footerIcons/chimney.svg',
    link: 'https://staging-chimney.testnet-0chain.net/',
  },
  {
    title: 'Blimp',
    icon: '/images/Footer/footerIcons/blimp.svg',
    link: 'https://staging-blimp.testnet-0chain.net/',
  },
  {
    title: 'Chalk',
    icon: '/images/Footer/footerIcons/chalk.svg',
    link: 'https://staging-chalk.testnet-0chain.net/',
  },
]

const Products = () => {
  return (
    <div className={styles.rootContainer}>
      <h5>We are Züs</h5>
      <div className={styles.products}>
        {data.map(({ title, icon, link }) => {
          return (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              key={title}
              className={styles.productWrapper}>
              <IconContainer img={icon} alt={title} height={30} width={30} />
              <p>{title}</p>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Products
