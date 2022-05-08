import Image from 'next/image'
import styles from './Author.module.scss'

import photo from 'public/images/blog/author/1.jpg'

const Author = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photoProfile}>
        <Image src={`/${photo.src}`} width={76} height={76} objectFit="cover" />
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
