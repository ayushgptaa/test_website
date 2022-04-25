import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Text from 'components/Text'

import twitterIcon from '/public/images/contact/twitterIcon.svg'

import styles from './ContactComponent.module.scss'

const ContactComponent = () => {
  return (
    <main className={styles.container}>
      <div className={styles.mainBackground}></div>
      <div className={styles.primaryContainer}>
        <div className={styles.bgImage}></div>
        <p>Contact Züs.</p>
        <Heading text="Want to reach out? Message us on Twitter" />
        <div className={styles.iconContainer}>
          <Image
            src={twitterIcon}
            alt="twitter"
            quality={100}
            layout="fixed"
            height={24}
            width={24}
          />
          <p>@ZusCloud</p>
        </div>
        <Button type="button" text="DM us on Twitter" />
      </div>
      <div className={styles.secondaryContainer}>
        <Text>
          If you need our brand media is available for you to use&nbsp;
          <Link href="/">here</Link>. For any support or help requests,
          our&nbsp;
          <Link href="/">forum</Link>. is a great place to start.
        </Text>
      </div>
    </main>
  )
}

export default ContactComponent
