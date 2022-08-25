import PropTypes from 'prop-types'
import { Fade } from 'react-awesome-reveal'

import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'

const Table = ({ data, background }) => {
  return (
    <div className={styles.rootContainer} style={{ background }}>
      <div className={styles.textContent}>
        <Fade direction="up" delay={400} duration={600} cascade triggerOnce>
          <Heading text="Competitor Analysis" withoutPeriod Tag="h3" />
          <Paragraph left>
            Anyone can move their data over to Züs. Zero headaches. An abundance
            of storage features.
          </Paragraph>
        </Fade>
      </div>

      <div className={styles.tables}>
        {data.map(({ heading, text, dataSet }) => {
          return (
            <Fade
              direction="up"
              delay={600}
              duration={800}
              cascade
              triggerOnce
              key={heading}>
              <div className={styles.tableContainer}>
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
            </Fade>
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
