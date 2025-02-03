import { useRef } from "react"
import { useState } from "react"

export const useTimer = ()=>{
    const [time, setTime] = useState(0)
    const intervalRef = useRef()
    function startTimer(){
        intervalRef.current=setInterval(()=>{
            setTime((prev)=> prev+1)
        },1000)
    }
    function stopTimer(){
        clearInterval(intervalRef.current)
    }
    function resetTimer(){
        setTime(0);
        clearInterval(intervalRef.current)
    }
    return [time, startTimer, stopTimer, resetTimer]
}