import { INCREMENT_COUNTER } from "./action";
import { DECREMENT_COUNTER } from "./action";

const initialState = {
    counter: 0,
}

export const rootReducer = (state= initialState, action) =>{
    switch(action.type){
        case INCREMENT_COUNTER:
            return {...state, counter:state.counter + action.payload};
        case DECREMENT_COUNTER:
            return {...state, counter:state.counter - action.payload}
        default:
            return state;        
    }
}
