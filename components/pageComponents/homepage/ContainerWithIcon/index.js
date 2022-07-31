import Image from 'next/image'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './index.module.scss'

const ContainerWithIcon = ({
  children,
  logo,
  alt,
  height,
  width,
  vultContainer = false,
  blimpContainer = false,
}) => {
  return (
    <section className={styles.rootWrapper}>
      <div
        className={clsx(
          styles.containerWithIcon,
          vultContainer && styles.vultContainer,
          blimpContainer && styles.blimpContainer
        )}>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt={alt}
            layout="fixed"
            width={width}
            height={height}
          />
        </div>
        {children}
      </div>
    </section>
  )
}

ContainerWithIcon.propTypes = {
  children: PropTypes.node.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  vultContainer: PropTypes.bool,
  blimpContainer: PropTypes.bool,
}

export default ContainerWithIcon
