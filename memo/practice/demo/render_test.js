import { useState, useEffect } from 'react'

function render_test () {
  
  const [value, setValue] = useState('')
  
  useEffect( () => {
    console.log('1111111:' + value)
  }, [value])

  const handleChange = ( event ) => {
    setValue( event.target.value )
  }

  return (
    <div>
      <input type='input' placeholder='render1' onChange={handleChange} />
      <p>{value}</p>
    </div>
  )
}

export default render_test