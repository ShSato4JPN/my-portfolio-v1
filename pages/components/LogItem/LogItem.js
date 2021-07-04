import { separateMessage } from '../../../lib/common'
import styles from './LogItem.module.css'

export default function LogItem ( props ) {

  const time = props.time
  const msg = separateMessage( props.message )
  const type = props.type
  
  return (
    <tr className={styles.log}>
      <td>
        <div className={styles.time}>
          {time}
        </div>
      </td>
      <td>
        <div className={styles.message}>
          {msg.length === 1 ? (
              <a>{msg[0]}</a>
            ) : (
              <a>{msg[0]} <span className={type == 'OK' ? styles.ok : styles.error}>{msg[1]}</span> {msg[2]}</a>
            )
          }
        </div>
      </td>
    </tr>
  )
}