import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const inputRef = useRef(null);

 function handleSubmit(){
  if(inputRef.current){
    inputRef.current.focus();
  }
 }
 return(
  <div>
    <input type='text' ref={inputRef} placeholder='Enter text'/>
    <button onClick={handleSubmit}>Focus Button</button>
  </div>

 )
}

export default App
