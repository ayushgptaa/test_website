import Image from 'next/image'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import styles from './Card.module.scss'
import Tag from '../Tag'

const Card = ({ data }) => {
  return (
    <div key={data.id} className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={data.image}
          alt={data.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.tagWrapper}>
          {data.tags.map((tag) => {
            return <Tag tag={tag} key={tag} />
          })}
        </div>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.description}>
          {`${data.description.substring(0, 86)}...`}
        </span>
        <Button type="button" text="Learn more" />
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
  }),
}

export default Card
