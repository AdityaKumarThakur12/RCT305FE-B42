import { FETCH_DATA_PENDING,FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "./actions";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_DATA_PENDING:
            return {...state, loading: true, error: null};
        case FETCH_DATA_SUCCESS:
            return {...state, loading: false, items: action.payload}
        case FETCH_DATA_ERROR:
            return {...state, loading: false, error: action.payload}   
        default:
            return state; 
    }
}
export default rootReducer;