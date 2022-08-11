import Paragraph from 'components/Paragraph'

import styles from './index.module.scss'

const Table = ({ data }) => {
  return data.map(({ heading, text, dataSet }) => {
    return (
      <div className={styles.rootContainer} key={heading}>
        <h4>{heading}</h4>
        <Paragraph>{text}</Paragraph>

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
  })
}

export default Table
