/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import propTypes from 'prop-types'
import { motion } from 'framer-motion'

import styles from './ZusLogo.module.scss'

const transition = {
  duration: 0.5,
  ease: 'linear',
  opacity: { duration: 0.3 },
  delay: 0.1,
}

const leftMotion = {
  initial: { rotate: -90, x: -8, y: -2, opacity: 0 },
  final: { rotate: 0, x: 0, y: 0, opacity: 1 },
}

const rightMotion = {
  initial: { rotate: 90, x: 8, y: -2, opacity: 0 },
  final: { rotate: 0, x: 0, y: 0, opacity: 1 },
}

const ZusLogo = ({ removeZusText }) => {
  return (
    <Link href="/" passHref>
      <motion.a className={styles.logoLink} initial="initial" animate="final">
        <svg
          width="40"
          height="34"
          viewBox="0 0 40 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_20_727)">
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.5 21.2502H34.1669C35.3206 21.2501 36.4484 20.9079 37.4076 20.2669C38.3669 19.6259 39.1145 18.7148 39.556 17.6489C39.9974 16.583 40.1129 15.4101 39.8877 14.2785C39.6626 13.147 39.107 12.1076 38.2912 11.2918C37.4753 10.4761 36.4359 9.92053 35.3044 9.69549C34.1728 9.47044 32.9999 9.586 31.934 10.0275C30.8681 10.4691 29.9571 11.2168 29.3162 12.176C28.6752 13.1353 28.3331 14.2632 28.3331 15.4169C28.332 16.9636 27.7171 18.4466 26.6234 19.5404C25.5298 20.6341 24.0467 21.249 22.5 21.2502"
              fill="#009EFF"
              style={{ zIndex: -99 }}
              variants={leftMotion}
              transition={transition}
            />
            <motion.path
              d="M3.33323 19.9861C4.56659 20.8102 6.01664 21.25 7.5 21.25C10.4447 21.25 11.9555 21.25 13.7502 21.25L16.6105 18.3897C15.5739 17.0743 15.0014 15.4418 15 13.75C15 12.2667 14.5601 10.8166 13.736 9.58326C12.9119 8.34989 11.7406 7.38859 10.3701 6.82094C8.99968 6.25328 7.49168 6.10476 6.03683 6.39414C4.58197 6.68353 3.2456 7.39784 2.1967 8.44673C1.14781 9.49563 0.433503 10.832 0.144114 12.2869C-0.145275 13.7417 0.00324966 15.2497 0.570907 16.6202C1.13856 17.9906 2.09986 19.1619 3.33323 19.9861Z"
              fill="#2D00FF"
              style={{ zIndex: -99 }}
              variants={rightMotion}
              transition={transition}
            />
            <path
              d="M22.5002 0C16.6322 0 11.8752 4.75698 11.8752 10.625C11.8752 14.0368 13.4834 17.0731 15.983 19.0171L26.2501 8.75L20.1313 20.9849C20.226 21.0065 20.3212 21.0268 20.4169 21.0458L23.5419 23.8542L28.2576 19.5565C29.25 18.9154 30.1287 18.1135 30.8569 17.1875C32.2777 15.3807 33.1252 13.1018 33.1252 10.625C33.1252 4.75698 28.3683 0 22.5002 0Z"
              fill="#0053FF"
            />
            <path
              d="M13.75 33.75L29.4792 18.6458L20.3125 20.625L13.75 33.75Z"
              fill="#0053FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_20_727">
              <rect width="40" height="33.75" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {!removeZusText && <span>züs</span>}
      </motion.a>
    </Link>
  )
}

ZusLogo.propTypes = {
  removeZusText: propTypes.bool,
}

export default ZusLogo
