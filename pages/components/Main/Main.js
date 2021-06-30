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
    addCmdHistory( 'close the profile...', 'OK' )
  }
  
  const closeBlog = () => { 
    setModeBlog(false)
    addCmdHistory( 'close the blog...', 'OK' )
  }
  
  const closeInformation = () => { 
    setModeInformation(false)
    addCmdHistory( 'close the information...', 'OK' )
  }
  
  const addCmdHistory = ( msg, type ) => {
    const logs = [...cmdHistory]
    if ( cmdHistory.length === _maxLogs ) {
      logs.splice( 0, 1 )
    }
    logs.push( {time: getCurrentDate(), message: msg, type: type} )
    setCmdHistory( logs )
    console.log( "history : " + type )
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
          addCmdHistory( '&!span-start!&show profile&!span-end!& is running...', 'OK' )
          break;
        case 'show blog':
          setModeProfile(false)
          setModeBlog(true)
          setModeInformation(false)
          addCmdHistory( '&!span-start!&show blog&!span-end!& is running...', 'OK' )
          break;
        case 'show info':
          setModeProfile(false)
          setModeBlog(false)
          setModeInformation(true)
          addCmdHistory( '&!span-start!&show info&!span-end!& is running...' , 'OK')
          break;
        case 'clear':
        case 'cls':
          clearCmdHistory()
          break;
        // case 'help':
        //   addCmdHistory(`'show profile' プロフィールを表示します。\n`, 'OK')
        //   addCmdHistory(`'show blog' ブログを表示します。(未実装...)`, 'OK')
        //   addCmdHistory(`'show info' 製作者の情報を表示します。`, 'OK')
        //   break
        default:
          if ( !(inCmd.replace(/\s+/g, '').length === 0) ) {
            addCmdHistory(`The command '&!span-start!&${inCmd}&!span-end!&' was not found...`, 'ERROR')
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
                <LogItem time={val['time']} message={val['message']} type={val['type']} key={idx} />
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
          <input type="input" className={styles.inputcmd} maxlength='20' placeholder='困ったときは HELP と入力してください。' onKeyDown={handleKeyDown} />
        </div>
      </div>
    </div>
  )

}

export default Main