import { separateMessage } from '../../../lib/common'
import styles from './LogItem.module.css'

export default function LogItem ( props ) {

  const time = props.time
  const msg = separateMessage( props.message )
  const type = props.type
  
  return (
    <tr>
      <td>{time}</td>
      {msg.length === 1 ? (
        <td>{msg[0]}</td>
        ) : (
          <td>{msg[0]} <span className={type == 'OK' ? styles.ok : styles.error}>{msg[1]}</span> {msg[2]}</td>
        )
      }
    </tr>
  )
}