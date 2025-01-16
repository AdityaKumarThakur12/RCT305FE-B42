import { useState } from 'react'
import { MiddlePage } from './components/middlePage'
import './App.css'

function App() {
  const [userName, setUserName] = useState('')
  return(
    <div style={{backgroundColor:"skyblue", padding:"30px"}}>
      <h1>Props Drilling</h1>
      <input 
        type='text'
        value={userName}
        placeholder='Enter Your Name'
        onChange={(e)=> setUserName(e.target.value)}
      />
      <MiddlePage userName={userName}/>
    </div>
  )
}

export default App
