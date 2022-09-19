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
  className,
}) => {
  return (
    <section className={clsx(styles.rootWrapper, className)}>
      <div
        className={clsx(
          styles.containerWithIcon,
          vultContainer && styles.vultContainer,
          blimpContainer && styles.blimpContainer
        )}>
        {logo && (
          <div className={styles.logo}>
            <Image
              src={logo}
              alt={alt}
              layout="fixed"
              width={width}
              height={height}
            />
          </div>
        )}
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
  className: PropTypes.string,
  vultContainer: PropTypes.bool,
  blimpContainer: PropTypes.bool,
}

export default ContainerWithIcon
