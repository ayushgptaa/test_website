import Author from './Author'
import PropTypes from 'prop-types'
import { WorkWithUs, InArticle } from './CTA'
import Tag from './Tag'
import Image from 'next/image'
import SocialIcons from 'components/SocialIcons'

import styles from './NewsDetailPage.module.scss'

const NewsDetailPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.topEllipse} />
        <span className={styles.title}>{data.title}</span>
        <div className={styles.tagWrapper}>
          {data.tags.map((tag) => {
            return <Tag tag={tag} key={tag} />
          })}
        </div>
        <div className={styles.coverImage}>
          <Image
            src={data.image}
            alt={data.title}
            width={327}
            height={325}
            quality={100}
            objectFit="cover"
          />
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
            malesuada eros molestie suspendisse tellus. Tortor, vitae pretium
            amet urna dignissim amet. Luctus orci, velit consectetur sit risus
            vulputate lectus aliquam nunc. A quis hac semper nunc faucibus.
            Eros, odio porta nisl, amet, ipsum, dictum interdum. Ac nullam a sit
            sodales. Cras dui urna, at ac aliquet justo vel a. Blandit est purus
            sapien placerat. Condimentum aliquam sodales consectetur vel
            pharetra. Eget eu in est, eu sapien eu pretium nibh. In leo erat
            nibh pretium. Sagittis metus morbi scelerisque volutpat sed id odio
            proin.
          </p>

          <h1>Challenge</h1>

          <p>
            Odio vehicula orci imperdiet odio natoque congue felis commodo. Nunc
            habitasse tristique pharetra, urna lorem. Pellentesque arcu
            tristique facilisi quis elementum, odio gravida rhoncus.
          </p>

          <p>
            Magna nisi fringilla varius cras tortor egestas suspendisse. In eget
            porttitor tellus dictum enim, nisi in. Sollicitudin gravida suscipit
            sed pharetra neque aliquam. In eu in tincidunt aenean adipiscing.
            Pretium sit natoque est faucibus urna cursus lorem ante. In nunc
            fusce faucibus massa viverra mauris eget vitae. Mus felis nibh
            blandit consectetur. Et ac eget morbi semper eu felis. Sed pulvinar
            tempor amet, dolor morbi commodo urna nulla sed. Id neque pretium
            consectetur gravida et. Nunc lectus aliquam id vivamus molestie
            arcu.
          </p>

          <InArticle />

          <div className={styles.contentImages}>
            <Image
              src="/images/blog/content/1.jpg"
              alt="img 1"
              height={325}
              width={327}
              objectFit="cover"
            />
            <Image
              src="/images/blog/content/2.jpg"
              alt="img 2"
              height={325}
              width={327}
              objectFit="cover"
            />
          </div>

          <h1>Challenge</h1>

          <p>
            Odio vehicula orci imperdiet odio natoque congue felis commodo. Nunc
            habitasse tristique pharetra, urna lorem. Pellentesque arcu
            tristique facilisi quis elementum, odio gravida rhoncus.
          </p>

          <p>
            Magna nisi fringilla varius cras tortor egestas suspendisse. In eget
            porttitor tellus dictum enim, nisi in. Sollicitudin gravida suscipit
            sed pharetra neque aliquam. In eu in tincidunt aenean adipiscing.
            Pretium sit natoque est faucibus urna cursus lorem ante. In nunc
            fusce faucibus massa viverra mauris eget vitae. Mus felis nibh
            blandit consectetur. Et ac eget morbi semper eu felis. Sed pulvinar
            tempor amet, dolor morbi commodo urna nulla sed. Id neque pretium
            consectetur gravida et. Nunc lectus aliquam id vivamus molestie
            arcu.
          </p>
        </div>
        <div className={styles.contentFooter}>
          <SocialIcons />
          <Author />
          <WorkWithUs />
        </div>
      </div>
    </div>
  )
}

NewsDetailPage.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
  }).isRequired,
}

export default NewsDetailPage
