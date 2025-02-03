import { useTimer } from './useTimer'
import './App.css'

function App() {
  const [time,startTimer, stopTimer, resetTimer] = useTimer()

  return (
    <div>
      <h1>{time}</h1>
      <button style={{backgroundColor:"teal"}} onClick={startTimer}>startTimer</button>
      <button style={{backgroundColor:"teal", margin:"20px"}} onClick={stopTimer}>stopTimer</button>
      <button style={{backgroundColor:"blue"}} onClick={resetTimer}>resetTimer</button>
    </div>
  )
}

export default App
