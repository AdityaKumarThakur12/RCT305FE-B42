export const INCREMENT_COUNTER = "INCREMENT_COUNTER"
export const DECREMENT_COUNTER = "DECREMENT_COUNTER"

export const incrementCounter = ()=>{
    return {
        type: INCREMENT_COUNTER,
        payload: 1,
    }
}

export const decrementCounter = ()=>{
    return {
        type: DECREMENT_COUNTER,
        payload: 1,
    }
}