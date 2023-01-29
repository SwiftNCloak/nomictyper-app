import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  let onchange = (event) => {
    const newVal = event.target.value;
    setMessage(newVal)
  }

  return (
    <div className="App">
      <div className="bubble">
        {message}
      </div>
      <input type="text" className="textInput" placeholder='Put your text' onChange={onchange} spellCheck="false" />
    </div>
  )
}

export default App
