import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import styles from './Card.module.scss'
import Tag from '../Tag'

const Card = ({ data }) => {
  const router = useRouter()

  const handleLearnMore = (id) => {
    router.push(`/news/${id}`)
  }

  return (
    <div key={data.id} className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={data.image}
          alt={data.title}
          sizes="50vw"
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
        <span className={styles.title}>
          <Link href={`/news/${data.id}`}>{data.title}</Link>
        </span>
        <span className={styles.description}>
          {`${data.description.substring(0, 86)}...`}
        </span>
        <Button
          type="button"
          text="Learn more"
          onClick={() => handleLearnMore(data.id)}
        />
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
