import { useState } from 'react'
import './App.css'
import Pokeman from '../components/pokeman'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pokeman/>
     
    </>
  )
}

export default App
