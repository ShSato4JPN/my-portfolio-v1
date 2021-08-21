import React, { useEffect, useState } from 'react'
import Browser from '../Browser/Browser'
import Profile from '../Profile/Profile'
import Help from '../Help/Help'
import LogItem from '../LogItem/LogItem'
import styles from './Main.module.css'
import Image from 'next/image'
import { getCurrentDate } from '../../../lib/common'

const _settings = {
  maxLogs: 100,
  OK: 'ok',
  ERROR: 'error',
  ENTER: 'Enter',
  MAIL: 'MAIL : &!span-start!&hokazono.satoshi.1221@gmail.com&!span-end!&',
  GITHUB: 'GITHUB : &!span-start!&https://github.com/ShSato4JPN&!span-end!&',
  INFOMSG: 'Display information...'
}

const _browsers = {
  profile: {
    title: 'profile',
    runningMessage: '&!span-start!&profile&!span-end!& is running...',
    closeMessage: 'close the profile...'
  },
  blog: {
    title: 'blog',
    runningMessage: '&!span-start!&blog&!span-end!& is running...',
    closeMessage: 'close the blog...'
  },
  info: {
    title: 'blog',
    runningMessage: '&!span-start!&info&!span-end!& is running...',
    closeMessage: 'close the info...'
  },
  help: {
    title: 'help',
    runningMessage: '&!span-start!&help&!span-end!& is running...',
    closeMessage: 'close the help...'
  }
}

function Main () {
  const [modeProfile, setModeProfile] = useState(false)
  const [modeBlog, setModeBlog] = useState(false)
  const [modeInformation, setModeInformation] = useState(false)
  const [modeHelp, setModeHelp] = useState(true)
  const [cmdHistory, setCmdHistory] = useState([])
  const [hooksMap, setHooksMap] = useState([])

  /**
   * 副作用フックをコンストラクタとして使用します。※初回マウント時のみ処理を実施します。
   */
  useEffect( () => {
    let hooks = []
    hooks.push( {target: 'profile', func: setModeProfile} )
    hooks.push( {target: 'blog', func: setModeBlog} )
    hooks.push( {target: 'info', func: setModeInformation} )
    hooks.push( {target: 'help', func: setModeHelp} )
    setHooksMap( hooks )
  }, [])

  /**
   * 起動画面の state を true に変更し、それ以外の state を false に変更します。
   * @param {String} broName - 起動する画面(ブラウザ)名を指定します。 
   */
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

  /**
   * 画面のクローズ処理を行うファンクションです。呼出し先で使用します。
   */
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
  
  /**
   * コマンド履歴に出力する情報を設定します。
   * @param {String} msg - ログに表示するメッセージを設定します。
   * @param {String} type - ログの種別を設定します。(OK or ERROR) TODO enum にする予定
   */
  const addCmdHistory = ( msg, type ) => {
    const logs = [...cmdHistory]

    let msgs = msg.split( ',' );
    msgs.map( (m) => {
      if ( logs.length === _settings.maxLogs ) {
        logs.splice( 0, 1 )
      }
      logs.push( {time: getCurrentDate(), message: m, type: type} )
    })
    setCmdHistory( logs )
  }

  /**
   * コマンド履歴の内容をクリアします。
   */
  const clearCmdHistory = () => {
    setCmdHistory([])
  } 
  
  /**
   * KeyDownEvent のハンドリング処理を行います。
   */
  const handleKeyDown = ( event ) => {
    let inCmd = event.target.value.toString()
    if ( event.key === _settings.ENTER ) {
      switch ( inCmd.toLowerCase() ) {
        case 'show profile':
        case 'profile':
          openBrowser( _browsers.profile.title )
          addCmdHistory( _browsers.profile.runningMessage, _settings.OK )
          break;
        case 'show blog':
          openBrowser( _browsers.blog.title )
          addCmdHistory( _browsers.blog.runningMessage, _settings.OK )
          break;
        case 'show info':
        case 'info':
          const info = `${_settings.INFOMSG},${_settings.GITHUB},${_settings.MAIL}`
          addCmdHistory( info, _settings.OK )
          break;
        case 'show mail':
        case 'mail':
          //openBrowser( _browsers.info.title )
          addCmdHistory( _settings.MAIL, _settings.OK )
          break;
        case 'show github':
        case 'github':
          //openBrowser( _browsers.info.title )
          addCmdHistory( _settings.GITHUB, _settings.OK )
          break;
        case 'show help':
        case 'help':
          openBrowser( _browsers.help.title )
          addCmdHistory( _browsers.help.runningMessage, _settings.OK )
          break
        case 'clear':
        case 'cls':
          clearCmdHistory()
          break;
        default:
          if ( !(inCmd.replace(/\s+/g, '').length === 0) ) {
            addCmdHistory( `The command '&!span-start!&${inCmd}&!span-end!&' was not found...`, _settings.ERROR)
          }
          break;
      }

      event.target.value = ''
    }
  }

  return (
    <div>
      <div className={ styles.main } >
        <div className={styles.titlelogo}>
          <Image priority
                 src='/static/title_logo.png'
                 height={120}
                 width={650}
                 alt='title logo'
          />
        </div>
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
          {modeBlog ? <Browser title={ 'BLOG' } closeAction={ closeBlog } /> : ''}
          {modeInformation ? <Browser title={ 'INFORMATION' } closeAction={ closeInformation } /> : ''}
          {modeHelp ? <Help title={ 'HELP' } closeAction={ closeHelp } /> : ''}
        </div>
        <div className={styles.inputform}>
          <input type="input" className={styles.inputcmd} maxLength='20' placeholder='困ったときは HELP と入力してください。' onKeyDown={handleKeyDown} />
        </div>
      </div>
    </div>
  )
}

export default Main