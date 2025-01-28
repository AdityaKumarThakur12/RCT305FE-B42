let initialState = {
    data: [],
    error: null,
}

const rootReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                date: [...state.data, action.payload],
            };
        case "ADD_ITEM_ERROR":
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;        
    }
}

export default rootReducer;