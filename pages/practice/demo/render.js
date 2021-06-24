import Render1 from './render_test'
import Render2 from './render_test2'

import { useState } from 'react'
import { useEffect } from 'react'

export default function Render () {

  const [value, setValue] = useState('SUPER')

  useEffect( () => {
    console.log('0000000:' + value)
  })

  const handleChange = ( event ) => {
    setValue( event.target.value )
  }

  return (
    <div>
      <Render1 />
      <Render2 />
      <input type='input' placeholder='super' onChange={handleChange} />
    </div>
  )
}