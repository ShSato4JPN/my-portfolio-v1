import { separateMessage } from '../../../lib/common'

export default function LogItem ( props ) {

  const time = props.time
  const msg = separateMessage( props.message )

  return (
    <tr>
      <td>{time}</td>
      {msg.length === 1 ? (
        <td>{msg[0]}</td>
        ) : (
          <td>{msg[0]} <span>{msg[1]}</span> {msg[2]}</td>
        )
      }
    </tr>
  )
}