import { useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper'

import sliderData from './sliderData'

import 'swiper/css'
import 'swiper/css/scrollbar'

import styles from './ReadingSlider.module.scss'
import clsx from 'clsx'

const ReadingSlider = () => {
  return (
    <>
      <MobileComponent />
      <DesktopComponent />
    </>
  )
}

const DesktopComponent = () => {
  return (
    <div className={styles.desktopContainer}>
      {sliderData.map(({ image, title }) => (
        <div className={styles.pageContainer} key={title}>
          <div className={styles.imgContainer}>
            <Image
              src={`/${image.src}`}
              width={image.width}
              height={image.height}
              alt={image.alt}
              quality={100}
              layout="fixed"
            />
          </div>
          <p>{title}</p>
        </div>
      ))}
    </div>
  )
}

const MobileComponent = () => {
  useEffect(() => {
    const scrollbarDrag = document.querySelector('.swiper-scrollbar-drag')
    scrollbarDrag.style.background = ' #175BFF'
  })

  return (
    <div className={styles.mobileContainer}>
      <Swiper
        scrollbar={{
          el: '.swiper-scrollbar',
          draggable: true,
          dragSize: 115,
          dragColor: 'red',
        }}
        slidesPerView={2}
        centeredSlides
        modules={[Scrollbar]}
        spaceBetween={50}>
        {sliderData.map(({ image, title }) => (
          <SwiperSlide key={title}>
            <div className={styles.pageContainer}>
              <div className={styles.imgContainer}>
                <Image
                  src={`/${image.src}`}
                  width={image.width}
                  height={image.height}
                  alt="hello"
                  quality={100}
                  layout="fixed"
                />
              </div>
              <p>{title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={clsx(styles.scrollbar, 'swiper-scrollbar')}></div>
    </div>
  )
}

export default ReadingSlider
