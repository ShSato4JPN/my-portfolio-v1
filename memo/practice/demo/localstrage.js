import { useState } from "react"

function usePersis (k, initVal) {

  const [savedValue, setSavedValue] = useState( value )

  const key = 'hooks:' + k
  const value = () => {
    const item = window.localStorage.getItem(key)
    return item ? item : initVal
  }
  const setValue = ( val ) => {
    setSavedValue( val )
    window.localStorage.setItem( key, val )
  }
}

export default function localstrage () {

  const [key, setKey] = useState('')
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')

  const saveLocalStrage = (key, value) => {
    window.localStorage.setItem(key, value)
  }

  const getLocalStrage = (key) => {
    return window.localStorage.getItem(key)
  }

  const handleChangeKey = ( event ) => {
    setKey( event.target.value )
  }

  const handleChangeValue = ( event ) => {
    setValue( event.target.value )
  }

  const handleClickRegist = () => {
    saveLocalStrage( key, value )
  }

  const handleClickGet = () => {
    setResult( getLocalStrage( key ) )
  }

  return (
    <div>
      <input type='input' placeholder='KEY' onChange={handleChangeKey} />
      <input type='input' placeholder='VALUE' onChange={handleChangeValue} />
      <input type='button' value='regist' onClick={handleClickRegist} />
      <input type='button' value='get' onClick={handleClickGet} />
      <h1>{result}</h1>
    </div>
  )
}