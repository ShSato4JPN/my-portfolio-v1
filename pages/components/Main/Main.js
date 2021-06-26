import { useState } from 'react'
import Profile from '../Browser/Browser'
import styles from './Main.module.css'

function Main () {

  // フック
  const [modeProfile, setModeProfile] = useState(false)
  const [modeBlog, setModeBlog] = useState(false)
  const [modeInformation, setModeInformation] = useState(false)

  // 各画面を閉じるファンクション(フック関係)
  const closeProfile = () => { setModeProfile(false) }
  const closeBlog = () => { setModeBlog(false) }
  const closeInformation = () => { setModeInformation(false) }
  
  // イベントハンドラー
  const handleKeyDown = ( event ) => {
    let inCmd = event.target.value.toString()
    
    if ( event.key === 'Enter' ) {
      switch ( inCmd.toLowerCase() ) {
        case 'show profile':
          setModeProfile(true)
          setModeBlog(false)
          setModeInformation(false)
          //addHistory('show profile is running...')
          break;
        case 'show blog':
          setModeProfile(false)
          setModeBlog(true)
          setModeInformation(false)
          //addHistory('show blog is running...')
          break;
        case 'show info':
          setModeProfile(false)
          setModeBlog(false)
          setModeInformation(true)
          //addHistory('show info is running...')
          break;
        default:
          //addHistory('No such command exists...')
          break;
      }
    }
  }

  return (
    <div>
      <div className={styles.consoleform}>
      </div>
      <div className={ styles.browsers } >
          {modeProfile ? <Profile title={ 'PROFILE' } closeAction={ closeProfile } /> : ''}
          {modeBlog ? <Profile title={ 'BLOG' } closeAction={ closeBlog } /> : ''}
          {modeInformation ? <Profile title={ 'INFORMATION' } closeAction={ closeInformation } /> : ''}
      </div>
      <div className={styles.inputform}>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
    </div>
  )

}

export default Main