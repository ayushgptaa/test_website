import Link from 'next/link'

import Heading from 'components/Heading'
import Text from 'components/Text'
import MobilePrimaryBg from 'components/MobilePrimaryBg'

import styles from './ErrorComponent.module.scss'

const ErrorComponent = () => {
  return (
    <section className={styles.container}>
      <MobilePrimaryBg />
      <div className={styles.content}>
        <div className={styles.errorImg}></div>
        <div className={styles.textContainer}>
          <Heading text="OOPS..." uppercase withoutPeriod />
          <Text>
            We’re sorry the page you’re looking for can’t be found. You can
            start again from our home page <Link href="/">here</Link>. For any
            support or help requests, our <Link href="/">forum</Link> is a great
            place to start.
          </Text>
        </div>
      </div>
    </section>
  )
}

export default ErrorComponent