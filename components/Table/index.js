import PropTypes from 'prop-types'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'

const Table = ({ data, background }) => {
  return (
    <div className={styles.rootContainer} style={{ background }}>
      <div className={styles.textContent}>
        <Heading text="Competitor Analysis" withoutPeriod Tag="h3" />
        <Paragraph left>
          Anyone can move their data over to Züs. Zero headaches. An abundance
          of storage features.
        </Paragraph>
      </div>

      <div className={styles.tables}>
        {data.map(({ heading, text, dataSet }) => {
          return (
            <div className={styles.tableContainer} key={heading}>
              <h4>{heading}</h4>
              <Paragraph left>{text}</Paragraph>

              <table className={styles.table}>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Amazon</td>
                    <td>Vult</td>
                  </tr>

                  {dataSet.map(({ amazon, vult, id }) => {
                    return (
                      <tr key={id}>
                        <td className={styles.left}>Feature:</td>
                        <td>{amazon}</td>
                        <td>{vult}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Table.propTypes = {
  data: PropTypes.array,
  background: PropTypes.string,
}

export default Table
