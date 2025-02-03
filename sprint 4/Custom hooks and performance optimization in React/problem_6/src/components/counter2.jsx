import useCounter from "../useCounter"

export const Counter2 = ()=>{
    const [count, increment, decrement] = useCounter(0)

    return(
        <div style={{border:"2px solid red"}}>
            <h1>Welcome to About Section</h1>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}