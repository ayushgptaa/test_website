import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { NextBtn, PrevBtn } from './Buttons'

import testimonialData from './testimonialData'

// Slider CSS
import 'swiper/css'
import 'swiper/css/navigation'

import styles from './Slider.module.scss'

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        }}
        spaceBetween={100}
        slidesPerView={1}
        autoHeight>
        {testimonialData.map(({ text, description, name, img }) => (
          <SwiperSlide key={name}>
            <div className={styles.testimonialContainer} key="name">
              <div className={styles.image}>
                <Image
                  src={img}
                  quality={100}
                  layout="fill"
                  objectFit="cover"
                  priority={1}
                />
              </div>
              <div className={styles.reviewContainer}>
                <div className={styles.review}>
                  <p>{text}</p>
                </div>
                <div className={styles.role}>
                  <p className={styles.description}>{description}</p>
                  <p className={styles.name}>{name}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <PrevBtn />
      <NextBtn />
    </>
  )
}

export default Slider
