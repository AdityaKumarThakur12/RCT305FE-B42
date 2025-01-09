function App(){
    const [count, setCount] = React.useState(0);
    const [step, setStep] = React.useState(1);
    const Increment = ()=>{
        setCount(count + step)
    }
    const Decrement = ()=>{
        if(count-step>=0){
            setCount(count- step)
        }
        
    }
    const steps = (e)=>{
        const value = parseInt(e.target.value);
        if(!isNaN(value)){
            setStep(value)
        }
    }
    return(
        <div>
            <input type="number" value={step} onChange={steps} placeholder="Enter the number of steps"/>
            <p>Current Count: {count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
        
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)