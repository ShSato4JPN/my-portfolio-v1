import React, { useState } from 'react'

function CompA () {
  return (
    <div>
      <h5>CompA</h5>
    </div>
  )
}

function CompB () {
  return (
    <div>
      <h5>CompB</h5>
    </div>
  )
}

function CompC () {
  return (
    <div>
      <h5>CompC</h5>
    </div>
  )
}

export default function App () {

  const [modeA, setModeA] = useState(false)
  const [modeB, setModeB] = useState(false)
  const [modeC, setModeC] = useState(false)
  const [none, setNone] = useState(false)

  const handleActionEvent = ( event ) => {
    console.log("action event")
    console.log("hello")
  } 

  const handleChangeEvent = ( event ) => {
    // console.log("change event")
    // console.log( event.target.value )
  }

  const handleKeyDownEvent = ( event ) => {
    console.log("keydown event")
    console.log( event.key )
    console.log( event.target.value )
    
    if ( event.key === 'Enter') {
      const inVal = event.target.value
      switch (inVal) {
        case 'compa':
          setModeA(true)
          setModeB(false)
          setModeC(false)
          setNone(false)
          break;
        case 'compb':
          setModeB(true) 
          setModeA(false)
          setModeC(false)
          setNone(false)
          break;
        case 'compc':
          setModeC(true)
          setModeA(false)
          setModeB(false)
          setNone(false)
          break;
        default:
          setNone(true)
          setModeA(false)
          setModeB(false)
          setModeC(false)
      }
    }
  }

  return (
    <div>
      {modeA ? <CompA /> : ''}
      {modeB ? <CompB /> : ''}
      {modeC ? <CompC /> : ''}
      {none ? <h2>None Command</h2> : ''}
      <input type='text' onChange={handleChangeEvent} onKeyDown={handleKeyDownEvent} />
      <input type='button' value='Click' onClick={handleActionEvent} />
    </div>
  )
}