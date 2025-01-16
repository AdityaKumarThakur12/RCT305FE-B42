import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 const [isvisible, setIsVisible] = useState(false)
  useEffect(()=>{
    if(isvisible){
      console.log("Component Mounted")
    }
    return ()=>{
      console.log("Component Unmounted")
    }
  },[isvisible]);
  function toogleButton(){
    setIsVisible(!isvisible)
  }

  return(
    <div>
      <button onClick={toogleButton} style={{padding:"10px 15px", backgroundColor:"red", color:"white", cursor:"pointer"}}>
        {isvisible ? "Hide Component" : "Show Component"}
      </button>
      {isvisible && <div><h1>Component is Mounted and Unmounted Repeatedly</h1></div>}
    </div>
  )
}

export default App
