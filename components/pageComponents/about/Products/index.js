import { useState } from 'react'
import IconContainer from 'components/IconContainer'

import styles from './index.module.scss'

const data = [
  {
    id: 1,
    title: 'Vult',
    icon: '/images/About/Products/vultIcon.svg',
    colorIcon: '/images/About/Products/vultIconColored.svg',
    link: 'https://staging-vult.testnet-0chain.net/',
  },
  {
    id: 2,
    title: 'Bolt',
    icon: '/images/About/Products/boltIcon.svg',
    colorIcon: '/images/About/Products/boltIconColored.svg',
    link: 'https://staging-bolt.testnet-0chain.net/',
  },
  {
    id: 3,
    title: 'Chimney',
    icon: '/images/About/Products/chimneyIcon.svg',
    colorIcon: '/images/About/Products/chimneyIconColored.svg',
    link: 'https://staging-chimney.testnet-0chain.net/',
    size: 22,
  },
  {
    id: 4,
    title: 'Blimp',
    icon: '/images/About/Products/blimpIcon.svg',
    colorIcon: '/images/About/Products/blimpIconColored.svg',
    link: 'https://staging-blimp.testnet-0chain.net/',
    size: 35,
  },
  {
    id: 5,
    title: 'Chalk',
    icon: '/images/About/Products/chalkIcon.svg',
    colorIcon: '/images/About/Products/chalkIconColored.svg',
    link: 'https://staging-chalk.testnet-0chain.net/',
    size: 30,
  },
]

const Products = () => {
  const [index, setIndex] = useState(null)

  return (
    <div className={styles.rootContainer}>
      <h5>We are Züs</h5>
      <div className={styles.products}>
        {data.map(({ id, title, icon, colorIcon, link, size }) => {
          return (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              key={title}
              className={styles.productWrapper}
              onMouseEnter={() => setIndex(id)}
              onMouseLeave={() => setIndex(null)}>
              <IconContainer
                img={index === id ? colorIcon : icon}
                alt={title}
                height={size || 24}
                width={size || 24}
                layout="fixed"
              />
              <p>{title}</p>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Products
