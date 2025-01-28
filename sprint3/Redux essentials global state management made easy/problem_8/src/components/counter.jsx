import {connect} from 'react-redux'
import { incrementCounter, decrementCounter } from "../redux/action";

const Counter = ({counter, incrementCounter, decrementCounter})=>{
    return (
        <div>
            <p>Counter = {counter}</p>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { counter: state.counter }
}
const mapDispatchToProps = dispatch  => {
    return {
        incrementCounter: ()=> dispatch(incrementCounter()),
        decrementCounter: ()=> dispatch(decrementCounter())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)