// Hooksの練習
import React, { useState } from 'react'

function AlertMessage ( props ) {
  const data = props.data
  const msg = JSON.stringify(data)

  return (
    <div>
      <h5>{msg}</h5>
      <hr />
      <table>
        <tbody>
          <tr><th>Name</th><td>{data.name}</td></tr>
          <tr><th>Mail</th><td>{data.mail}</td></tr>
          <tr><th>Age</th><td>{data.age}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

function App() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [age, setAge] = useState(0)
  const [form, setForm] = useState({
    name:'no name', mail:'no mail', age:0
  })

  const doChangeName = ( event ) => {
    setName( event.target.value )
  }

  const doChangeMail = ( event ) => {
    setMail( event.target.value )
  }

  const doChangeAge = ( event ) => {
    setAge( event.target.value )
  }

  const doSubmit = ( event ) => {
    setForm( { name:name, mail:mail, age:age })
    // eventをキャンセルする
    event.preventDefault()
  }

  return ( 
    <div>
      <h1>React</h1>
      <div>
        <h4>Hooks Sample</h4>
        <AlertMessage data={form} />
        <form onSubmit={doSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" onChange={doChangeName} />
          </div>
          <div>
            <label>Mail:</label>
            <input type="text" onChange={doChangeMail} />
          </div>
          <div>
            <label>Age:</label>
            <input type="text" onChange={doChangeAge} />
          </div>
          <input type="submit" value="Click" />
        </form>
      </div>
    </div>
  )
}

export default App