import PropTypes from 'prop-types'

import IconContainer from 'components/IconContainer'

import { toLowerCaseRemoveSpaces } from 'util/globalFunctions'

import styles from './index.module.scss'

const data = [
  {
    icon: '/images/block-rewards/BlobberInfo/leaf.svg',
    title: 'Goodness Factor',
    formula1: 'Free Egress Multiplier',
    formula2: 'Fair Usage Multiplier',
    backgroundColor: '#2FCBA1',
  },
  {
    icon: '/images/block-rewards/BlobberInfo/puzzle.svg',
    title: 'Adjusted Stake',
    formula1: 'ZCN Delegated',
    formula2: 'Successful Challenges',
    backgroundColor: ' #fe7a00',
  },
]

const Formula = ({ formula }) => {
  return (
    <div className={styles.formula}>
      <h5>{formula}</h5>
      <a
        href={`#${toLowerCaseRemoveSpaces(formula)}`}
        className={styles.infoBtn}>
        <IconContainer
          img="/images/block-rewards/BlobberInfo/infoIcon.svg"
          alt="More info"
          height={16}
          width={16}
        />
      </a>
    </div>
  )
}

const BlobberInfoImg = () => {
  return data.map(({ icon, title, formula1, formula2, backgroundColor }) => {
    return (
      <div className={styles.container} key={title}>
        <div className={styles.icon}>
          <div className={styles.ellipse} style={{ backgroundColor }} />
          <IconContainer img={icon} height={64} width={64} alt="leaf" />
        </div>
        <h4>{title}</h4>
        <div className={styles.formulaContainer}>
          <Formula formula={formula1} />
          <Formula formula={formula2} />
        </div>
      </div>
    )
  })
}

Formula.propTypes = {
  formula: PropTypes.string.isRequired,
}

export default BlobberInfoImg
