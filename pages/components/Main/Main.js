import { style } from '@material-ui/system'
import { useState, useEffect } from 'react'
import Profile from '../Browser/Browser'
import styles from './Main.module.css'

function Main () {
  const [modeProfile, setModeProfile] = useState(false)
  const [modeBlog, setModeBlog] = useState(false)
  const [modeInformation, setModeInformation] = useState(false)

  useEffect( () => {
    if (modeProfile) {
      setModeBlog(false)
    }
  })

  // State Functions Wrappers
  const closeProfile = () => {
    setModeProfile(false)
  }

  const closeBlog = () => {
    setModeBlog(false)
  }

  const closeInformation = () => {
    setModeInformation(false)
  }

  // Key Event Handlers
  const handleKeyDown = ( event ) => {
    let inCmd = event.target.value.toString()
    
    if ( event.key === 'Enter' ) {
      switch ( inCmd.toLowerCase() ) {
        case 'show profile':
          setModeProfile(true)
          setModeBlog(false)
          setModeInformation(false)
          break;
        case 'show blog':
          setModeProfile(false)
          setModeBlog(true)
          setModeInformation(false)
          break;
        case 'show information':
          setModeProfile(false)
          setModeBlog(false)
          setModeInformation(true)
          break;
        default:
          break;
      }
    }
  }

  return (
    <div>
      <div className={ styles.browsers } >
        {modeProfile ? <Profile title={ 'PROFILE' } closeAction={ closeProfile } /> : ''}
        {modeBlog ? <Profile title={ 'BLOG' } closeAction={ closeBlog } /> : ''}
        {modeInformation ? <Profile title={ 'INFORMATION' } closeAction={ closeInformation } /> : ''}
      </div>
      <input type="text"
             onKeyDown={handleKeyDown}       
      />
    </div>
  )

}

export default Main