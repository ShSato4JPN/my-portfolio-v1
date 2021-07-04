import React, { useEffect, useState } from 'react'
import Browser from '../Browser/Browser'
import LogItem from '../LogItem/LogItem'
import styles from './Main.module.css'
import { getCurrentDate } from '../../../lib/common'

const _maxLogs = 100
const _browsers = {
  profile: {
    title: 'profile',
    runningMessage: '&!span-start!&show profile&!span-end!& is running...',
    closeMessage: 'close the profile...'
  },
  blog: {
    title: 'blog',
    runningMessage: '&!span-start!&show blog&!span-end!& is running...',
    closeMessage: 'close the blog...'
  },
  info: {
    title: 'blog',
    runningMessage: '&!span-start!&show info&!span-end!& is running...',
    closeMessage: 'close the info...'
  },
  help: {
    title: 'help',
    runningMessage: '&!span-start!&show help&!span-end!& is running...',
    closeMessage: 'close the help...'
  },
}

function Main () {
     // フック
  const [modeProfile, setModeProfile] = useState(false)
  const [modeBlog, setModeBlog] = useState(false)
  const [modeInformation, setModeInformation] = useState(false)
  const [modeHelp, setModeHelp] = useState(false)
  const [cmdHistory, setCmdHistory] = useState([])
  const [hooksMap, setHooksMap] = useState([])

  useEffect( () => {
    let hooks = []
    hooks.push( {target: 'profile', func: setModeProfile} )
    hooks.push( {target: 'blog', func: setModeBlog} )
    hooks.push( {target: 'info', func: setModeInformation} )
    hooks.push( {target: 'help', func: setModeHelp} )
    setHooksMap( hooks )
  }, [])

  // wrapper系ファンクション
  const openBrowser = ( broName ) => {
    console.log( hooksMap )
    hooksMap.map( ( r ) => {
      if ( r['target'] == broName ) {
        r['func'](true)
      } else {
        r['func'](false)
      }
    })
  }

  const closeProfile = () => { 
    setModeProfile(false)
    addCmdHistory( _browsers.profile.closeMessage, 'OK' )
  }
  
  const closeBlog = () => { 
    setModeBlog(false)
    addCmdHistory( _browsers.blog.closeMessage, 'OK' )
  }
  
  const closeInformation = () => { 
    setModeInformation(false)
    addCmdHistory( _browsers.info.closeMessage, 'OK' )
  }

  const closeHelp = () => { 
    setModeHelp(false)
    addCmdHistory( _browsers.help.closeMessage, 'OK' )
  }
  
  const addCmdHistory = ( msg, type ) => {
    const logs = [...cmdHistory]
    if ( cmdHistory.length === _maxLogs ) {
      logs.splice( 0, 1 )
    }
    logs.push( {time: getCurrentDate(), message: msg, type: type} )
    setCmdHistory( logs )
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
          console.log( 'hello' )
          openBrowser( _browsers.profile.title )
          addCmdHistory( _browsers.profile.runningMessage, 'OK' )
          break;
        case 'show blog':
          openBrowser( _browsers.blog.title )
          addCmdHistory( _browsers.blog.runningMessage, 'OK' )
          break;
        case 'show info':
          openBrowser( _browsers.info.title )
          addCmdHistory( _browsers.info.runningMessage, 'OK')
          break;
        case 'show help':
            openBrowser( _browsers.help.title )
            addCmdHistory( _browsers.help.runningMessage, 'OK')
            break
        case 'clear':
        case 'cls':
          clearCmdHistory()
          break;
        default:
          if ( !(inCmd.replace(/\s+/g, '').length === 0) ) {
            addCmdHistory(`The command '&!span-start!&${inCmd}&!span-end!&' was not found...`, 'ERROR')
          }
          break;
      }

      event.target.value = ''
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
          {modeProfile ? <Browser title={ 'PROFILE' } closeAction={ closeProfile } /> : ''}
          {modeBlog ? <Browser title={ 'BLOG' } closeAction={ closeBlog } /> : ''}
          {modeInformation ? <Browser title={ 'INFORMATION' } closeAction={ closeInformation } /> : ''}
          {modeHelp ? <Browser title={ 'HELP' } closeAction={ closeHelp } /> : ''}
        </div>
        <div className={styles.inputform}>
          <input type="input" className={styles.inputcmd} maxLength='20' placeholder='困ったときは HELP と入力してください。' onKeyDown={handleKeyDown} />
        </div>
      </div>
    </div>
  )

}

export default Main