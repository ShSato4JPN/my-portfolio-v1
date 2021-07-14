import Browser from '../Browser/Browser'
import styles from './Help.module.css'

export default function Help( props ) {
const title = 'Help'

  return (
    <div>
      <Browser title={title} closeAction={props.closeAction}>
        <h1>help</h1>
      </Browser>
    </div>
  )
}