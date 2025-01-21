import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../redux/action'

export const Counter = ()=>{
    let count = useSelector((state) => state.count);
    let dispatch = useDispatch()
    return(
        <div>
            <button onClick={(e) => dispatch(increment())}>Increment</button>
            <h1>{count}</h1>
            <button onClick={(e) => dispatch(decrement())}>Decrement</button>
        </div>
    )
}