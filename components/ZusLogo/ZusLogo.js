import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from './ZusLogo.module.scss'

const transition = {
  duration: 0.6,
  ease: 'linear',
  opacity: { duration: 0.3 },
  delay: 0.2,
}

const leftMotion = {
  initial: { rotate: -90, x: -8, y: -2, opacity: 0 },
  final: { rotate: 0, x: 0, y: 0, opacity: 1 },
}

const rightMotion = {
  initial: { rotate: 90, x: 8, y: -2, opacity: 0 },
  final: { rotate: 0, x: 0, y: 0, opacity: 1 },
}

const ZusLogo = () => {
  return (
    <Link href="/" passHref>
      <motion.a className={styles.logoLink} initial="initial" animate="final">
        <svg
          width="110"
          height="30"
          viewBox="0 0 110 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M55.9401 25.2874V22.3291L64.6987 11.4856V11.3575H56.2429V7.39745H70.6737V10.6237L62.4508 21.1993V21.3274H70.9765V25.2874H55.9401Z"
            fill="white"
          />
          <path
            d="M85.7787 17.6702V7.39745H90.7404V25.2874H85.9767V22.0379H85.7903C85.3866 23.0861 84.7149 23.9286 83.7754 24.5653C82.8436 25.202 81.7061 25.5204 80.3628 25.5204C79.167 25.5204 78.1149 25.2486 77.2064 24.7051C76.2979 24.1615 75.5875 23.389 75.075 22.3873C74.5703 21.3856 74.314 20.186 74.3063 18.7883V7.39745H79.2679V17.9032C79.2757 18.9592 79.5591 19.7939 80.1182 20.4073C80.6772 21.0207 81.4265 21.3274 82.3661 21.3274C82.964 21.3274 83.523 21.1915 84.0433 20.9198C84.5635 20.6402 84.9828 20.2287 85.3011 19.6852C85.6273 19.1416 85.7864 18.47 85.7787 17.6702ZM79.0001 4.95156C78.3323 4.95156 77.7577 4.71862 77.2763 4.25273C76.7949 3.77908 76.5542 3.22002 76.5542 2.57555C76.5542 1.91554 76.7949 1.35648 77.2763 0.898361C77.7577 0.440242 78.3323 0.211182 79.0001 0.211182C79.6756 0.211182 80.2463 0.440242 80.7122 0.898361C81.1858 1.35648 81.4227 1.91554 81.4227 2.57555C81.4227 3.22002 81.1858 3.77908 80.7122 4.25273C80.2463 4.71862 79.6756 4.95156 79.0001 4.95156ZM86.1281 4.95156C85.4603 4.95156 84.8857 4.71862 84.4043 4.25273C83.9229 3.77908 83.6822 3.22002 83.6822 2.57555C83.6822 1.91554 83.9229 1.35648 84.4043 0.898361C84.8857 0.440242 85.4603 0.211182 86.1281 0.211182C86.8036 0.211182 87.3743 0.440242 87.8402 0.898361C88.3139 1.35648 88.5507 1.91554 88.5507 2.57555C88.5507 3.22002 88.3139 3.77908 87.8402 4.25273C87.3743 4.71862 86.8036 4.95156 86.1281 4.95156Z"
            fill="white"
          />
          <path
            d="M109.13 12.4989L104.587 12.7784C104.51 12.3902 104.343 12.0408 104.087 11.7302C103.83 11.4118 103.493 11.1595 103.073 10.9731C102.662 10.779 102.169 10.6819 101.594 10.6819C100.825 10.6819 100.177 10.845 99.6491 11.1711C99.1211 11.4895 98.8571 11.9165 98.8571 12.4523C98.8571 12.8794 99.0279 13.2404 99.3696 13.5355C99.7112 13.8305 100.297 14.0674 101.128 14.246L104.366 14.8982C106.105 15.2554 107.402 15.83 108.256 16.622C109.11 17.414 109.538 18.4545 109.538 19.7434C109.538 20.9159 109.192 21.9447 108.501 22.8299C107.818 23.7151 106.878 24.4061 105.682 24.9031C104.494 25.3923 103.124 25.6368 101.571 25.6368C99.2026 25.6368 97.3158 25.1438 95.9104 24.1577C94.5127 23.1638 93.6935 21.8127 93.4528 20.1045L98.333 19.8482C98.4805 20.5703 98.8377 21.1216 99.4045 21.5021C99.9713 21.8748 100.697 22.0612 101.583 22.0612C102.452 22.0612 103.151 21.8942 103.679 21.5604C104.215 21.2187 104.487 20.78 104.494 20.2442C104.487 19.7939 104.296 19.425 103.924 19.1378C103.551 18.8427 102.976 18.6175 102.2 18.4622L99.1017 17.8449C97.3546 17.4955 96.054 16.8899 95.1999 16.028C94.3535 15.1661 93.9304 14.0674 93.9304 12.7318C93.9304 11.5827 94.241 10.5926 94.8621 9.76182C95.4911 8.93099 96.3724 8.2904 97.506 7.84004C98.6474 7.38969 99.983 7.16451 101.513 7.16451C103.772 7.16451 105.55 7.64204 106.847 8.59711C108.151 9.55217 108.912 10.8528 109.13 12.4989Z"
            fill="white"
          />
          <g clipPath="url(#clip0_501_2439)">
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.9473 24.701H40.5088C41.8498 24.7009 43.1608 24.3032 44.2758 23.558C45.3908 22.8129 46.2598 21.7539 46.773 20.5149C47.2861 19.2758 47.4203 17.9125 47.1587 16.5972C46.897 15.2819 46.2511 14.0737 45.3028 13.1255C44.3545 12.1772 43.1463 11.5315 41.831 11.2699C40.5157 11.0083 39.1523 11.1426 37.9133 11.6559C36.6743 12.1691 35.6154 13.0382 34.8703 14.1533C34.1253 15.2684 33.7276 16.5793 33.7277 17.9204C33.7264 19.7183 33.0116 21.4422 31.7403 22.7135C30.469 23.9848 28.7452 24.6997 26.9473 24.701Z"
              fill="#009EFF"
              style={{ zIndex: -99 }}
              variants={leftMotion}
              transition={transition}
            />
            <motion.path
              d="M4.66798 23.2316C6.10163 24.1895 7.78716 24.7008 9.51141 24.7008C12.9343 24.7008 14.6905 24.7008 16.7766 24.7008L20.1014 21.376C18.8964 19.8469 18.231 17.9493 18.2294 15.9828C18.2294 14.2586 17.7181 12.5731 16.7601 11.1394C15.8022 9.70575 14.4406 8.58835 12.8476 7.92851C11.2546 7.26867 9.50174 7.09603 7.81062 7.43241C6.1195 7.76879 4.56612 8.5991 3.34689 9.81833C2.12766 11.0376 1.29736 12.5909 0.960974 14.2821C0.62459 15.9732 0.797234 17.7261 1.45708 19.3191C2.11692 20.9121 3.23432 22.2736 4.66798 23.2316Z"
              fill="#2D00FF"
              style={{ zIndex: -99 }}
              variants={rightMotion}
              transition={transition}
            />
            <path
              d="M26.9477 0C20.1268 0 14.5973 5.52948 14.5973 12.3504C14.5973 16.3163 16.4666 19.8456 19.3722 22.1053L31.3066 10.1709L24.1941 24.3928C24.3042 24.4178 24.4149 24.4414 24.5261 24.4635L28.1585 27.7279L33.64 22.7323C34.7936 21.9872 35.815 21.055 36.6614 19.9786C38.313 17.8785 39.2981 15.2295 39.2981 12.3504C39.2981 5.52948 33.7687 0 26.9477 0Z"
              fill="#0053FF"
            />
            <path
              d="M16.7764 39.2308L35.0598 21.6738L24.4046 23.9744L16.7764 39.2308Z"
              fill="#0053FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_501_2439">
              <rect
                width="46.4957"
                height="39.2308"
                fill="white"
                transform="translate(0.793457)"
              />
            </clipPath>
          </defs>
        </svg>
      </motion.a>
    </Link>
  )
}

export default ZusLogo
