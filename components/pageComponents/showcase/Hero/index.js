import { Fade } from 'react-awesome-reveal'
import dynamic from 'next/dynamic'

import Heading from 'components/Heading'
import SocialIcons from 'components/SocialIcons'
import GetNotified from 'components/GetNotified'

import styles from './index.module.scss'

const ShakaPlayer = dynamic(() => import('shaka-player-react'), { ssr: false })

const Hero = () => {
  return (
    <main className={styles.rootContainer}>
      <div className={styles.overlay} />
      <Fade triggerOnce>
        <ShakaPlayer
          src="https://ayush-gupta.s3.us-east-2.amazonaws.com/test/newwebsite/h264_master.m3u8"
          poster="/images/Showcase/poster.jpg"
          loop
          muted
          controls={false}
          className={styles.backgroundVideo}
          autoPlay></ShakaPlayer>
      </Fade>

      <div className={styles.videoBottomText}>
        <span>
          Footage courtesy of: NASA / ESRS{' '}
          <a href="https://eol.jsc.nasa.gov" target="_blank" rel="noreferrer">
            eol.jsc.nasa.gov
          </a>{' '}
        </span>
        <span>
          Footage repair, image processing:{' '}
          <a
            href="https://www.youtube.com/watch?v=7KXGZAEWzn0&t=0s"
            target="_blank"
            rel="noreferrer">
            ‘Orbit’
          </a>{' '}
          Seán Doran
        </span>
      </div>

      {/* <Fade
        duration={800}
        direction="up"
        triggerOnce
        style={{ position: 'relative', zIndex: 2 }}> */}
      <Heading
        text="This content is being streamed from ZCN dstorage"
        withoutPeriod
      />
      {/* </Fade> */}

      <div className={styles.mainTextContent}>
        {/* <Fade duration={800} direction="up" triggerOnce delay={500}> */}
        <h4 className={styles.secondaryHeading}>
          Get notified as soon as mainnet launches
        </h4>
        <GetNotified showcasePage />
        <SocialIcons styles={styles} />
        {/* </Fade> */}
      </div>
    </main>
  )
}

export default Hero
