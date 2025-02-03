import useCounter from "../useCounter"

export const Counter1 = ()=>{
    const [count, increment, decrement] = useCounter(10)

    return(
        <div style={{border:"2px solid blue"}}>
            <h1>Welcome to the Home section</h1>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}