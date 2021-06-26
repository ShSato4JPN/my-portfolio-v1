import { useState, useEffect } from 'react'

function render_test2 () {
  
  const [value2, setValue] = useState('')
  
  useEffect( () => {
    console.log('2222222:' + value2)
  }, [value2])

  const handleChange = ( event ) => {
    setValue( event.target.value )
  }

  return (
    <div>
      <input type='input' placeholder='render2' onChange={handleChange} />
      <p>{value2}</p>
    </div>
  )
}

export default render_test2