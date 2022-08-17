import Image from 'next/image'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Fade } from 'react-awesome-reveal'

import styles from './index.module.scss'

const ContainerWithIcon = ({
  children,
  logo,
  alt,
  height,
  width,
  vultContainer = false,
  blimpContainer = false,
  style,
}) => {
  return (
    <section className={styles.rootWrapper} style={style}>
      <div
        className={clsx(
          styles.containerWithIcon,
          vultContainer && styles.vultContainer,
          blimpContainer && styles.blimpContainer
        )}>
        {logo && (
          <div className={styles.logo}>
            <Fade triggerOnce duration={1000}>
              <Image
                src={logo}
                alt={alt}
                layout="fixed"
                width={width}
                height={height}
              />
            </Fade>
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
  style: PropTypes.object,
  vultContainer: PropTypes.bool,
  blimpContainer: PropTypes.bool,
}

export default ContainerWithIcon
