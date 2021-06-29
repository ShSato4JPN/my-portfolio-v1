import { useState } from 'react'
import Profile from '../Browser/Browser'
import LogItem from '../LogItem/LogItem'
import styles from './Main.module.css'
import { getCurrentDate } from '../../../lib/common'

const _maxLogs = 100

function Main () {

  // フック
  const [modeProfile, setModeProfile] = useState(false)
  const [modeBlog, setModeBlog] = useState(false)
  const [modeInformation, setModeInformation] = useState(false)
  const [cmdHistory, setCmdHistory] = useState([])

  // wrapper系ファンクション
  const closeProfile = () => { 
    setModeProfile(false)
    addCmdHistory( 'close the profile...' )
  }
  
  const closeBlog = () => { 
    setModeBlog(false)
    addCmdHistory( 'close the blog...' )
  }
  
  const closeInformation = () => { 
    setModeInformation(false)
    addCmdHistory( 'close the information...' )
  }
  
  const addCmdHistory = ( msg ) => {
    const logs = [...cmdHistory]
    if ( cmdHistory.length === _maxLogs ) {
      logs.splice( 0, 1 )
    }
    logs.push( {time: getCurrentDate(), message: msg} )
    setCmdHistory( logs )
    console.log( "history : " + cmdHistory )
  }

  const clearCmdHistory = () => {
    setCmdHistory([])
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
          addCmdHistory('show profile is running...')
          break;
        case 'show blog':
          setModeProfile(false)
          setModeBlog(true)
          setModeInformation(false)
          addCmdHistory('show blog is running...')
          break;
        case 'show info':
        case 'show information':
          setModeProfile(false)
          setModeBlog(false)
          setModeInformation(true)
          addCmdHistory('show info is running...')
          break;
        case 'clear':
        case 'cls':
          clearCmdHistory()
          break;
        default:
          if ( !(inCmd.replace(/\s+/g, '').length === 0) ) {
            addCmdHistory(`The command '&!span-start!&${inCmd}&!span-end!&' was not found...`)
          }
          break;
      }
    }
  }

  return (
    <div>
      <div className={ styles.main } >
        <div className={styles.consoleform}>
          <table>
            <tbody>
              {cmdHistory.map( ( val, idx ) => (
                <LogItem time={val['time']} message={val['message']} key={idx} />
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.browser}>
          {modeProfile ? <Profile title={ 'PROFILE' } closeAction={ closeProfile } /> : ''}
          {modeBlog ? <Profile title={ 'BLOG' } closeAction={ closeBlog } /> : ''}
          {modeInformation ? <Profile title={ 'INFORMATION' } closeAction={ closeInformation } /> : ''}
        </div>
        <div className={styles.inputform}>
          <input type="input" className={styles.inputcmd} onKeyDown={handleKeyDown} />
        </div>
      </div>
    </div>
  )

}

export default Main