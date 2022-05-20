import Image from 'next/image'
import styles from './Author.module.scss'

const Author = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photoProfile}>
        <Image
          src="/images/blog/author/1.jpg"
          width={76}
          height={76}
          alt="Author"
          objectFit="cover"
        />
      </div>
      <span className={styles.title}>Nolwen Désiré</span>
      <span className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit neque augue
        habitant pulvinar. Ornare enim
      </span>
    </div>
  )
}

export default Author
