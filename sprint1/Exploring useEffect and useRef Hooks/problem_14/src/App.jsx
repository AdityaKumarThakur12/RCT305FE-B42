import { useRef } from 'react'
import './App.css'

function App() {
  const otpRef = useRef(new Array(4).fill())

  function handleChange(e, index){
    if(isNaN(e.target.value)){
      return false;
    }
    otpRef.current[index] = e.target.value;

    if(e.target.value && e.target.nextSibling){
      e.target.nextSibling.focus()
    }
  }

  return (
    <div className='otp-area'>
      <h1>Enter the OTP:</h1>
      <div className='otp'>
      {
        otpRef.current.map((data,i)=>{
          return <input style={{width: '40px', height: '40px', fontSize: '20px', textAlign: 'center' }} key={i} type='text' value={data} onChange={(e)=> handleChange(e, i)} maxLength={1}/>
        })
      }
    </div>
    <button onClick={()=>alert(otpRef.current.join(' '))}>Submit</button>
    </div>
  )
}

export default App
