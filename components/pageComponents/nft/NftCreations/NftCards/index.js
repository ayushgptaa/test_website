import { useState } from 'react'
import PropTypes from 'prop-types'
import move from 'lodash-move'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { cardData1, cardData2, cardData3 } from './cardsData'

import useGetScreenSize from 'hooks/useGetScreenSize'

import styles from './index.module.scss'

const Cards = ({ cardData }) => {
  const [cards, setCards] = useState(cardData)

  const isMobile = useGetScreenSize()

  const CARD_OFFSET = isMobile ? 27 : 40

  const cardsPos = (index) => {
    if (isMobile) {
      return {
        bottom: index * CARD_OFFSET,
        left: index * -CARD_OFFSET,
      }
    }

    return {
      bottom: index * CARD_OFFSET,
      right: index * CARD_OFFSET,
    }
  }

  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1))
  }

  return (
    <div className={styles.cardsContainer}>
      {cards?.map(({ name, img, createrName, price, pack }, index) => {
        const canDrag = index === 0
        return (
          <motion.div
            key={name}
            style={{
              cursor: canDrag ? 'grab' : 'auto',
            }}
            animate={{
              zIndex: cards.length - index,
              ...cardsPos(index),
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            drag={canDrag}
            dragConstraints={{
              top: 20,
              bottom: 20,
              left: 20,
              right: 20,
            }}
            onDragEnd={() => moveToEnd(index)}
            dragSnapToOrigin
            className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.nftImage}>
                <Image src={img} alt={name} layout="fill" quality={100} />
              </div>

              <h5 className={styles.name}>{name}</h5>
              <p className={styles.creater}>{createrName}</p>
              <div className={styles.priceContainer}>
                <div className={styles.ethIcon}>
                  <Image
                    src="/images/nft/NftCreations/ethIcon.svg"
                    alt="etherium"
                    layout="fill"
                    quality={100}
                  />
                </div>
                <p>{price}</p>
                <span>{pack}</span>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

const NFtCards = () => {
  const isMobile = useGetScreenSize()
  return (
    <Swiper
      slidesPerView={isMobile ? 2 : 3}
      spaceBetween={isMobile ? 10 : -40}
      className={styles.mySwiper}>
      <SwiperSlide style={{ zIndex: 3, maxWidth: '408px' }}>
        <Cards cardData={cardData1} />
      </SwiperSlide>
      <SwiperSlide style={{ zIndex: 2, maxWidth: '408px' }}>
        <Cards cardData={cardData2} />
      </SwiperSlide>
      <SwiperSlide style={{ zIndex: 1, maxWidth: '408px' }}>
        <Cards cardData={cardData3} />
      </SwiperSlide>
    </Swiper>
  )
}

Cards.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NFtCards
