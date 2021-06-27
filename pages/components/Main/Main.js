import { useState } from 'react'
import Profile from '../Browser/Browser'
import styles from './Main.module.css'

const _maxLogs = 10

function Main () {

  // フック
  const [modeProfile, setModeProfile] = useState(false)
  const [modeBlog, setModeBlog] = useState(false)
  const [modeInformation, setModeInformation] = useState(false)
  const [cmdHistory, setCmdHistory] = useState([])

  // wrapper系ファンクション
  const closeProfile = () => { 
    setModeProfile(false)
    addCmdHistory( 'Close the Profile...' )
  }
  
  const closeBlog = () => { 
    setModeBlog(false)
    addCmdHistory( 'Close the Blog...' )
  }
  
  const closeInformation = () => { 
    setModeInformation(false)
    addCmdHistory( 'Close the Information...' )
  }
  
  const addCmdHistory = ( cmd ) => {
    const logs = [...cmdHistory]
    if ( cmdHistory.length === _maxLogs ) {
      logs.splice( 0, 1 )
    }
    logs.push( cmd )
    setCmdHistory( logs )
    //console.log( "history : " + cmdHistory )
  }
  
  // イベントハンドラー
  const handleKeyDown = ( event ) => {
    let inCmd = event.target.value.toString()
    if ( event.key === 'Enter' ) {
      switch ( inCmd.toLowerCase() ) {
        case 'show profile':
          setModeProfile(true)
          setModeBlog(false)
          setModeInformation(false)
          // コマンドログの出力
          addCmdHistory('show profile is running...')
          break;
        case 'show blog':
          setModeProfile(false)
          setModeBlog(true)
          setModeInformation(false)
          // コマンドログの出力
          addCmdHistory('show blog is running...')
          break;
        case 'show info':
          setModeProfile(false)
          setModeBlog(false)
          setModeInformation(true)
          // コマンドログの出力
          addCmdHistory('show info is running...')
          break;
        default:
          if ( !(inCmd.replace(/\s+/g, '').length === 0) ) {
            addCmdHistory(`The command '${inCmd}' was not found...`)
          }
          break;
      }
    }
  }

  return (
    <div>
      <div className={styles.consoleform}>
        {cmdHistory.map( ( val, idx ) => (
          <p key={idx}>{val}</p>
        ))
        }
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