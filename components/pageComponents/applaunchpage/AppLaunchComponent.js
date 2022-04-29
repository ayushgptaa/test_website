import Image from 'next/image'

import Container from './Container'
import Heading from 'components/Heading'
import Text from 'components/Text'
import MobilePrimaryBg from 'components/MobilePrimaryBg'

import applaunchData from './applaunchData'

import styles from './AppLaunch.module.scss'

const AppLaunchComponent = () => {
  return (
    <section className={styles.container}>
      <MobilePrimaryBg />
      <div className={styles.mainText}>
        <Heading text="Dive into the app ecosystem" uppercase />
        <Text>See what’s possible on the Zus Cloud Network.</Text>
      </div>
      {applaunchData.map(({ icon, heading, text, btnText }) => (
        <Container key={heading}>
          <div className={styles.containerContent}>
            <div className={styles.iconContainer}>
              <Image src={icon} alt={heading} layout="fixed" />
            </div>
            <Heading text={heading} />
            <Text>{text}</Text>
          </div>
          <button type="button">{btnText}</button>
        </Container>
      ))}
      <Container textContainer>
        <Heading text="More coming soon" />
      </Container>
    </section>
  )
}

export default AppLaunchComponent
