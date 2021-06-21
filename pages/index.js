import layout from '../styles/Home.module.css'

const handleKeyDown = event => {
  console.log( event.target.keyCode )
}

export default function Home() {
  let history = []
  return (
    <div className={layout.container}>
      <div className={layout.console}>
      </div>
      <div className={layout.input_form}>
        <input 
          type="text"
          className={layout.input_in}
          onChange={handleKeyDown}
          placeholder="Enter Command"
        />
      </div >
    </div>
  )
}
