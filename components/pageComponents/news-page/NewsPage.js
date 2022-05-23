import { useState, useEffect } from 'react'
import Image from 'next/image'
import ReactPaginate from 'react-paginate'
import { Fade } from 'react-awesome-reveal'

import Card from './Card'
import { WorkWithUs } from './CTA'

import newsPageData from './NewsPageData'
import styles from './NewsPage.module.scss'

const NewsPage = () => {
  const itemsPerPage = 5
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(newsPageData.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(newsPageData.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newsPageData.length
    setItemOffset(newOffset)
  }

  return (
    <Fade>
      <div className={styles.container}>
        <div className={styles.topEllipse} />
        <h1>NEWS</h1>
        <Fade>
          {currentItems.map((data) => {
            return <Card data={data} key={data.id} />
          })}
        </Fade>
        <div className={styles.pagination}>
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <Image
                src="/images/blog/pagination/arrow-right.svg"
                width={80}
                height={32}
              />
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel={
              <Image
                src="/images/blog/pagination/arrow-left.svg"
                width={80}
                height={32}
              />
            }
            renderOnZeroPageCount={null}
            activeClassName={styles.active}
            disabledClassName={styles.disabled}
          />
        </div>
        <div className={styles.cta}>
          <WorkWithUs />
        </div>
      </div>
    </Fade>
  )
}

export default NewsPage
