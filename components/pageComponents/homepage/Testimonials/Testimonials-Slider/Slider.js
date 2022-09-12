import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import PropTypes from 'prop-types'

import { NextBtn, PrevBtn } from './Buttons'
import Paragraph from 'components/Paragraph'

import testimonialData from './testimonialData'

import useGetScreenSize from 'hooks/useGetScreenSize'

// Slider CSS
import 'swiper/css'
import 'swiper/css/navigation'

import styles from './Slider.module.scss'

const FounderInfo = ({ img, name, description }) => {
  const isMobile = useGetScreenSize()
  return (
    <div className={styles.founderInfoContainer}>
      <div className={styles.founderImg}>
        <Image
          src={img}
          alt={name}
          height={isMobile ? 60 : 110}
          width={isMobile ? 60 : 110}
          layout="fixed"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.founderInfoText}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

FounderInfo.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        }}
        loop
        spaceBetween={30}
        grabCursor
        slidesPerView="auto"
        centeredSlides>
        {testimonialData.map(({ text, description, name, img }) => (
          <SwiperSlide key={name} className={styles.testimonialContainer}>
            <Paragraph>{text}</Paragraph>
            <FounderInfo img={img} name={name} description={description} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.buttonsContainer}>
        <PrevBtn />
        <NextBtn />
      </div>
    </>
  )
}

export default Slider
